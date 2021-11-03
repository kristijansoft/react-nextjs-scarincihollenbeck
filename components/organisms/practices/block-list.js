import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bigButtonStyles from 'styles/BigButtonTabs.module.css';

export default function ArchivePracticeBlockList({ list }) {
  return (
    <Container className="mt-5">
      <Row>
        {list.map((item) => (item.children ? (
          <Col sm={12} md={4} key={item.title} className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className={`${bigButtonStyles.tab} ${bigButtonStyles.onMainPracticePage} w-100`}
              >
                {item.title}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item
                  key={item.ID}
                  style={{ fontSize: '1rem', backgroundColor: '#e9e9e9' }}
                  href={item.slug}
                >
                  Overview
                </Dropdown.Item>
                {item.children.map((child) => (
                  <Dropdown.Item
                    key={child.ID}
                    style={{
                      fontSize: '1rem',
                      overflowWrap: 'break-word',
                      whiteSpace: 'pre-wrap',
                      display: 'block',
                    }}
                    href={child.slug}
                  >
                    {child.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        ) : (
          <Col sm={12} md={4} key={item.title} className="mb-3">
            <Link href={item.slug}>
              <a className={`${bigButtonStyles.tab} w-100 d-block`}>{item.title}</a>
            </Link>
          </Col>
        )))}
      </Row>
    </Container>
  );
}
