import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSearch from 'components/molecules/simple-search';
import SubscriptionBody from 'components/molecules/subscription/subscription-body';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';

export default function SubscriptionPage({ site, seo }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <SubscriptionBody />
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
