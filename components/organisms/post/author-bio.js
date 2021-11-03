import Link from 'next/link';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function PostAuthorBio({ authors }) {
  return (
    <div className="w-100 d-print-none mt-5">
      {authors.map((a) => (
        <div key={a.display_name} className="mb-2">
          <div className={`${lineHeaderStyles.lineHeader} d-print-none mt-3`}>
            <h3>
              About
              <span className="ml-2">{a.display_name}</span>
            </h3>
          </div>
          <div className="pt-4 d-flex flex-column flex-md-row">
            <div className="mt-3">
              <p>
                <span
                  dangerouslySetInnerHTML={createMarkup(a.authorDescription)}
                  className="d-block"
                />
                {a.name !== 'Scarinci Hollenbeck' && (
                  <Link href={a.user_url ? a.user_url : '/attorneys/'}>
                    <a className="my-2 d-block">Full Biography</a>
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
