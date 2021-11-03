import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Text.module.css';

const checkAllOffices = (location) => {
  const splitLocs = location.split(',').filter((i) => i.trim() !== 'NJ');

  if (splitLocs.length > 1) {
    return 'Multiple locations';
  }

  return location;
};

function checkForEmptyResults() {
  return (
    <Container className="mt-2">
      <Row>
        <Col sm={12}>
          <div className="my-5">
            <h3 className={`${styles.redTitle} text-center`}>
              <strong>Sorry, no career positions available</strong>
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function renderResults(positions) {
  return (
    <div className="w-100 border mt-0">
      <Container className="mt-2">
        <Row>
          {positions.map((p) => (
            <Col sm={12} md={4} key={p.title} className="mt-3 mb-2">
              <Link href="/career/[slug]" as={`/career${p.slug}`}>
                <a className="text-dark">
                  <div className="card d-flex flex-column">
                    <div className="p-2">
                      <p className={`${styles.redTitle} mb-2 border-bottom`}>
                        <strong>{p.title}</strong>
                      </p>
                      <p className="my-0">
                        <strong className="mr-1">Location:</strong>
                        {checkAllOffices(p.positionLocation)}
                      </p>
                      <p className="my-0">
                        <strong className="mr-1">Type:</strong>
                        {p.positionType}
                      </p>
                      <p className="my-0">
                        <strong className="mr-1">Start:</strong>
                        {p.startDate}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default function ArchiveCareersResults({ positions }) {
  if (positions <= 0) {
    return checkForEmptyResults();
  }

  return renderResults(positions);
}
