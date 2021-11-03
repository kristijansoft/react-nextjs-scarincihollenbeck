import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup, formatDate } from 'utils/helpers';
import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function AttorneyProfileVideo({ content }) {
  return (
    <Container className={marginStyles.mtMinusMd2}>
      <Row>
        <Col sm={12}>
          <p className={grayTitleStyles.title}>Videos</p>
        </Col>
        {content.map((c) => (
          <Col sm={12} key={c.title}>
            <div dangerouslySetInnerHTML={createMarkup(c.embed_video)} />
            <div style={{ marginTop: '-1em', marginBottom: '2em' }}>
              <h5 className="text-dark mb-0">
                <strong>{c.title}</strong>
              </h5>
              <p className="text-dark">{formatDate(c.date)}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
