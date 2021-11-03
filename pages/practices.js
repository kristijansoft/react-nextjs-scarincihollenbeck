import PracticesPage from 'components/pages/practices-page';
import { sortByKey, headers } from 'utils/helpers';
import { SITE_URL, BASE_API_URL } from 'utils/constants';

const seo = {
  title: 'Attorney Legal Practices | Scarinci Hollenbeck',
  metaDesc:
    "Scarinci Hollenbeck attorneys provide a fully scaled platform of law practices for today's entrepreneurs in the New York and New Jersey area.",
  canonicalUrl: `${SITE_URL}/practices`,
};

const site = {
  title: 'Legal Practices',
  description:
    "Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today's businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need.",
};

function sortPracticeCategorys(list) {
  const core = list.filter((e) => e.category === 'Core Practices');
  const additional = list.filter((e) => e.category === 'Additional Practices');
  const business = list.filter((e) => e.category === 'Business Related Practices');

  return {
    core,
    additional,
    business,
  };
}

export default function Practices({ core, additional, business }) {
  const sortedCorePractices = sortByKey(core, 'title');
  const sortedAdditionalPractices = sortByKey(additional, 'title');
  const sortedBusienssPractices = sortByKey(business, 'title');

  const practicesPageProps = {
    site,
    seo,
    sortedCorePractices,
    sortedAdditionalPractices,
    sortedBusienssPractices,
  };

  return <PracticesPage {...practicesPageProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/practice-portal/page/`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const results = sortPracticeCategorys(request.practices);
  const { core, additional, business } = results;

  return {
    props: {
      core,
      additional,
      business,
    },
    revalidate: 1,
  };
}
