import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';
import textStyles from 'styles/Text.module.css';

export default function Breadcrumbs({ pageTitle, parentCategory }) {
  return (
    <div className="my-3">
      <p className={`${fontStyles.ft12rem} d-block w-100`}>
        <strong className="text-capitalize">
          <Link href="/">
            <a className={textStyles.redTitle}>Home | </a>
          </Link>
          <Link href="/library">
            <a className={textStyles.redTitle}>Library | </a>
          </Link>
          {parentCategory && (
            <Link href={`/library?term=${parentCategory.slug}`}>
              <a className={textStyles.redTitle}>
                {parentCategory.name}
                {' '}
                |
                {' '}
              </a>
            </Link>
          )}
          <Link href={`/library?term=${pageTitle}`}>
            <a className={textStyles.redTitle}>{pageTitle.replace(/-/g, ' ')}</a>
          </Link>
        </strong>
      </p>
    </div>
  );
}
