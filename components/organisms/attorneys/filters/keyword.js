import Form from 'react-bootstrap/Form';

export default function ArchiveAttorneyFitlersKeyword({ handleChange }) {
  return (
    <Form inline>
      <Form.Control
        type="text"
        placeholder="Search by keyword..."
        onChange={handleChange}
        className="w-100 mb-2"
      />
    </Form>
  );
}
