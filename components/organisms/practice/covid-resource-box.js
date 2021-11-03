import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';
import textStyles from 'styles/Text.module.css';

export default function PracticeCovidResourceBox({ title, link, message }) {
  return (
    <div className="mt-4">
      <p className={`${fontStyles.ft12rem} mb-1`}>
        <strong>{title}</strong>
      </p>
      <p>{message}</p>
      <h5>
        <Link href={link}>
          <a className={textStyles.redTitle}>
            <strong>
              <u>Resources</u>
            </strong>
          </a>
        </Link>
      </h5>
    </div>
  );
}
