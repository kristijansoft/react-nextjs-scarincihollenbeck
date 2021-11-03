require('dotenv').config();
const mysql = require('mysql2/promise');
const { formatDate } = require('../../utils/helpers');

export const getPostContent = async (slug, category) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const postContentQuery = `SELECT ID, post_author, post_date, post_title, post_content FROM ${process.env.POST_TABLE} WHERE post_name= ?`;
  const postMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ?`;
  const postCategoriesQuery = `SELECT term_taxonomy_id FROM ${process.env.TERM_RELATIONSHIPS_TABLE} WHERE object_id = ?`;
  const currentCategoryFromSlugQuery = `SELECT term_id FROM ${process.env.TERMS_TABLE} WHERE slug = ?`;
  const currentTagsFromIdQuery = `SELECT term_id, name FROM ${process.env.TERMS_TABLE} WHERE term_id = ?`;
  const getTagsFromIdQuery = `SELECT term_id, taxonomy, parent FROM ${process.env.TERMS_TAXONOMY} WHERE term_taxonomy_id = ?`;
  const postAuthorQuery = `SELECT ID, user_url, display_name FROM ${process.env.AUTHORS_TABLE} WHERE user_nicename = ?`;
  const postAuthorMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.AUTHORSMETA_TABLE} WHERE user_id = ?`;
  const sortedAuthorQuery = `SELECT meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ? AND meta_key='author_display_order'`;

  const [post] = await connection.execute(postContentQuery, [slug]);

  if (post.length <= 0) {
    return {
      status: 404,
    };
  }

  const [postMeta] = await connection.execute(postMetaQuery, [post[0].ID]);
  const [tagsMeta] = await connection.execute(postCategoriesQuery, [post[0].ID]);
  const [catSlug] = await connection.execute(currentCategoryFromSlugQuery, [category]);

  const getFieldData = (arr, field) => {
    const check = arr.filter((post) => post.meta_key === field);

    if (check.length > 0) {
      return check[0].meta_value;
    }

    return '';
  };

  const getImageData = (content) => {
    const check = content.match(/src="([^"]*)"/g);

    if (check) {
      return check[0].split('"')[1];
    }

    return 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png';
  };

  const getFeaturedImageCaption = (content) => {
    const featuredImageCaption = content.match(/<\s*figcaption(?:.*)>(.*)<\/figcaption>/g);

    if (featuredImageCaption) {
      return featuredImageCaption[0];
    }
    return '';
  };

  const checkH2Tags = (content) => {
    const subTitle = content.match(/<h2(?:.*)>(.*?)<\/h2>/g);

    if (subTitle) {
      return subTitle[0];
    }

    return '';
  };

  const modPostContent = (content) => {
    const fullImage = content.match(/<figure(?:.*)>(.*?)<\/figure>/g);
    const subTitle = content.match(/<h2(?:.*)>(.*?)<\/h2>/g);
    let response = '';

    if (fullImage && !subTitle) {
      response = content.replace(fullImage[0], '');
    }

    if (subTitle && !fullImage) {
      response = content.replace(subTitle[0], '');
    }

    if (fullImage) {
      response = content.replace(fullImage[0], '');
    }

    if (subTitle) {
      response = response.replace(subTitle[0], '');
    }

    return response;
  };

  const subTitle = checkH2Tags(post[0].post_content);
  const featuredImage = getImageData(post[0].post_content);
  const featuredImageCaption = getFeaturedImageCaption(post[0].post_content);
  const bodyContent = modPostContent(post[0].post_content);

  const postTags = tagsMeta.map((tag) => tag.term_taxonomy_id);

  const allTagsMeta = [];
  const allTags = [];

  /** Helper function to return string instead of unknown character */

  /**
   *  Extract all the tag information from id
   */
  for (let i = 0; i < postTags.length; i++) {
    const [row] = await connection.execute(getTagsFromIdQuery, [postTags[i]]);

    allTagsMeta.push(row);
  }

  /**
   *  Get all usable tag information from meta tag ids
   */

  for (let i = 0; i < allTagsMeta.length; i++) {
    const [row] = await connection.execute(currentTagsFromIdQuery, [allTagsMeta[i][0].term_id]);

    allTags.push({
      id: row[0].term_id,
      name: row[0].name,
      label: allTagsMeta[i][0].taxonomy,
      parent: allTagsMeta[i][0].parent,
    });
  }

  /** *
   *  Get all authors
   */
  const postAuthors = allTags.filter((tag) => tag.label === 'author');
  const authorData = [];

  for (let i = 0; i < postAuthors.length; i++) {
    const authorName = postAuthors[i].name === 'Scarinci Hollenbeck' ? 'scarinci-hollenbeck' : postAuthors[i].name;
    const [author] = await connection.execute(postAuthorQuery, [authorName]);

    // get the authors description
    const [authorMeta] = await connection.execute(postAuthorMetaQuery, [author[0].ID]);

    const authorDescription = getFieldData(authorMeta, 'description');

    authorData.push({
      ...author[0],
      authorDescription,
    });
  }

  /** Query author order and sort authors */
  const [authorsByOrderResults] = await connection.execute(sortedAuthorQuery, [post[0].ID]);
  const authorOrder = [];

  if (authorsByOrderResults.length > 0) {
    const sanitizeResponse = authorsByOrderResults[0].meta_value
      .replace(/";i:[0-9];/g, '')
      .replace(/";}/, '')
      .split(/s:[0-9]:/);

    const removeFirstIndex = sanitizeResponse.slice(1, sanitizeResponse.length);

    for (let i = 0; i < removeFirstIndex.length; i++) {
      authorOrder.push(parseInt(removeFirstIndex[i].replace(/"/g, ''), 10));
    }
  }

  if (authorOrder.length > 0) {
    authorData.sort((a, b) => authorOrder.indexOf(a.ID) - authorOrder.indexOf(b.ID));
  }

  const categories = allTags.filter((tag) => tag.label === 'category');
  const tags = allTags.filter((tag) => tag.label === 'post_tag');
  const postFound = categories.filter((cat) => {
    if (cat.id === catSlug[0].term_id) {
      return true;
    }
    // check parent
    if (cat.parent === catSlug[0].term_id) {
      return true;
    }

    return false;
  });

  const response = {
    status: 200,
    postId: post[0].ID,
    postQueryCategoryId: catSlug[0].term_id,
    post: {
      content: bodyContent,
      title: post[0].post_title,
      date: formatDate(post[0].post_date),
      subTitle: subTitle.replace(/<\/?[^>]+(>|$)/g, '') || '',
      featuredImage,
      featuredImageCaption,
    },
    seo: {
      metaDescription: getFieldData(postMeta, '_yoast_wpseo_metadesc'),
      metaTitle: getFieldData(postMeta, '_yoast_wpseo_title'),
      readTime: getFieldData(postMeta, '_yoast_wpseo_estimated-reading-time-minutes'),
    },
    categories,
    tags,
    authors: authorData,
  };

  if (postFound.length > 0) {
    return response;
  }

  return {
    status: 404,
  };
};

export default async (req, res) => {
  try {
    const fetchPost = await getPostContent(
      'covid-19-update-for-school-districts',
      'covid-19-education-alert',
      // 'what-to-know-about-the-secs-shadow-trading-enforcement-action',
      // 'law-firm-insights'
    );

    if (fetchPost.status === 404) {
      return res.status(404).send({ ...fetchPost });
    }

    return res.status(200).send({ ...fetchPost });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
