import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from 'components/shared/contact-form';
import { formatDate, createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import pageContentStyles from 'styles/PageContent.module.css';

export default function LargeSidebarWithPosts({
  content, sidebar, posts, postsTitle,
}) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <div className={pageContentStyles.p} dangerouslySetInnerHTML={createMarkup(content)} />
          <h3 className="mt-5">
            <strong style={{ fontSize: '1.3rem' }}>{postsTitle}</strong>
          </h3>
          <hr />
          <ul className="my-0 py-0 list-unstyled">
            {posts.map((post) => (
              <li key={post.title}>
                <Link href={post.link}>
                  <a className="d-flex flex-row text-dark">
                    <div>
                      <h5 className="d-block w-100 mb-0 pt-0">
                        <strong>{post.title}</strong>
                      </h5>
                      <p className="mt-0 pt-0">{formatDate(post.isoDate)}</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <h4 className={grayTitleStyles.title}>Contact A Firm Reprepresentative</h4>
          <ContactForm />
        </Col>
        <Col sm={12} md={3}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  );
}
