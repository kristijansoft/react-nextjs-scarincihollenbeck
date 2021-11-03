import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/molecules/simple-search';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import ContactForm from 'components/shared/contact-form';
import textStyles from 'styles/Text.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function ContactPage({ seo, site }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <p>
              <strong>For media inquiries,</strong>
              {' '}
              please visit
              {' '}
              <Link href="/library/category/law-firm-insights">
                <a className={textStyles.redTitle}>
                  <u>Firm Insights.</u>
                </a>
              </Link>
              {' '}
              <strong>For job opportunities,</strong>
              {' '}
              please visit our
              {' '}
              <Link href="/careers">
                <a className={textStyles.redTitle}>
                  <u>Careers page.</u>
                </a>
              </Link>
            </p>
            <p>
              <strong>If you are a client,</strong>
              {' '}
              please get in touch with your
              <Link href="/attorneys">
                <a className={textStyles.redTitle}>
                  {' '}
                  <u>Scarinci Hollenbeck attorney</u>
                </a>
              </Link>
              {' '}
              contact directly.
            </p>
            <p className="mb-4">
              If you are looking to get in touch with an attorney under the terms as to becoming a
              new client please call
              {' '}
              <strong>201-896-4100.</strong>
            </p>
            <h4 className={`${grayTitleStyles.title} mb-5`}>
              All other inquires please fill out the form below.
            </h4>
            <ContactForm />
            <style jsx>{' p{ font-size: 1.15rem }; strong { font-size: 1.15rem }'}</style>
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <hr />
            <SubscriptionMessage />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
