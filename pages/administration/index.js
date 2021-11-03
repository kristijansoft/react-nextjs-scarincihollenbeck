import AdministrationPage from 'components/pages/administration-page';
import { headers } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';

const seo = {
  title: 'Administration Directors & Managers | Scarinci Hollenbeck',
  metaDescription:
    "In Scarinci Hollenbeck's administration archive, you can find the professionals behind the attorneys managing the business aspects of the firm.",
  canonicalUrl: `${SITE_URL}/administration`,
};

const site = {
  title: ' Administration',
  description:
    "In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group.",
};

export default function Administration({ admins }) {
  const adminProps = {
    admins,
    seo,
    site,
  };
  return <AdministrationPage {...adminProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/admin-search/admin`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return {
    props: {
      admins: request.admins,
    },
    revalidate: 1,
  };
}
