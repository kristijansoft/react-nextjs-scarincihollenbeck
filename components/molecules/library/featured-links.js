import Col from 'react-bootstrap/Col';
import styles from 'styles/FeaturedLinks.module.css';
import Button from 'react-bootstrap/Button';

export default function FeaturedLinks() {
  return (
    <Col sm={12} className={`${styles.linksContainer} px-0 mx-0`}>
      <ul className="list-unstyled list-inline text-center my-3">
        <li className="list-inline-item">
          <Button variant="danger" href="/library/category/firm-news">
            Firm News
          </Button>
        </li>
        <li className="list-inline-item">
          <Button variant="danger" href="/library/category/firm-events">
            Firm Events
          </Button>
        </li>
        <li className="list-inline-item">
          <Button variant="danger" href="/library/category/law-firm-insights">
            Firm Insights
          </Button>
        </li>
      </ul>
      <style jsx>
        {`
          div {
            background-color: #e9e9e9;
          }
          li {
            margin-right: 5px;
          }
          @media (min-width: 1023px) {
            li {
              margin-right: 2em !important;
            }
          }
        `}
      </style>
    </Col>
  );
}
