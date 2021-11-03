import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

const logos = [
  {
    url: '/images/reviews/Power50-ScarinciHollenbeck.png',
    alt: "NJBiz's 2021 Law Power 50 List ",
    width: 190,
    height: 190,
  },
  {
    url: '/images/reviews/BestLawFirmsStandardBadge.png',
    alt: 'U.S. News & World Report',
    width: 203,
    height: 200,
  },
  {
    url: '/images/reviews/trailblazers.jpeg',
    alt: 'National Law Journal Trailblazers',
    width: 263,
    height: 125,
  },
  {
    url: '/images/reviews/sl-badge-l-g-2021.png',
    alt: 'Super Lawyers',
    width: 179,
    height: 149,
  },
];
function Accolade({
  url, alt, width, height,
}) {
  return (
    <Col sm={12} md={3} className="mt-5">
      <div
        className={
          alt === 'National Law Journal Trailblazers'
            ? 'mx-auto d-block text-center additional-positioning'
            : 'mx-auto d-block text-center'
        }
      >
        <Image src={url} alt={alt} width={width} height={height} layout="intrinsic" />
      </div>
      <style jsx>
        {`
          @media (min-width: 1200px) {
            .additional-positioning {
              position: relative;
              right: 0px;
            }
          }
        `}
      </style>
    </Col>
  );
}
export default function HomeReviews() {
  return (
    <Row className="mt-5 px-2">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Awards & Accolades</h3>
        </div>
      </Col>
      {logos.map(({
        url, alt, width, height,
      }) => (
        <Accolade key={alt} url={url} alt={alt} width={width} height={height} />
      ))}
    </Row>
  );
}
