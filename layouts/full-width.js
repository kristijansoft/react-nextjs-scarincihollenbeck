import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FullWidth = ({ children }) => (
  <Container>
    <Row>
      <Col sm={12}>{children}</Col>
    </Row>
  </Container>
);

export default FullWidth;
