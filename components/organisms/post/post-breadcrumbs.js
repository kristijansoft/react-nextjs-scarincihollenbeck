import Link from 'next/link';
import { useRouter } from 'next/router';
import textStyles from 'styles/Text.module.css';

export default function PostBreadCrumbs() {
  const router = useRouter();
  const crumbs = router.asPath
    .split('/')
    .filter((crumb) => crumb !== '')
    .filter((crumb) => crumb.indexOf('https:') < 0);

  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link href="/">
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              Home
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href={`/library?category=${crumbs[0]}`}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              {crumbs[0].replace(/-/g, ' ')}
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>

      <li className="list-inline-item">
        <Link href={router.asPath}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>{router.query.slug[router.query.slug.length - 1].replace(/-/g, ' ')}</strong>
          </a>
        </Link>
      </li>
    </ul>
  );
}
