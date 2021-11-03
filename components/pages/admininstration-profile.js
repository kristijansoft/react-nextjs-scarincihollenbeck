import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminProfileHeader from 'components/organisms/admin/header';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import { createMarkup } from 'utils/helpers';

export default function AdministrationProfile({ response, profile, canonicalUrl }) {
  return (
    <>
      <NextSeo
        title={response.seo.title}
        description={response.seo.metaDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: 'Scarinci Hollenbeck',
          description: response.seo.metaDescription,
          images: [
            {
              url: response.seo.featuredImg,
              width: 743,
              height: 795,
              alt: response.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: canonicalUrl,
          cardType: response.seo.metaDescription,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={response.name}
        url={canonicalUrl}
        sameAs={[
          'https://twitter.com/S_H_Law',
          'https://www.facebook.com/ScarinciHollenbeck/',
          'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
        ]}
      />
      <AdminProfileHeader profile={profile} image={response.image.url} />
      <Container>
        <Row>
          <Col sm={12}>
            <h4 className={grayTitleStyles.title}>Biography</h4>
            <div className="mb-5" dangerouslySetInnerHTML={createMarkup(response.biography)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
