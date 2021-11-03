import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import AttorneyProfile from 'components/pages/attorney-profile';
import { getAttorneyPaths, getAttorneyBackPageContent } from 'utils/queries';

export default function AttorneyContent({
  bio,
  seo,
  contact,
  content,
  slug,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const attorneyProps = {
    slug,
    seo,
    body: {
      bio,
      content,
    },
    attorneyFooterBlogArticles,
    attorneyFooterNewsArticles,
    header: {
      image: bio.headerContent.profileImage,
      profile: { ...bio.headerContent, ...contact },
    },
  };

  return <AttorneyProfile {...attorneyProps} />;
}

export async function getStaticPaths() {
  const request = await getAttorneyPaths();
  const paths = [];

  request.forEach((attorney) => attorney.sidebarLinks.forEach((link) => paths.push(link)));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await getAttorneyBackPageContent(params.slug, params.type);

  if (bio.status === 404) {
    return {
      notFound: true,
    };
  }

  let attorneyFooterBlogArticles = [];
  let attorneyFooterNewsArticles = [];

  if (!Object.keys(attorneyBlogArticles).includes('status')) {
    const firstThreeBlogs = attorneyBlogArticles
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
      .filter((_, i) => i <= 3);

    attorneyFooterBlogArticles = [...firstThreeBlogs];
  }

  if (!Object.keys(attorneyNewsArticles).includes('status')) {
    const firstThreeNews = attorneyNewsArticles
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
      .filter((_, i) => i <= 3);

    attorneyFooterNewsArticles = [...firstThreeNews];
  }

  let typeToTerm = '';

  if (params.type === 'news-press-releases') {
    typeToTerm = 'News & Press Releases';
  } else {
    const splitType = params.type.split('-');
    const capitalizeEachWord = splitType
      .map((word) => `${word[0].toUpperCase()}${word.slice(1, word.length)}`)
      .join(' ');
    typeToTerm = capitalizeEachWord;
  }

  const seo = {
    title: `${bio.seo.title} ${typeToTerm}`,
    canonicalLink: bio.seo.canonicalLink,
    metaDescription: `Learn more about ${bio.seo.title}'s ${typeToTerm}. Please get in touch if you have any questions.`,
    image: bio.seo.featuredImg,
    designation: bio.headerContent.title,
    socialMediaLinks: bio.seo.socialMedia,
  };

  return {
    props: {
      bio,
      seo,
      contact,
      content,
      slug: params.slug,
      attorneyFooterBlogArticles,
      attorneyFooterNewsArticles,
    },
    revalidate: 1,
  };
}
