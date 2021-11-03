import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import textStyles from 'styles/Text.module.css';
import { getDirectionsFromLocation, sortByKey } from 'utils/helpers';

export default function LocationsSidebar({ offices }) {
  const officeList = sortByKey(offices, 'title');

  return (
    <>
      <ul>
        {officeList.map((office) => (
          <li key={office.ID || office.id} className="list-unstyled border-bottom py-2">
            <Link href={office.slug || '/'}>
              <a className="text-dark">
                {office.title === 'Washington D.C.' ? (
                  <p style={{ fontSize: '1.13rem', marginBottom: '13px' }}>
                    <strong>Washington, D.C.</strong>
                  </p>
                ) : (
                  <p style={{ fontSize: '1.13rem', marginBottom: '13px' }}>
                    <strong>{office.title}</strong>
                  </p>
                )}
              </a>
            </Link>
            <ul className="list-unstyled ml-0">
              {office.address.map((a) => (
                <li key={a} className="mb-0">
                  {a}
                </li>
              ))}
              <li className="my-0">
                <strong>Phone: </strong>
                {' '}
                {office.phone}
              </li>
              {office.fax && (
                <li className="my-0">
                  <strong>Fax: </strong>
                  {' '}
                  {office.fax}
                </li>
              )}
              <li className="my-0">
                <Link href={office.slug}>
                  <a className={textStyles.redTitle}>
                    <strong>
                      <u>Details</u>
                    </strong>
                  </a>
                </Link>
                <span className="px-0"> | </span>
                <Button
                  variant="transparent"
                  className={`${textStyles.redTitle} p-0`}
                  onClick={() => getDirectionsFromLocation(office.slug)}
                >
                  <strong>
                    <u>Directions</u>
                  </strong>
                </Button>
              </li>
            </ul>
          </li>
        ))}
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
      </ul>
    </>
  );
}
