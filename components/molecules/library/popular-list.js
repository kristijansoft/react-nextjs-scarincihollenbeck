import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function PopularList({ term, list, displayCount = true }) {
  return (
    <>
      <p className={fontStyles.ft12rem}>
        <strong>{term}</strong>
      </p>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="list-unstyled">
            <Link href={`/library/category/${item.slug}`}>
              <a className="text-dark">
                {item.name}
                {displayCount && Object.keys(item).includes('postCount') && (
                  <>
                    <span className="mx-1">|</span>
                    <strong>
                      <small>{item.postCount}</small>
                    </strong>
                  </>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.6em;
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
