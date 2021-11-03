import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import CareersPage from 'components/pages/careers-page';
import { headers } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';

const seo = {
  title: 'Careers & Positions | Scarinci Hollenbeck, LLC',
  metaDescription:
    "Scarinci Hollenbeck's commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys.",
  canonicalUrl: `${SITE_URL}/careers`,
};

const site = {
  title: 'Careers & Available Positions',
  description:
    'Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys.',
};
export default function Careers({ positionTypes, locations, careerList }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [careers, setCareers] = useState([]);

  if (router.isFallback) {
    return <SiteLoader />;
  }

  useEffect(() => {
    setCareers(careerList);
  }, [careerList]);

  function executeSearch() {
    function filterPostionType(career) {
      if (positionType) {
        return career.positionType.indexOf(positionType) >= 0;
      }

      return career;
    }

    function filterPositionLocation(career) {
      if (location) {
        return career.positionLocation.indexOf(location) >= 0;
      }

      return career;
    }

    const careerListFiltered = careers.filter(filterPostionType).filter(filterPositionLocation);

    setCareers(careerListFiltered);
  }

  const careerProps = {
    seo,
    site,
    careers,
    positionTypes,
    locations,
    query,
    setQuery,
    setLocation,
    setPositionType,
    executeSearch,
  };

  return <CareersPage {...careerProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/career-portal/careers`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return {
    props: {
      careerList: request.careers,
      locations: ['Lyndhurst, NJ', 'Red Bank, NJ', 'New York, NY', 'Washington D.C.'],
      positionTypes: ['Administration', 'Attorney'],
    },
    revalidate: 1,
  };
}
