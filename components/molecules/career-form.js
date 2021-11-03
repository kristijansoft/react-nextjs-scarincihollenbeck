import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FormScripts from 'components/shared/form-scripts';

export default function CareerForm({ contact, title }) {
  const router = useRouter();

  return (
    <div className="px-2 my-3 border-top">
      <FormScripts />
      <form
        method="POST"
        action="https://kwes.io/api/foreign/forms/rKYfR2fNcm68wzPCSiyW"
        encType="multipart/form-data"
        className="kwes-form d-print-none px-1"
        has-recaptcha-v3="true"
        recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY"
      >
        <input
          type="hidden"
          name="currentPage"
          value={`https://scarincihollenbeck.com${router.asPath}`}
        />
        <input type="hidden" name="currentTitle" value={title} />
        <input type="hidden" name="currentContact" value={contact} />
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="text"
              className="form-control mx-0"
              name="firstName"
              placeholder="First name"
              rules="required|max:255"
            />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="text"
              className="form-control mx-0"
              name="lastName"
              placeholder="Last name"
              rules="required|max:255"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="email"
              className="form-control mx-0"
              name="email"
              placeholder="Email address"
              rules="required|max:255"
            />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="phone"
              className="form-control mx-0"
              name="phone"
              placeholder="Phone number"
              rules="required|max:255"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="coverLetter">
              <span className="d-block w-100 my-2">
                <strong>Upload your cover letter</strong>
              </span>
              <input type="file" name="coverLetter" id="coverLetter" rules="required" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="resume">
              <span className="d-block w-100 my-2">
                <strong>Upload your resume</strong>
              </span>
              <input type="file" name="resume" id="resume" rules="required" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="writing">
              <span className="d-block w-100 my-2">
                <strong>Upload a writing sample</strong>
              </span>
              <input type="file" name="writing" id="writing" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="transcript">
              <span className="d-block w-100 my-2">
                <strong>Upload a transcript</strong>
              </span>
              <input type="file" name="transcript" id="transcript" />
            </label>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col sm={12} className="mx-0 px-1">
            <p className="mb-1">
              * The use of the Internet or this form for communication with the firm or any
              individual member of the firm does not establish an attorney-client relationship.
              Confidential or time-sensitive information should not be sent through this form.
            </p>
            <fieldset data-kw-group="true" rules="required" className="mb-2">
              <label htmlFor="disclaimer">
                <input
                  type="checkbox"
                  name="disclaimer"
                  feedback="You must agree before submitting."
                  value="disclaimer"
                  id="disclaimer"
                  label="I have read the disclaimer"
                />
                <span className="ml-2">I have read the disclaimer</span>
              </label>
            </fieldset>
          </Col>
        </Row>
        <Button variant="danger" className="mt-2 px-4" type="submit">
          Submit form
        </Button>
      </form>
    </div>
  );
}
