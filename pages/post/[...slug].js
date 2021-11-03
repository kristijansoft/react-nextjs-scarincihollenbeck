import { useRouter } from 'next/router';
import { getPostContent } from 'pages/api/get-post-content';
import { SITE_URL } from 'utils/constants';
import SiteLoader from 'components/shared/site-loader';
import PostPage from 'components/pages/post-page';

export default function LawFirmInsightsPost({
  post,
  seo,
  categories,
  tags,
  authors,
  category,
  postUrl,
}) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === 'Scarinci Hollenbeck' ? SITE_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const postProps = {
    post,
    seo,
    categories,
    tags,
    canonicalUrl,
    metaAuthorLinks,
    category,
    postUrl,
    authors,
  };

  return <PostPage {...postProps} />;
}

export async function getServerSideProps({ params, res, query }) {
  const postUrl = params.slug[params.slug.length - 1];
  const { category } = query;
  const request = await getPostContent(postUrl, category);

  if (request.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const {
    post, seo, categories, tags, authors,
  } = request;

  return {
    props: {
      post,
      seo,
      categories,
      tags,
      authors,
      category,
      postUrl,
    },
  };
}
