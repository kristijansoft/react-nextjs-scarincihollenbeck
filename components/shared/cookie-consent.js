import Link from 'next/link';
import CookieConsent, { Cookies } from 'react-cookie-consent';

export default function CookieConsentMessage() {
  return (
    <CookieConsent
      className="d-print-none"
      enableDeclineButton
      onDecline={() => Cookies.remove('shpuser')}
    >
      This website uses cookies to enhance the user experience. If you have further concerns please
      review our
      {' '}
      <Link href="/privacy-policy">
        <a className="text-white">
          <u>privacy policy.</u>
        </a>
      </Link>
    </CookieConsent>
  );
}
