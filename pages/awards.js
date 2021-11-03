import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';
import SitePage from 'components/pages/site-page';

export default function Awards({ title, content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/awards`;

  const awardsPageProps = {
    seo,
    site: {
      title,
      description: subTitle,
    },
    canonicalUrl,
    bodyContent,
  };

  return <SitePage {...awardsPageProps} />;
}

export async function getStaticProps() {
  const request = await getPageContent('awards');
  const { content, seo } = request;

  return {
    props: {
      title: 'Awards',
      content,
      seo,
    },
    revalidate: 1,
  };
}
