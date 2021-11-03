import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { buildBusinessSchema, buildAttorneyProfileSchema } from 'utils/json-ld-schemas';

export default function AttorneyProfileHead({ seo }) {
  const {
    title, canonicalLink, metaDescription, image, designation, socialMediaLinks,
  } = seo;

  const fullCanonicalUrl = `https://scarincihollenbeck.com/${canonicalLink}`;
  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={fullCanonicalUrl}
        openGraph={{
          url: fullCanonicalUrl,
          title: 'Scarinci Hollenbeck',
          description: metaDescription,
          type: 'website',
          images: [
            {
              url: image,
              width: 743,
              height: 795,
              alt: title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: fullCanonicalUrl,
          cardType: metaDescription,
          twitter: image,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
        <script
          key="ScarinciHollenbeck Bio Profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildAttorneyProfileSchema(
                title,
                fullCanonicalUrl,
                image,
                socialMediaLinks,
                designation,
              ),
            ),
          }}
        />
      </Head>
    </>
  );
}
