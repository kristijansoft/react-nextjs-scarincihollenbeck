import { useRouter } from 'next/router';
import { HOLIDAY_SLUGS, SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';
import SiteLoader from 'components/shared/site-loader';
import HolidayPage from 'components/pages/holiday-page';

export default function FirmHoliday({
  title, content, seo, slug,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  let extractSubTitle = '';
  let subTitle = '';
  let bodyContent = '';

  if (content) {
    extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${SITE_URL}/holiday/${slug}`;

  const holidayPageProps = {
    canonicalUrl,
    title,
    subTitle,
    bodyContent,
    seo,
  };

  return <HolidayPage {...holidayPageProps} />;
}

export async function getStaticPaths() {
  const urls = HOLIDAY_SLUGS.map((slug) => slug);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const request = await getPageContent(params.slug);

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
      slug: params.slug,
    },
    revalidate: 1,
  };
}
