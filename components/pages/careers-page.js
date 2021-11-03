import { NextSeo } from 'next-seo';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/organisms/careers/body';
import CareersEqualOpportunity from 'components/organisms/careers/equal-opportunity';

export default function CareersPage({
  careers,
  query,
  locations,
  positionTypes,
  setQuery,
  executeSearch,
  setPositionType,
  setLocation,
  seo,
  site,
}) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={6} />
      <FullWidth>
        {careers && (
          <Body
            careers={careers}
            positionTypes={positionTypes}
            locations={locations}
            query={query}
            setQuery={setQuery}
            setLocation={setLocation}
            setPositionType={setPositionType}
            executeSearch={executeSearch}
          />
        )}
        <CareersEqualOpportunity />
      </FullWidth>
    </>
  );
}
