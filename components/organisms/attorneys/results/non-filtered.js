import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/shared/attorney-card';
import textStyles from 'styles/Text.module.css';

function AttorneyCards(title, content) {
  return (
    <Row>
      <Col sm={12} className="my-4">
        <h3 className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}>
          <strong>{title}</strong>
        </h3>
      </Col>
      {content.map((m) => (
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
    </Row>
  );
}

export default function ArchiveAttorneyResultsNonFiltered({ attorneys }) {
  /// managing partners
  const managingPartners = attorneys.filter((a) => a.designation === 'Managing Partner');

  // partners & nyc managing partner
  const partners = attorneys.filter(
    (a) => a.designation === 'Partner'
      || a.designation === 'NYC Managing Partner'
      || a.designation === 'Washington, D.C. Managing Partner'
      || a.designation === 'Red Bank, NJ Managing Partner',
  );

  // counsel
  const counsel = attorneys.filter((a) => a.designation === 'Counsel');

  // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter((a) => a.designation.indexOf('Of Counsel') > -1);

  // senior associates
  const seniorAssociates = attorneys.filter((a) => a.designation === 'Senior Associate');

  // associates
  const associates = attorneys.filter((a) => a.designation === 'Associate');

  return (
    <div>
      {AttorneyCards('Managing Partner', managingPartners)}
      {AttorneyCards('Partners', partners)}
      {AttorneyCards('Counsel', counsel)}
      {AttorneyCards('Of Counsel & Counsel Emeritus', ofCounsel)}
      {AttorneyCards('Senior Associates', seniorAssociates)}
      {AttorneyCards('Associates', associates)}
    </div>
  );
}
