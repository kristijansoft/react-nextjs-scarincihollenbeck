import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import FirmPage from 'components/pages/firm-page';
import { FIRM_PAGES, SITE_URL } from 'utils/constants';
import { getFirmPagesContent } from 'utils/queries';

export default function FirmPages({ page, relatedPages, currentPage }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}/${currentPage}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const firmPageProps = {
    page,
    relatedPages,
    canonicalUrl,
  };

  return <FirmPage {...firmPageProps} />;
}

export async function getStaticPaths() {
  const urls = FIRM_PAGES.map((a) => `/firm-pages${a.slug}`);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const request = await getFirmPagesContent(params.slug);
  const relatedPages = FIRM_PAGES.filter((a) => a.slug.replace('/', '') !== params.slug);

  return {
    props: {
      page: request,
      relatedPages,
      currentPage: params.slug,
    },
    revalidate: 1,
  };
}
