import { NextSeo } from 'next-seo';
import LibraryLayout from 'components/organisms/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';

export default function LibraryPage({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  query = '',
  isSearch,
  pageTitle,
  pageSubTitle,
  currentPageTitle = '',
  seo,
}) {
  return (
    <>
      {isSearch && <NextSeo nofollow />}
      {!isSearch && Object.keys(seo).length > 0 && (
        <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      )}
      <SingleSubHeader span={7} offset={2} title={pageTitle} subtitle={pageSubTitle} />
      <LibraryLayout
        results={results}
        authors={authors}
        popularCategories={popularCategories}
        childrenOfCurrentCategory={childrenOfCurrentCategory}
        pageTitle={currentPageTitle}
        query={query}
      />
    </>
  );
}
