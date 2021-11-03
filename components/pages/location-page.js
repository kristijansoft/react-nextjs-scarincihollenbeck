import Head from 'next/head';
import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/organisms/locations/body';
import SideBar from 'components/organisms/locations/sidebar';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { SITE_URL } from 'utils/constants';

export default function LocationPage({
  seo, offices, currentOffice, posts,
}) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`${SITE_URL}/${seo.canonicalLink}`}
      />
      <Head>
        <script
          key={currentOffice.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocationSchema(seo, currentOffice.mapLink)),
          }}
        />
      </Head>
      <SingleSubHeader
        title="Office Locations"
        subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
        offset={2}
        span={7}
      />
      <LargeSidebar
        body={(
          <BodyContent
            attorneys={currentOffice.attorneys}
            practices={currentOffice.practices}
            map={currentOffice.mapLink}
            title={currentOffice.name}
          />
        )}
        sidebar={(
          <SideBar
            title={currentOffice.name}
            posts={posts}
            offices={offices}
            startingKey={currentOffice.name}
          />
        )}
      />
    </>
  );
}
