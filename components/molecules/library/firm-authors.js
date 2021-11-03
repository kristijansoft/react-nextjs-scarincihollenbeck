import Link from 'next/link';
import { urlify } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function FirmAuthors({ authors }) {
  return (
    <>
      <p className={`${fontStyles.ft12rem} d-block w-100`}>
        <strong>Firm Authors</strong>
      </p>
      <ul className={styles.authorList}>
        {authors.map((author) => (
          <li key={author.lastName} className={`${styles.author} list-unstyled`}>
            <Link href={`/library/author/${urlify(author.username)}`}>
              <a className="text-dark">{author.fullName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
