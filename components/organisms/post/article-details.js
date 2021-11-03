import { formatDate } from 'utils/helpers';

export default function PostArticleDetails({ author, date }) {
  return (
    <div className="mt-3 mb-0">
      <strong>Author: </strong>
      {author.length > 0
        ? author.map((a, i) => (i === 0 && author.length > 1 ? (
          <a href={a.link} key={a.name} className="text-underline">
            {a.name}
            ,
            {' '}
          </a>
        ) : (
          <a href={a.link} key={a.name} className="text-underline">
            {a.name}
          </a>
        )))
        : null}
      <span className="mx-3">|</span>
      {formatDate(date) || ''}
    </div>
  );
}
