import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/shared/attorney-card';
import { filterByKey } from 'utils/helpers';
import textStyles from 'styles/Text.module.css';

export default function ArchiveAttorneyResultsFiltered({ attorneys, userInput, select }) {
  // filter through results
  const practices = filterByKey(select, 'practices');
  const letter = filterByKey(select, 'letter');
  const desgination = filterByKey(select, 'title');
  const location = filterByKey(select, 'location');

  // filter by key -- practice
  const filterPractices = (attorney) => {
    if (practices.length > 0) {
      const prunedPracticeList = attorney.practices_array.map((p) => p.replace(/[^a-zA-Z ]/g, '').toLowerCase());
      return prunedPracticeList.indexOf(practices[0].replace(/[^a-zA-Z ]/g, '').toLowerCase()) > -1;
    }

    return attorney;
  };

  // filter by key -- location
  const filterLocation = (attorney) => {
    if (location.length > 0) {
      return attorney.location.indexOf(location[0]) >= 0;
    }
    return attorney;
  };

  // filter by key -- designation
  const filterDesignation = (attorney) => {
    if (desgination.length > 0) {
      if (desgination[0] === 'Of Counsel') {
        return (
          attorney.designation.indexOf(desgination[0]) === 0
          && attorney.designation !== 'Of Counsel/Partner Emeritus'
        );
      }
      return attorney.designation.indexOf(desgination[0]) === 0;
    }
    return attorney;
  };

  // filter by key -- query
  const filterQuery = (attorney) => {
    const practiceList = attorney.practices.replace(/&amp;/g, '&');

    if (userInput) {
      if (attorney.title.indexOf(userInput) >= 0) {
        return attorney;
      }
      if (practiceList.indexOf(userInput.trim()) >= 0) {
        return attorney;
      }
    }

    return true;
  };

  // filter by key -- letter
  const filterLetter = (attorney) => {
    if (letter.length > 0) {
      return attorney.last_name.charAt(0).toLowerCase() === letter[0].toLowerCase();
    }
    return attorney;
  };

  const aFiltered = attorneys
    .filter(filterPractices)
    .filter(filterLocation)
    .filter(filterDesignation)
    .filter(filterLetter)
    .filter(filterQuery);

  return (
    <Row>
      {aFiltered.map((m) => (
        <Col key={m.link} sm={12} md={6} lg={4} className="mb-3">
          <AttorneyCard
            link={`/attorney${m.link}`}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width={80}
            height={112}
          />
        </Col>
      ))}
      {aFiltered.length < 1 && (
        <h3 className={`${textStyles.redTitle} text-center d-block mx-auto my-4`}>
          <strong>Sorry, no attorneys found according to this query.</strong>
        </h3>
      )}
    </Row>
  );
}
