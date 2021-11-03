import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Honeycomb.module.css';

export default function HomeHoneyCombSection({ contentOne, contentTwo }) {
  return (
    <Row className={styles.honeyCombContainer}>
      <Col sm={12} md={6}>
        {contentOne}
      </Col>
      <Col sm={12} md={6}>
        {contentTwo}
      </Col>
      <style jsx>
        {`
          div.row {
            margin-top: 10rem;
          }
          h3 {
            color: #db2220;
          }
        `}
      </style>
    </Row>
  );
}
