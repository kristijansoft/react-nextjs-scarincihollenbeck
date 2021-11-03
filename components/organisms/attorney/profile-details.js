import Link from 'next/link';

export default function ProfileDetails({
  contact, offices, fax, additionalHeaderLinks,
}) {
  const { phoneNumber, email } = contact;
  return (
    <div className="d-flex flex-column">
      <p>
        <strong>Phone:</strong>
        {' '}
        {phoneNumber}
      </p>
      {fax && (
        <p>
          <strong>Fax:</strong>
          {' '}
          {fax}
        </p>
      )}
      <p>
        <strong>Email:</strong>
        {' '}
        {email}
      </p>
      <p>
        {offices.length > 1 && <strong>Offices:</strong>}
        {offices.length <= 1 && <strong>Office:</strong>}
        {' '}
        {offices.map((o, i) => (
          <Link href={o.link} key={o.ID}>
            <a className="text-white">
              {o.name}
              {i !== offices.length - 1 && ', '}
            </a>
          </Link>
        ))}
      </p>
      {additionalHeaderLinks.length > 0
        && additionalHeaderLinks.map((ah) => (
          <p key={ah.title}>
            <Link href={ah.url}>
              <a className="text-white">{ah.title}</a>
            </Link>
          </p>
        ))}
      <style jsx>{'p { margin-bottom: 5px;}'}</style>
    </div>
  );
}
