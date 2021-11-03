import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import { urlify } from 'utils/helpers';

export default function FrontSearch() {
  const router = useRouter();
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const santizeTerm = urlify(term.replace(/[^a-zA-Z ]/g, ''));
    setLoading(true);

    await router.push({
      pathname: '/library/search',
      query: { term: santizeTerm },
    });
  };

  return (
    <div className="my-0 py-0">
      <Form onSubmit={handleSubmit}>
        <Form.Row role="search" className="align-items-center">
          <Col sm={9} className="my-1">
            <Form.Label htmlFor="frontSearch" srOnly>
              Search
            </Form.Label>
            <Form.Control
              id="frontSearch"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Keyword"
              size="md"
            />
          </Col>
          <Col sm="auto" className="my-1">
            <Button type="submit" size="md" variant="danger">
              {loading ? <ClipLoader loading={loading} size={12} color="#FFF" /> : <>Search</>}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
