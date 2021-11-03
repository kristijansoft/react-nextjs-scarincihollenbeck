import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import ContactForm from 'components/shared/contact-form';
import PostBreadcrumbs from 'components/organisms/post/post-breadcrumbs';
import AuthorBio from 'components/organisms/post/author-bio';
import { createMarkup, urlify } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import pageContentStyles from 'styles/PageContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function DisplayListTags({ title, children }) {
  return (
    <div className="mb-0 d-print-none">
      <ul className="no-dots list-inline mb-1">
        <li className="list-inline-item">
          <strong>
            {title}
            :
            {' '}
          </strong>
        </li>
        {children}
      </ul>
    </div>
  );
}
export default function PostBody({
  featuredImage,
  content,
  authors,
  title,
  tags,
  subTitle,
  caption,
  categories,
}) {
  const router = useRouter();
  const postUrl = `${SITE_URL}${router.asPath}`;

  return (
    <Col sm={12} md={9}>
      <PostBreadcrumbs />
      {featuredImage && (
        <Image src={featuredImage} width={750} height={350} alt={title} layout="intrinsic" />
      )}
      {caption && <div className="mt-0 mb-2" dangerouslySetInnerHTML={createMarkup(caption)} />}
      {/* title and subtitle for print version only */}
      <div className="d-none d-print-block">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div
        className={`${pageContentStyles.p} mt-3 d-print-block`}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      <hr />
      {categories && (
        <DisplayListTags title="Categories">
          {categories.map((category, index) => (
            <li key={category.name} className="list-inline-item">
              <Link href={`/library/category/${urlify(category.name)}`}>
                <a className="text-dark underline">
                  {category.name}
                  {categories.length - 1 !== index && ', '}
                </a>
              </Link>
            </li>
          ))}
        </DisplayListTags>
      )}

      {tags && (
        <DisplayListTags title="Tags">
          {tags.map((tag, index) => (
            <li key={tag.name} className="list-inline-item">
              <Link href={`/library/search?term=${urlify(tag.name)}`}>
                <a className="text-dark underline">
                  {tag.name}
                  {tags.length - 1 !== index && ', '}
                </a>
              </Link>
            </li>
          ))}
        </DisplayListTags>
      )}
      <DisplayListTags title="Share">
        <li className="list-inline-item">
          <FacebookShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            Facebook
          </FacebookShareButton>
        </li>
        <li className="list-inline-item">
          <TwitterShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            Twitter
          </TwitterShareButton>
        </li>
        <li className="list-inline-item">
          <LinkedinShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            LinkedIn
          </LinkedinShareButton>
        </li>
      </DisplayListTags>
      <div className="d-print-none">
        <AuthorBio authors={authors} />
        <p className={`${grayTitleStyles.title} my-5`}>Get In Touch</p>
        <ContactForm />
      </div>
      <style jsx>{'.underline:hover { text-decoration: underline }'}</style>
    </Col>
  );
}
