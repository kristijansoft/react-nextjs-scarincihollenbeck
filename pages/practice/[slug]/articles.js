import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeContent from 'components/organisms/practice/content';
import PracticeLinks from 'components/organisms/practice/links';
import RelatedAttorneys from 'components/organisms/practice/related-attorneys';
import PracticeClientSlider from 'components/organisms/practice/client-slider';
import ArticleHeroPractice from 'components/organisms/practice/practice-article-hero';
import SimpleSearch from 'components/molecules/simple-search';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CovidResourceBox from 'components/organisms/practice/covid-resource-box';
import PracticeSidebar from 'components/organisms/practice/sidebar';
import AttorneyProfilePractice from 'components/organisms/practice/articles';
import SingleSubHeader from 'layouts/single-sub-header';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';
import SiteLoader from 'components/shared/site-loader';
import { urlify, sortByKey } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { getPracticePaths, getPracticeContent, getPracticePosts } from 'utils/queries';

export default function PracticeSingleArticles({
  corePractices,
  practice,
  practiceChildren,
  posts,
}) {
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canoncialUrl = `${SITE_URL}/practice/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <NextSeo
        title={practice.seo.title}
        description={practice.seo.metaDescription}
        canonical={canoncialUrl}
      />
      <SingleSubHeader
        title={practice.title}
        subtitle={practice.description}
        offset={0}
        span={8}
        isTabs
      />
      <TabContainer id="nav-tab" defaultActiveKey="related-articles">
        <Container>
          <Row>
            <Col sm={12}>
              <PracticeLinks links={practice} practiceUrl={practiceUrl} />
            </Col>
            <Col sm={12} md={9}>
              <TabContent key="related-articles">
                <AttorneyProfilePractice
                  tabTitle="related-articles"
                  initalArticles={posts}
                  title={practice.title}
                />
              </TabContent>
              <div style={{ position: 'relative', bottom: '2.5em' }}>
                {practice.content.length > 0
                  && practice.content.map((item) => (
                    <TabContent key={item.title}>
                      <PracticeContent
                        tabTitle={urlify(item.title)}
                        title={item.title}
                        content={item.content}
                      />
                    </TabContent>
                  ))}
              </div>

              {practice.attorneyList.length > 0 && (
                <RelatedAttorneys
                  members={practice.attorneyList}
                  chair={practice.chair}
                  handleLink={handleLink}
                  title="Chair"
                />
              )}
              {practice.highlightReal.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Representative Clients</h3>
                  </div>
                  <PracticeClientSlider content={practice.highlightReal} />
                </>
              )}
              {practice.industryTopics.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Latest News & Articles</h3>
                  </div>
                  <ArticleHeroPractice
                    link={urlify(practiceUrl)}
                    content={practice.industryTopics}
                  />
                </>
              )}
            </Col>
            <Col sm={12} md={3} style={{ position: 'relative', bottom: '2.85em' }}>
              <SimpleSearch />
              <hr />
              {router.query.slug === 'education-law' && (
                <>
                  <div>
                    <div className="mx-auto d-block">
                      <Image
                        src="/images/1593501004logo-250x250.png"
                        width={200}
                        height={200}
                        alt="NJSBA 2020 event"
                      />
                    </div>
                    <h5>
                      <Link
                        href="https://virtualworkshop.njsba.org/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className={textStyles.redTitle}>
                          <strong>
                            <u>Visit our booth</u>
                          </strong>
                        </a>
                      </Link>
                    </h5>
                    <hr />
                  </div>
                  <CovidResourceBox
                    title="COVID-19 Response Team"
                    link="/government-education-covid-19-response-team"
                    message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                  />
                  <hr />
                </>
              )}
              {router.query.slug === 'crisis-risk-management' && (
                <>
                  <CovidResourceBox
                    title="COVID-19 Crisis Management Unit"
                    link="/covid-19-crisis-management-unit"
                    message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                  />
                  <hr />
                </>
              )}
              <SubscriptionMessage />
              <hr />
              <PracticeSidebar title="Core Practices" content={corePractices} tabKey={2} />
              {practiceChildren.length > 0 && (
                <>
                  <hr />
                  <PracticeSidebar
                    title="Related Practices"
                    content={practiceChildren}
                    tabKey={1}
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </TabContainer>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getPracticePaths(true);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [res, practices] = await getPracticeContent(params.slug);

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  const corePractices = practices.practices.filter(
    (practice) => practice.category === 'Core Practices',
  );

  /** get parent category */
  const blogId = res.blog_data_id[0];
  const practiceSlug = res.slug;

  const posts = await getPracticePosts(practiceSlug, blogId);

  return {
    props: {
      practice: res,
      practiceChildren: res.children || [],
      corePractices: sortByKey(corePractices, 'title'),
      posts: posts || [],
      term: params.slug,
    },
    revalidate: 1,
  };
}
