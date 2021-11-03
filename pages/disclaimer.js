import SitePage from 'components/pages/site-page';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

const site = {
  title: 'Disclaimer',
  description:
    'This Terms of Use Agreement (the “Agreement”) and the Privacy Policy state the terms and conditions under which you may view, access or otherwise use the website located at http://www.sh-law.com.',
};
export default function Disclaimer({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/disclaimer`;

  const sitePageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    site,
  };
  return <SitePage {...sitePageProps} />;
}

export async function getStaticProps() {
  const request = await getPageContent('disclaimer');

  const { content, seo } = request;

  return {
    props: {
      content,
      seo,
    },
    revalidate: 1,
  };
}
