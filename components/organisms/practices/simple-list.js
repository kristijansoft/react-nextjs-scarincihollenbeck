import Link from 'next/link';
import textStyles from 'styles/Text.module.css';
import formsStyles from 'styles/Forms.module.css';

export default function ArchivePracticeSimpleList({ list }) {
  return (
    <div className="my-5">
      <ul className={`${textStyles.blueTitle} ${formsStyles.threeColumns}`}>
        {list.map((item) => (
          <li key={item.ID} className="mb-2 mr-4">
            <Link href={item.slug.replace('https://scarincihollenbeck.com', '')}>
              <a className={textStyles.blueTitle}>
                <strong>{item.title}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{' li { font-size: 16px; }'}</style>
    </div>
  );
}
