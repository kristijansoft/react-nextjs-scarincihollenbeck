import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

export default function HomeWhoWeAreSection() {
  return (
    <Row className="mt-5">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Who We Are</h3>
        </div>
      </Col>
      <Col sm={12} className="text-center mt-5 mb-0 pb-0">
        <p>
          With a growing practice of more than 60 experienced attorneys, Scarinci Hollenbeck is a
          regional alternative to a National 250 law firm. With offices in New Jersey, New York
          City, and the District of Columbia, we serve the niche practice areas most often required
          by institutions, corporations, entities, and the people who own and control them.
        </p>
        <p>
          Since the firm was founded in 1988, we have maintained our reputation for getting things
          done. Most attorneys at Scarinci Hollenbeck have significant experience in their practice
          areas, and have published and lectured on current topics in their field.
        </p>
        <style jsx>{'p{ font-size: 1.1rem }'}</style>
      </Col>
    </Row>
  );
}
