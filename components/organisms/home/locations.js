import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';

function LocationCard({ location }) {
  return (
    <Col sm={12} md={3} className="mx-auto d-block my-5">
      <div className="border">
        <Link href={location.slug}>
          <a>
            <Image
              src={location.featuredImg}
              alt={location.title}
              width={253}
              height={167}
              layout="responsive"
            />
            <p className={`${textStyles.redTitle} my-3 ml-2 text-uppercase`}>
              {location.title === 'Washington D.C.' ? (
                <strong>Washington, D.C.</strong>
              ) : (
                <strong>{location.title}</strong>
              )}
            </p>
          </a>
        </Link>
      </div>
    </Col>
  );
}
export default function HomeLocations({ locations }) {
  return (
    <Row className="mt-5">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Office Locations</h3>
        </div>
      </Col>
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </Row>
  );
}
