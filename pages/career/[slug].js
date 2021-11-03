import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import CareerProfile from 'components/pages/career-profile';
import { SITE_URL } from 'utils/constants';
import { getCareersPaths, getCareersContent } from 'utils/queries';

export default function Career({ career }) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const canonicalUrl = `${SITE_URL}/${career.uri}`;

  const careerProps = {
    career,
    canonicalUrl,
  };
  return <CareerProfile {...careerProps} />;
}

export async function getStaticPaths() {
  const paths = await getCareersPaths();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const request = await getCareersContent(params.slug);

  if (request === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: request,
    },
    revalidate: 1,
  };
}
