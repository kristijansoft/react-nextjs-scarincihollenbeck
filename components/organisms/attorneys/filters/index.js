import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/AttorneyArchives.module.css';
import Keyword from './keyword';
import Letter from './letter';
import Practices from './practices';
import ArchiveAttorneyFitlersTitle from './title';
import ArchiveAttorneyFitlersLocation from './location';

export default function ArchiveAttorneyFilters({
  practices,
  alphabet,
  locations,
  designation,
  userInput,
  handleChange,
  onSelect,
  letterClick,
}) {
  return (
    <>
      <Container className={`${styles.darkGrayBackground} border`}>
        <Row className="mt-2 mb-0">
          <Col sm={12} md={4}>
            <Keyword userInput={userInput} handleChange={handleChange} />
          </Col>
          <Col sm={12} md={8} className="mx-0 px-0">
            <Letter alphabet={alphabet} letterClick={letterClick} />
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.lightGrayBackground} border p-2`}>
        <Row>
          <Col sm={12} md={4}>
            <Practices practices={practices} onSelect={onSelect} />
          </Col>
          <Col sm={12} md={4}>
            <ArchiveAttorneyFitlersLocation locations={locations} onSelect={onSelect} />
          </Col>
          <Col sm={12} md={4}>
            <ArchiveAttorneyFitlersTitle designation={designation} onSelect={onSelect} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
