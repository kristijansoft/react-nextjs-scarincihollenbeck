import Link from 'next/link';
import { useRouter } from 'next/router';
import textStyles from 'styles/Text.module.css';
import { makeTitle } from 'utils/helpers';

export default function BasicBreadCrumbs() {
  const router = useRouter();
  let buildUrl = '/';
  const breadCrumbArr = router.asPath.split('/').filter((crumb) => crumb !== '');

  const formattedBreadCrumbArr = breadCrumbArr.map((crumb, index) => {
    buildUrl += `${breadCrumbArr[index].toString()}/`;

    return {
      url: buildUrl,
      title: makeTitle(crumb),
    };
  });

  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link href="/">
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>Home | </strong>
          </a>
        </Link>
      </li>
      {formattedBreadCrumbArr.map(
        (crumb, index) => crumb.title !== 'CATEGORY' && (
        <li key={crumb.title} className="list-inline-item">
          <Link href={crumb.url}>
            <a className={`${textStyles.redTitle} text-uppercase`}>
              <strong>
                {crumb.title}
                {' '}
                {breadCrumbArr.length - 1 !== index && <> | </>}
              </strong>
            </a>
          </Link>
        </li>
        ),
      )}
    </ul>
  );
}
