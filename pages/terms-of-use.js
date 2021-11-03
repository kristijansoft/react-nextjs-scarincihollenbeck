import SitePage from 'components/pages/site-page';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

const site = {
  title: 'Terms of use',
  description:
    'This Terms of Use Agreement (the “Agreement”) and the Privacy Policy state the terms and conditions under which you may view, access or otherwise use the blog and all content available therein (the "Blog").',
};
export default function TermsOfUse({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/terms-of-use`;

  const sitePageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    site,
  };

  return <SitePage {...sitePageProps} />;
}

export async function getStaticProps() {
  const request = await getPageContent('terms-of-use');

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
