import HomePage from 'components/pages/home-page';
import { getHomePageContent } from 'utils/queries';

export default function Home({
  seo, posts, locations, leadership,
}) {
  const homePageProps = {
    seo,
    posts,
    locations,
    leadership,
  };
  return <HomePage {...homePageProps} />;
}

export async function getStaticProps() {
  const [seo, posts, locations, attorneys, administration] = await getHomePageContent();

  const leadership = attorneys
    .filter((a) => a.acf.chair.length > 0)
    .filter((a) => a.acf.last_name !== 'Pepe')
    .filter((a) => a.acf.last_name !== 'Eynon')
    .map((leader) => ({
      name: leader.title.rendered,
      link: leader.link,
      lastName: leader.acf.last_name,
      image: leader.better_featured_image.source_url,
      title: leader.acf.chair
        .map((chair) => chair.post_title)
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }

          return -1;
        }),
    }))
    .sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      }

      return -1;
    });

  const donaldScarinci = attorneys
    .filter((a) => a.acf.designation === 'Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Firm Managing Partner'],
    }));

  const donPepe = attorneys
    .filter((a) => a.acf.designation === 'Red Bank, NJ Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Red Bank, NJ Office Managing Partner'],
    }));

  const howardBader = attorneys
    .filter((a) => a.acf.designation === 'NYC Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['NYC Office Managing Partner'],
    }));

  const teddyEnynon = attorneys
    .filter((a) => a.acf.designation === 'Washington, D.C. Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Washington, D.C. Office Managing Partner'],
    }));

  const katerinTraugh = administration
    .filter((a) => a.acf.Title === 'Executive Director')
    .map((ks) => ({
      name: ks.title.rendered,
      link: ks.link,
      image: ks.better_featured_image.source_url,
      title: ['Executive Director'],
    }));
  return {
    props: {
      seo,
      posts: posts.splice(0, 5),
      locations,
      leadership: [
        ...katerinTraugh,
        ...donaldScarinci,
        ...donPepe,
        ...howardBader,
        ...teddyEnynon,
        ...leadership,
      ],
    },
    revalidate: 1,
  };
}
