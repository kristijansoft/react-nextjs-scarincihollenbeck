import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import textStyles from 'styles/Text.module.css';
import { createMarkup } from 'utils/helpers';

export default function ArchiveAttorneySelected({
  select, userInput, clearQuery, clearAll,
}) {
  const nonUserInputResults = select.filter((a) => a.key !== 'query');

  return (
    <Container className="border-bottom">
      <Row>
        <Col sm={12} md={10}>
          <ul className="no-dots list-inline my-2 mx-0">
            {userInput.length > 0 && (
              <li className="list-inline-item">
                <Button
                  variant="link"
                  className={textStyles.redTitle}
                  id={userInput}
                  onClick={() => clearQuery('query')}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click on link to remove filter"
                >
                  <strong dangerouslySetInnerHTML={createMarkup(userInput)} />
                </Button>
              </li>
            )}
            {nonUserInputResults.map((s) => (
              <li className="list-inline-item" key={s.key}>
                <Button
                  variant="link"
                  className={textStyles.redTitle}
                  id={s.selected}
                  onClick={() => clearQuery(s.key)}
                  data-toggle="tooltip"
                  data-placement="top"
                  data-html="true"
                  title="Click on link to remove filter"
                >
                  <strong>{s.selected}</strong>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={2}>
          <Button variant="danger" onClick={clearAll} className="my-2 float-right">
            Clear All
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
