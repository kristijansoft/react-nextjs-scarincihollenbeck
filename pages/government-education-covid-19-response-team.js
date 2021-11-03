import CovidPage from 'components/pages/covid-pages';
import { SITE_URL } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';

export default function GovernmentEducationCovidResponseTeam({
  title,
  content,
  internalCovidPosts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/government-education-covid-19-response-team`;

  const covidProps = {
    title,
    internalCovidPosts,
    seo,
    bodyContent,
    canonicalUrl,
    subTitle,
  };

  return <CovidPage {...covidProps} />;
}

export async function getStaticProps() {
  const [request, posts] = await getCovid19BasedPages(
    'government-education-covid-19-response-team',
    20250,
  );
  const { title, content, seo } = request;

  const internalCovidPosts = posts.map((post) => ({
    isoDate: post.date,
    title: post.title.rendered,
    link: post.link,
    source: 'Scarinci Hollenbeck',
  }));

  return {
    props: {
      title,
      content,
      internalCovidPosts,
      seo,
    },
    revalidate: 1,
  };
}
