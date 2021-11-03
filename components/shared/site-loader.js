import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function SiteLoader() {
  return (
    <Container>
      <Row className="justify-content-center align-self-center">
        <BarLoader color="#DB2220" />
      </Row>
    </Container>
  );
}
