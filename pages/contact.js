import ContactPage from 'components/pages/contact-page';
import { SITE_URL } from 'utils/constants';

const seo = {
  title: 'Contact | Scarinci Hollenbeck',
  metaDescription:
    'Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Washington D.C.',
  canonicalUrl: `${SITE_URL}/contact`,
};

const site = {
  title: 'Contact Us',
  description:
    'Looking To Get In Touch With Someone At Scarinci Hollenbeck? Feel free to navigate to any one of our directory pages or fill out the form below.',
};
export default function Contact() {
  const contactProps = {
    site,
    seo,
  };
  return <ContactPage {...contactProps} />;
}
