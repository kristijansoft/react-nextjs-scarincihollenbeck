import LibraryPage from 'components/pages/library-page';
import { getSearchQueryResults } from 'utils/queries';

export default function LibrarySearch({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
  query,
}) {
  const currentPageTitle = pageTitle.replace(/-/g, ' ');

  const libraryProps = {
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    query,
    seo: {},
    currentPageTitle,
    pageTitle: 'Article Library',
    pageSubTitle:
      'Scarinci Hollenbeck regularly publishes articles pertaining to legal updates affecting individuals and institutions in New York and New Jersey, and the world at large. Here you can find coverage for when we welcome new attorneys, significant wins we’ve secured on behalf of our clients, and general announcements.',
  };

  return <LibraryPage {...libraryProps} />;
}

export async function getServerSideProps({ query }) {
  const { term } = query;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  let tempChildCat = ``;

  if (term) {
    tempStr += `offset=1&term=${term}`;
    tempChildCat += term;
  }

  const [results, authors, childrenOfCurrentCategory, popularCategories] = await getSearchQueryResults(tempStr, tempChildCat);

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      pageTitle: tempChildCat,
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
    },
  };
}
