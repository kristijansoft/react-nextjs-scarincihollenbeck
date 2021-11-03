import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LocationPage from 'components/pages/location-page';
import { getLocationContent } from 'utils/queries';

export default function AllLocations({
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

export async function getStaticProps() {
  const [locations, currentOffice, currentOfficePosts] = await getLocationContent('lyndhurst');
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
