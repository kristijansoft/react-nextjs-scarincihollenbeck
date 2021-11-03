import Container from 'react-bootstrap/Container';
import Filtered from './filtered';
import NotFiltered from './non-filtered';

export default function ArchiveAttorneyResults({ attorneys, select, userInput }) {
  return (
    <Container className="mt-2">
      {select.length > 0 ? (
        <Filtered select={select} attorneys={attorneys} userInput={userInput} />
      ) : (
        <NotFiltered attorneys={attorneys} />
      )}
    </Container>
  );
}
