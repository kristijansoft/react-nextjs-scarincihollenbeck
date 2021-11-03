import SubscriptionPage from 'components/pages/subscription-page';
import { SITE_URL } from 'utils/constants';

const seo = {
  title: 'Subscribe To Firm Mailing List | Scarinci Hollenbeck',
  metaDescription:
    "Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements.",
  canonicalUrl: `${SITE_URL}/subscribe`,
};

const site = {
  title: 'Firm Mailing List',
  description:
    "Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements.",
};
export default function Subscription() {
  const subscriptionProps = {
    site,
    seo,
  };
  return <SubscriptionPage {...subscriptionProps} />;
}
