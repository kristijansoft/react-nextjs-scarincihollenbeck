import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/AttorneyArchives.module.css';

export default function ArchiveAttorneyFitlersTitle({ designation, onSelect }) {
  return (
    <DropdownButton
      variant="link"
      title="Filter by title"
      className={`${styles.filter} my-3 my-md-0`}
    >
      {designation.map((desig) => (
        <Dropdown.Item
          key={desig.ID}
          value={desig.title}
          name="title"
          className="font-weight-bold"
          onClick={(e) => onSelect(e, desig.title)}
        >
          {desig.title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
