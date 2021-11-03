import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function NonGraphQLTrendingStories({ title, content }) {
  return (
    <>
      <p className={`${fontStyles.ft12rem} mb-2`}>
        <strong>{title}</strong>
      </p>
      <ul>
        {content
          .filter((_, i) => i <= 2)
          .map((c) => (
            <li key={c.title} className="list-unstyled">
              <Link href={c.slug || c.link || '/'}>
                <a className="text-dark">{c.title}</a>
              </Link>
              {typeof c.author === 'string' && (
                <div className="my-0 py-0 d-block">
                  <small>
                    <strong>Author: </strong>
                    {' '}
                    {c.author}
                  </small>
                </div>
              )}
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
            padding-bottom: 10px;
            padding-top: 10px;
            line-height: 1.4;
            color: #444;
          }
        `}
      </style>
    </>
  );
}
