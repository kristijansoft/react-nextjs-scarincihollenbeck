import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import marginStyles from 'styles/Margins.module.css';
import { createMarkup } from 'utils/helpers';

export default function AttorneyProfileEducation({ content }) {
  const {
    additionalInformation, barAdmissions, education, affiliations,
  } = content;

  return (
    <Row className={marginStyles.mtMinusMd2}>
      {education.length > 0 && (
        <Col sm={12}>
          <p className={grayTitleStyles.title}>Education</p>
          <div className="content" dangerouslySetInnerHTML={createMarkup(education)} />
        </Col>
      )}
      {barAdmissions.length > 0 && (
        <Col sm={12} className="mt-3">
          <h4 className={grayTitleStyles.title}>Bar Admissions</h4>
          <div className="content" dangerouslySetInnerHTML={createMarkup(barAdmissions)} />
        </Col>
      )}
      {affiliations.length > 0 && (
        <Col sm={12} className="mt-3">
          <h4 className={grayTitleStyles.title}>Affiliations</h4>
          <div className="content" dangerouslySetInnerHTML={createMarkup(affiliations)} />
        </Col>
      )}
      {additionalInformation.length > 0
        && additionalInformation.map((info) => (
          <Col sm={12} className="mt-3" key={info.title}>
            {info.title && <h4 className={grayTitleStyles.title}>{info.title}</h4>}
            <div className="content" dangerouslySetInnerHTML={createMarkup(info.content)} />
          </Col>
        ))}
      <style jsx>{' div.content { margin-top: 0; margin-bottom: 0; }'}</style>
    </Row>
  );
}
