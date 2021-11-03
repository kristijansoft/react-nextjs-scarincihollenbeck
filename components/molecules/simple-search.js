import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { urlify } from 'utils/helpers';

export default function SimpleSearch({ searchId = 'simplesearch' }) {
  const router = useRouter();
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const santizeTerm = urlify(term.replace(/[^a-zA-Z ]/g, ''));
    setLoading(true);

    router.push({
      pathname: '/library/search',
      query: { term: santizeTerm },
    });
  };

  return (
    <div className="my-0 py-0">
      <Form onSubmit={handleSubmit} role="search" className="my-0 py-0">
        <Form.Group controlId={searchId}>
          <Form.Label>
            <span className="sr-only">Search Site</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Keyword.."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="danger">
          {loading ? <>...</> : <>Search</>}
        </Button>
      </Form>
    </div>
  );
}
