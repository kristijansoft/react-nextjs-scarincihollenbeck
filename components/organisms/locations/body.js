import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/shared/attorney-card';
import { sortByKey } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import textStyles from 'styles/Text.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function LocationsBody({
  attorneys, practices, map, title,
}) {
  const officeTitle = title === 'Washington D.C.' ? 'Washington, D.C.' : title;
  return (
    <>
      <h4 className={grayTitleStyles.title}>{officeTitle}</h4>
      <div className="w-100 d-block mb-4">
        <iframe
          rel="preconnect"
          title={`${title} office`}
          src={map}
          className="w-100"
          height={300}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h4 className={grayTitleStyles.title}>{`${title} Attorneys`}</h4>
      <Container>
        <Row>
          {sortByKey(attorneys, 'lastName').map((m) => (
            <Col sm={12} md={12} lg={6} className="mb-4" key={m.name}>
              <AttorneyCard
                link={m.link}
                image={m.image}
                name={m.name}
                title={m.designation}
                number={m.contact}
                email={m.email}
                width={80}
                height={112}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <p className={`${grayTitleStyles.title} mt-5`}>Services We Offer</p>
      <Container className="mb-5">
        <Row>
          <Col sm={12} md={6} className="col-sm-12 col-md-6">
            <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
              {practices.map(
                (p, i) => practices.length / 2 > i && (
                <li key={p.title} className="mb-3">
                  <Link href={p.slug}>
                    <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
                      <strong>
                        <u>{p.title}</u>
                      </strong>
                    </a>
                  </Link>
                </li>
                ),
              )}
            </ul>
          </Col>
          <Col sm={12} md={6}>
            <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
              {practices.map(
                (p, i) => practices.length / 2 <= i && (
                <li key={p.title} className="mb-3">
                  <Link href={p.slug}>
                    <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
                      <strong>
                        <u>{p.title}</u>
                      </strong>
                    </a>
                  </Link>
                </li>
                ),
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
