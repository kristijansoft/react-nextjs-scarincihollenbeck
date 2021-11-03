import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function PracticeSidebar({ title, content }) {
  return (
    <>
      <p className={fontStyles.ft12rem}>
        <strong>{title}</strong>
      </p>
      <ul>
        {content.map((c) => (
          <li key={c.ID || c.id} className="list-unstyled">
            <Link href={c.slug || '/'}>
              <a className="text-dark">{c.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.48em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 6px;
          }
        `}
      </style>
    </>
  );
}
