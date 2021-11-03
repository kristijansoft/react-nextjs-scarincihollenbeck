import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import AttorneyProfile from 'components/pages/attorney-profile';
import { getAttorneyPaths, getAttorneyContent } from 'utils/queries';

export default function AttorneyContact({
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
  const paths = request.map((a) => `/attorney${a.link}/contact`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await getAttorneyContent(params.slug);

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

  const seo = {
    title: `Contact ${bio.seo.title}`,
    canonicalLink: bio.seo.canonicalLink,
    metaDescription: `Get in touch with ${bio.seo.title} by filling out the contact form. We look forward to learning more about your legal needs.`,
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
