import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FormScripts from 'components/shared/form-scripts';

export default function AttorneyProfileContactForm({ forwardEmail, currentAttorney }) {
  const router = useRouter();
  const emailVarName = ['One', 'Two', 'Three', 'Four'];

  return (
    <div className="px-2 mb-3">
      <FormScripts />
      <form
        action="https://kwes.io/api/foreign/forms/m015EzO4b4EtOvYSTRlK"
        className="kwes-form d-print-none px-1"
        style={{ maxWidth: '90%' }}
        has-recaptcha-v3="true"
        recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY"
      >
        <input
          type="hidden"
          name="currentPage"
          value={`https://scarincihollenbeck.com${router.asPath}`}
        />
        {forwardEmail.map((email, index) => (
          <input
            key={email}
            type="hidden"
            name={`forwardAddress${emailVarName[index]}`}
            value={email}
          />
        ))}
        <input type="hidden" name="currentAttorney" value={currentAttorney} />
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
        <Row className="mb-2">
          <Col sm={12} className="mx-0 px-1 mb-4">
            <input
              type="text"
              className="form-control mx-0"
              name="subject"
              placeholder="Subject"
              rules="required|max:1000"
            />
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <textarea
              type="textarea"
              rows="8"
              cols="4"
              className="form-control mx-0"
              name="message"
              placeholder="Message"
              rules="required|max:1000"
            />
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
