import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';

import { SITE_FORM_SLUGS, BASE_API_URL } from 'utils/constants';
import SiteFormPage from 'components/pages/site-form-page';

export default function SiteForms({ attorneys, practices, isNewAttorney }) {
  const [attorney, setAttorney] = useState('');
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  // set input form when attorney is not listed
  useEffect(() => {
    if (attorney === ' ') {
      setAttorney('');
    }
  }, [attorney]);

  const siteFormProps = {
    attorney,
    setAttorney,
    attorneys,
    practices,
    isNewAttorney,
  };

  return <SiteFormPage {...siteFormProps} />;
}

export async function getStaticPaths() {
  const urls = SITE_FORM_SLUGS.map((slug) => slug);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const practiceRequest = await fetch(`${BASE_API_URL}/wp-json/wp/v2/practices?per_page=100`).then(
    (data) => data.json(),
  );
  const attorneyRequest = await fetch(`${BASE_API_URL}/wp-json/wp/v2/attorneys?per_page=100`).then(
    (data) => data.json(),
  );

  return {
    props: {
      isNewAttorney: params.slug.includes('new'),
      attorneys: attorneyRequest
        .map((attorney) => ({
          email: attorney.acf.email,
          name: attorney.title.rendered.replace(/&#8221;/g, '"').replace(/&#8220;/g, '"'),
          link: attorney.link.replace('wp.', ''),
        }))
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          return -1;
        }),
      practices: practiceRequest
        .map((practice) => practice.title.rendered.replace(/&#038;/g, '&').replace(/&#8217;/g, "'"))
        .sort((a, b) => {
          if (a > b) return 1;
          return -1;
        }),
    },
    revalidate: 1,
  };
}
