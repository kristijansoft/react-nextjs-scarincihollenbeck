import FirmOverviewPage from 'components/pages/firm-overview-page';
import { headers, sortByKey } from 'utils/helpers';
import { SITE_URL, BASE_API_URL } from 'utils/constants';

export default function FirmOverview({
  mainTabs, members, mainContent, seo,
}) {
  const subHeaderContent = mainContent.match(/<h2>(.*?)<\/h2>/g);
  const bodyContent = mainContent.replace(subHeaderContent[0], '');
  const sortedAdmins = sortByKey(members.admin, 'orderBy');
  const canonicalUrl = `${SITE_URL}/firm-overview`;
  const title = 'Firm Overview';

  const firmOverviewProps = {
    mainTabs,
    seo,
    bodyContent,
    sortedAdmins,
    canonicalUrl,
    title,
    members,
    subHeaderContent,
  };

  return <FirmOverviewPage {...firmOverviewProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/firm-overview/content`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const {
    mainTabs, members, mainContent, seo,
  } = request;

  return {
    props: {
      mainTabs,
      members,
      mainContent,
      seo,
    },
    revalidate: 1,
  };
}
