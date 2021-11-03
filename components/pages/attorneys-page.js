import { NextSeo } from 'next-seo';
import ArchiveAttorneySelected from 'components/organisms/attorneys/selected';
import Filters from 'components/organisms/attorneys/filters';
import Results from 'components/organisms/attorneys/results';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';

export default function AttorneysPage({
  sPractices,
  clearAll,
  clearQuery,
  handleChange,
  letterClick,
  onSelect,
  userInput,
  seo,
  locations,
  designations,
  select,
  alphabet,
  site,
  canonicalUrl,
  attorneys,
}) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={6} />
      <FullWidth>
        <div className="mb-5">
          {/** Filters */}
          <Filters
            practices={sPractices}
            alphabet={alphabet}
            locations={locations}
            designation={designations}
            userInput={userInput}
            handleChange={handleChange}
            onSelect={onSelect}
            letterClick={letterClick}
          />
          {/** End of Filters */}
          {/** Results */}
          <div className="w-100 border mt-sm-6 mt-md-0">
            <ArchiveAttorneySelected
              select={select}
              clearQuery={clearQuery}
              userInput={userInput}
              clearAll={clearAll}
            />
            {attorneys.length > 0 && (
              <Results attorneys={attorneys} userInput={userInput} select={select} />
            )}
          </div>
          {/** End of Results */}
        </div>
      </FullWidth>
    </>
  );
}
