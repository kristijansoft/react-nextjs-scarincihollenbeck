import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LocationPage from 'components/pages/location-page';
import { getLocationPaths, getLocationContent } from 'utils/queries';

export default function SingleLocation({
  seo, offices, currentOffice, posts,
}) {
  const router = useRouter();
  const locationProps = {
    seo,
    offices,
    currentOffice,
    posts,
  };

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return <LocationPage {...locationProps} />;
}

export async function getStaticPaths() {
  const paths = await getLocationPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [locations, currentOffice, currentOfficePosts] = await getLocationContent(params.slug);
  if (currentOffice.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      offices: locations.offices || {},
      seo: currentOffice.seo || {},
      currentOffice,
      posts: currentOfficePosts,
    },
    revalidate: 1,
  };
}
