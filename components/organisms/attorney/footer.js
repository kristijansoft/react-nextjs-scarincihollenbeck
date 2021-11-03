import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePageLink from 'components/organisms/home/page-link';
import lineStyles from 'styles/LineHeader.module.css';

function ClientSection({ slug, clients }) {
  return (
    <>
      <div className={lineStyles.lineHeader}>
        <h3>Clients</h3>
      </div>
      <Row className="mt-2 mb-3">
        {clients.map((article) => (
          <Col sm={12} md={4} key={article.title}>
            <Link href={article.link}>
              <a className="text-center mx-auto d-block">
                <Image
                  alt={article.title}
                  src={article.featuredImg || '/images/no-image-found-diamond.png'}
                  width={200}
                  height={200}
                  className="rounded"
                />
              </a>
            </Link>
          </Col>
        ))}
        <HomePageLink link={`/attorney/${slug}/clients`} title="See More Clients" />
      </Row>
    </>
  );
}

function ArticleSection({
  articles, slug, title, type,
}) {
  return (
    <Row className="mt-5 mb-3">
      {articles.map((article) => (
        <Col sm={12} md={3} key={article.title} className="mb-4">
          <Link href={article.link}>
            <a className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={article.featuredImg || '/images/no-image-found-diamond.png'}
                width={300}
                height={150}
                className="rounded"
              />
              <small className="text-dark d-block">
                <strong>{article.title}</strong>
              </small>
            </a>
          </Link>
        </Col>
      ))}
      <HomePageLink link={`/attorney/${slug}/content/${type}`} title={`More ${title}`} />
    </Row>
  );
}

export default function AttorneyProfileFooter({
  clients,
  slug,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
}) {
  return (
    <div style={{ minHeight: '20vh' }}>
      {clients.length > 0 && <ClientSection slug={slug} clients={clients} />}
      {attorneyFooterNewsArticles.length > 0 && (
        <>
          <div className={lineStyles.lineHeader}>
            <h3>News & Press Releases</h3>
          </div>
          <ArticleSection
            slug={slug}
            articles={attorneyFooterNewsArticles}
            title="News & Press Releases"
            type="news-press-releases"
          />
        </>
      )}
      {attorneyFooterBlogArticles.length > 0 && (
        <>
          <div className={lineStyles.lineHeader}>
            <h3>Blogs</h3>
          </div>
          <ArticleSection
            slug={slug}
            articles={attorneyFooterBlogArticles}
            title="Blogs"
            type="blogs"
          />
        </>
      )}
    </div>
  );
}
