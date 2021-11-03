import { FaLinkedinIn } from 'react-icons/fa';
import { BsChatDots, BsCloudDownload, BsCardText } from 'react-icons/bs';

export default function ContactIcons({
  slug, linkedIn, pdf, vizibility,
}) {
  return (
    <ul className="list-unstyled mr-0 ml-lg-5">
      <li>
        {slug && (
          <a
            href={`/attorney/${slug}/contact`}
            rel="noopener noreferrer"
            style={{ height: '30px' }}
            variant="link"
            className="d-block text-left text-white w-100"
          >
            <strong className="pr-1">
              <BsChatDots style={{ marginTop: '-4px' }} />
              <span className="ml-2 d-inline-block">Get In Touch</span>
            </strong>
          </a>
        )}
      </li>
      <li>
        <a
          href={
            linkedIn ? linkedIn.url : 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/'
          }
          size="sm"
          rel="noopener noreferrer"
          target="_blank"
          style={{ height: '30px' }}
          variant="link"
          className="d-block text-left text-white w-100"
        >
          <strong className="pr-1">
            <FaLinkedinIn style={{ marginTop: '-4px' }} />
            <span className="ml-2 d-inline-block">LinkedIn Profile</span>
          </strong>
        </a>
      </li>
      {pdf && (
        <li>
          <a
            href={pdf}
            size="sm"
            rel="noopener noreferrer"
            target="_blank"
            style={{ height: '30px' }}
            variant="link"
            className="d-block text-left text-white w-100"
          >
            <strong className="">
              <BsCloudDownload style={{ marginTop: '-2px' }} />
              <span className="ml-2 d-inline-block">Print Bio</span>
            </strong>
          </a>
        </li>
      )}
      <li>
        <a
          href={vizibility}
          size="sm"
          rel="noopener noreferrer"
          target="_blank"
          style={{ height: '30px' }}
          variant="link"
          className="d-block text-left text-white w-100"
        >
          <strong className="pl-1">
            <BsCardText style={{ marginTop: '-4px' }} />
            <span className="ml-2 d-inline-block">Business Card</span>
          </strong>
        </a>
      </li>
    </ul>
  );
}
