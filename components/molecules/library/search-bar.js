import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ClipLoader from 'react-spinners/ClipLoader';

export default function SearchBar({
  onChange, onSubmit, searchTerm, loading,
}) {
  return (
    <Col sm={12} style={{ backgroundColor: '#495057' }}>
      <Row>
        <Col sm={12} md={3} className="py-4">
          <p className="text-white mb-0">
            <strong>Scarinci Hollenbeck Article Library</strong>
          </p>
        </Col>
        <Col sm={12} md={6} className="py-3">
          <Form onSubmit={onSubmit}>
            <Form.Row className="align-items-center">
              <Col sm={12} md={{ span: 8, offset: 1 }}>
                <Form.Label htmlFor="inlineFormInputSearchTerm" srOnly>
                  Enter Search Term
                </Form.Label>
                <Form.Control
                  value={searchTerm}
                  onChange={(e) => onChange(e.target.value)}
                  id="inlineFormInputSearchTerm"
                  placeholder="Enter search term..."
                />
              </Col>
              <Col xs={12} md="auto" className="my-1">
                <Button variant="danger" type="submit">
                  {loading ? <ClipLoader loading={loading} size={12} color="#FFF" /> : <>Search</>}
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col sm={12} md={3} className="py-4">
          <p className="text-white mb-0 text-center">
            <strong>Follow us:</strong>
            <a
              href="https://www.linkedin.com/company/scarinci-hollenbeck-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white"
            >
              <u>LinkedIn</u>
            </a>
            <a
              href="https://www.facebook.com/ScarinciHollenbeck/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white"
            >
              <u>Facebook</u>
            </a>
          </p>
        </Col>
      </Row>
    </Col>
  );
}
