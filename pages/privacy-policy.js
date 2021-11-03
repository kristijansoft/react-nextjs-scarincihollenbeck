import SitePage from 'components/pages/site-page';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

export default function PrivacyPolicy({ title, content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/privacy-policy`;

  const sitePageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    site: {
      title,
      description: subTitle,
    },
  };

  return <SitePage {...sitePageProps} />;
}

export async function getStaticProps() {
  const request = await getPageContent('privacy-policy');

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 1,
  };
}
