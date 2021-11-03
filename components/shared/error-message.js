import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function ErrorMessage() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} className="my-5" dismissible>
          <Alert.Heading>There is an error loading this information</Alert.Heading>
          <p>
            Try clearing your browser cache, and refresh the page. If there error continues please
            email
            {' '}
            <strong>info@sh-law..com</strong>
          </p>
        </Alert>
      )}
    </>
  );
}
