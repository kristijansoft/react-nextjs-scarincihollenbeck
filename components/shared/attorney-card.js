import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/AttorneyCard.module.css';
import fontStyles from 'styles/Fonts.module.css';
import textStyles from 'styles/Text.module.css';

export default function AttorneyCard({
  link, image, name, title, number, email,
}) {
  return (
    <div className={`d-flex flex-row ${styles.attorneyCard}`} height={148}>
      <Link href={link}>
        <a>
          <Image src={image} alt={name} width={108} height={148} fill="responsive" />
        </a>
      </Link>
      <div className="my-auto ml-3">
        <Link href={link}>
          <a>
            <p className={`text-uppercase ${textStyles.redTitle} ${fontStyles.smallExcerpt}`}>
              <strong>{name}</strong>
            </p>
            <p className={`mb-1 ${fontStyles.smallExcerpt} text-dark`}>
              <strong>{title}</strong>
            </p>
          </a>
        </Link>
        <div className={fontStyles.smallExcerpt}>
          <strong>Phone: </strong>
          {' '}
          {number}
          <br />
          <strong>Email: </strong>
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}
