import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import AttorneyCard from 'components/shared/attorney-card';
import { sortByKey } from 'utils/helpers';

export default function AdministrationPage({ admins, seo, site }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={2} span={7} />
      <FullWidth>
        <Container className="p-3 pt-4 border">
          <Row>
            {sortByKey(admins, 'orderBy').map((admin) => (
              <Col sm={12} md={6} lg={4} key={admin.id} className="mb-3">
                <AttorneyCard
                  image={admin.image.smallUrl}
                  name={admin.name}
                  link={admin.link}
                  title={admin.title}
                  number={`201-896-4100 ${admin.phoneExtension}`}
                  email={admin.email}
                  type="/administration/[admin]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </FullWidth>
    </>
  );
}
