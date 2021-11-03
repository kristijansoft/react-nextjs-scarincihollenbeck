import TrendingStories from 'components/trending-stories';
import SubscriptionMessage from 'components/subscription-message';

export default function PagesSidebar({ posts, covidPage }) {
  return (
    <>
      {covidPage ? (
        <TrendingStories title="Current Covid-19 News" content={posts} />
      ) : (
        <TrendingStories title="Trending Stories" content={posts} />
      )}
      <br />
      <SubscriptionMessage />
    </>
  );
}
