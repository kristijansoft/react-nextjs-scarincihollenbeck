import { useState } from 'react';
import { sortByKey } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { getAttorneysPageContent } from 'utils/queries';
import AttorneysPage from 'components/pages/attorneys-page';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const canonicalUrl = `${SITE_URL}/attorneys`;

const site = {
  title: 'Attorneys',
  description:
    'Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs.',
};

export default function Attorneys({
  seo, locations, designations, practices, attorneys,
}) {
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);

  /* Click Events */
  function onSelect(e, input) {
    const results = {
      selected: input,
      key: e.target.name,
    };

    setSelect(select.filter((a) => a.key !== results.key).concat(results));
  }

  /* Letter Click Event */
  function letterClick(e) {
    const selected = e.target.innerHTML;
    const key = 'letter';
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    setSelect(concatResults);
  }

  /* Handle User Input Event */
  function handleChange(e) {
    const input = e.target.value.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
    const results = { selected: userInput, key: 'query' };
    const concatResults = select.concat(results);

    setUserInput(input);
    setSelect(concatResults);
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);

    setUserInput('');
    setSelect(rQuery);
  }

  /** Clear all queries */
  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');
  const attorneysPageProps = {
    sPractices,
    clearAll,
    clearQuery,
    handleChange,
    letterClick,
    onSelect,
    userInput,
    setUserInput,
    seo,
    locations,
    designations,
    practices,
    attorneys,
    select,
    setSelect,
    alphabet,
    site,
    canonicalUrl,
  };
  return <AttorneysPage {...attorneysPageProps} />;
}

export async function getStaticProps() {
  const [attorneys, locations, designations, practices, seo] = await getAttorneysPageContent();

  return {
    props: {
      seo,
      locations,
      designations,
      practices,
      attorneys,
    },
    revalidate: 1,
  };
}
