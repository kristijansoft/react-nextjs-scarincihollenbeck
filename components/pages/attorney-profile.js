import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyProfileHeader from 'components/organisms/attorney/header';
import AttorneyBioLinks from 'components/organisms/attorney/links';
import AttorneyProfileBody from 'components/organisms/attorney/body';
import AttorneyProfileArticles from 'components/organisms/attorney/articles';
import AttorneyProfileClients from 'components/organisms/attorney/clients';
import AttorneyProfileSidebar from 'components/organisms/attorney/sidebar';
import AttorneyProfileTab from 'components/organisms/attorney/table';
import AttorneyProfileMatters from 'components/organisms/attorney/matters';
import AttorneyProfileVideo from 'components/organisms/attorney/video';
import AttorneyProfileEducation from 'components/organisms/attorney/education';
import AttorneyProfileContact from 'components/organisms/attorney/contact';
import AttorneyProfileFooter from 'components/organisms/attorney/footer';
import AttorneyProfileHead from 'components/organisms/attorney/head';

function renderBody(param, content, slug, header, defaultTabTitle) {
  switch (param) {
    case 'biography':
      return <AttorneyProfileBody title="Biography" content={content} />;
    case 'clients':
      return <AttorneyProfileClients title="Clients" clients={content} />;
    case 'presentations':
      return <AttorneyProfileTab title="Presentations" content={content} />;
    case 'publications':
      return <AttorneyProfileTab title="Publications" content={content} />;
    case 'media':
      return <AttorneyProfileTab title="Media" content={content} />;
    case 'representative-matters':
      return <AttorneyProfileMatters title="Representative Matters" content={content} />;
    case 'representative-clients':
      return <AttorneyProfileMatters title="Representative Clients" content={content} />;
    case 'awards':
      return <AttorneyProfileClients title="Awards" clients={content} />;
    case 'articles':
      return <AttorneyProfileArticles initalArticles={content} term={slug} />;
    case 'blogs':
      return <AttorneyProfileArticles initalArticles={content} title="Blogs" />;
    case 'news-press-releases':
      return <AttorneyProfileArticles initalArticles={content} title="News & Press Releases" />;
    case 'education-admissions':
      return <AttorneyProfileEducation content={content} />;
    case 'video':
      return <AttorneyProfileVideo content={content} />;
    case 'audio':
      return <AttorneyProfileBody title="Audio" content={content.body} />;
    case 'contact':
      return (
        <AttorneyProfileContact
          content={header}
          forwardEmail={header.profile.forwardedEmailAddresses}
        />
      );
    default:
      if (Array.isArray(content)) {
        return <AttorneyProfileBody title={defaultTabTitle} content={content[0].body} />;
      }

      if (typeof content === 'object') {
        return <AttorneyProfileBody title={defaultTabTitle} content={content.body} />;
      }
      return <AttorneyProfileBody title={defaultTabTitle} content={content} />;
  }
}
export default function AttorneyProfile({
  seo,
  header,
  body,
  slug,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
}) {
  const router = useRouter();

  const paramArr = router.asPath.split('/').filter((a) => a !== '');
  const paramLen = paramArr.length;
  let defaultTabTitle = 'Biography';

  if (router.asPath.includes('content')) {
    defaultTabTitle = router.asPath.split('/').pop().replace(/-/g, ' ');
  }

  const bioMenuItems = {
    main: body.bio.sidebarLinks.main || [],
    more: body.bio.sidebarLinks.more || [],
  };

  let bioMobileMenuItems = [...body.bio.sidebarLinks.main];

  if ('more' in body.bio.sidebarLinks) {
    bioMobileMenuItems = [...bioMobileMenuItems, ...body.bio.sidebarLinks.more];
  }

  return (
    <>
      <AttorneyProfileHead seo={seo} />
      <AttorneyProfileHeader image={header.image} profile={header.profile} slug={slug} />
      <Container>
        <Row>
          <Col sm={12}>
            <AttorneyBioLinks links={bioMenuItems} slug={slug} mobileLinks={bioMobileMenuItems} />
          </Col>
          <Col sm={12} md={9}>
            {renderBody(paramArr[paramLen - 1], body.content, slug, header, defaultTabTitle)}
          </Col>
          <Col sm={12} md={3}>
            <AttorneyProfileSidebar
              services={body.bio.headerContent.practices}
              contact={`${slug}/contact`}
              awards={body.bio.mainPageContent.awards}
              educationLink={`/attorney/${slug}/content/education-admissions`}
            />
          </Col>
          <Col sm={12}>
            <AttorneyProfileFooter
              slug={slug}
              clients={body.bio.mainPageContent.clients}
              attorneyFooterBlogArticles={attorneyFooterBlogArticles}
              attorneyFooterNewsArticles={attorneyFooterNewsArticles}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
