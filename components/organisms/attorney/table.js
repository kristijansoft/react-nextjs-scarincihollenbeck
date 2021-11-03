import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/Table.module.css';
import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function AttorneyProfileTab({ content, title }) {
  return (
    <Row className={marginStyles.mtMinusMd2}>
      <Col sm={12}>
        <p className={grayTitleStyles.title}>{title}</p>
      </Col>
      <Col className={styles.content} sm={12}>
        {content.body.map((b) => (
          <div key={b[0].c} className="mb-3 ml-2">
            <p className="mb-0">
              <strong>
                <u>
                  <span dangerouslySetInnerHTML={createMarkup(b[0].c)} />
                </u>
              </strong>
              {b[0] && b[0] && ' - '}
              <span
                style={{ fontSize: '15px' }}
                dangerouslySetInnerHTML={createMarkup(b[1].c)}
              />
              {' '}
              {b[2] && (
              <small>
                (
                {b[2].c}
                )
              </small>
              )}
            </p>
          </div>
        ))}
      </Col>
    </Row>
  );
}
