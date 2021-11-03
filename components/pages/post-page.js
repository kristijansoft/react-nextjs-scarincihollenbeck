import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PostHead from 'components/organisms/post/head';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/organisms/post/body';
import PrintOnlyBody from 'components/organisms/post/print-only-body';
import Sidebar from 'components/organisms/post/sidebar';

export default function PostPage({
  post,
  seo,
  categories,
  tags,
  canonicalUrl,
  metaAuthorLinks,
  category,
  postUrl,
  authors,
}) {
  return (
    <>
      <PostHead
        seo={seo}
        canonicalUrl={canonicalUrl}
        metaAuthorLinks={metaAuthorLinks}
        post={post}
        authors={authors}
      />
      <span className="d-print-none">
        <SingleSubHeader
          title={post.title}
          subtitle={post.subTitle}
          isBlog
          offset={0}
          span={8}
          authors={authors}
          date={post.date}
        />
      </span>

      <Container className="d-print-none">
        <Row>
          <Body
            featuredImage={post.featuredImage}
            caption={post.featuredImageCaption}
            content={post.content}
            title={post.title}
            subTitle={post.subTitle}
            authors={authors}
            date={post.date}
            tags={tags}
            categories={categories}
          />
          <Sidebar category={category} postUrl={postUrl} />
        </Row>
      </Container>
      <PrintOnlyBody
        featuredImage={post.featuredImage}
        content={post.content}
        title={post.title}
        subTitle={post.subTitle}
        authors={authors}
        date={post.date}
      />
    </>
  );
}
