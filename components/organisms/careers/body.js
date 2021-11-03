import CareersFilterForms from 'components/organisms/careers/filter-forms';
import Results from 'components/organisms/careers/results';

export default function Body({
  careers,
  query,
  locations,
  positionTypes,
  setQuery,
  executeSearch,
  setPositionType,
  setLocation,
}) {
  return (
    <div className="mb-5">
      <CareersFilterForms
        locations={locations}
        positionTypes={positionTypes}
        query={query}
        setQuery={setQuery}
        setPositionType={setPositionType}
        setLocation={setLocation}
        executeSearch={executeSearch}
      />
      <Results positions={careers} />
    </div>
  );
}
