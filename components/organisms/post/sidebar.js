import useSWR from 'swr';
import Col from 'react-bootstrap/Col';
import TrendingStories from 'components/shared/trending-stories';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import SimpleSearch from 'components/molecules/simple-search';
import PostSocialShareSidebar from 'components/organisms/post/social-share-sidebar';
import RelatedAttorneys from 'components/organisms/post/related-attorneys';
import EventDetails from 'components/organisms/post/event-details';
import { BASE_API_URL } from 'utils/constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PostSidebar({ title, postUrl, category }) {
  const url = `${BASE_API_URL}/wp-json/single/post/${postUrl}/${category}`;
  const { data } = useSWR(url, fetcher);

  return (
    <Col sm={12} md={3} className="d-print-none">
      <SimpleSearch />
      <hr />
      <PostSocialShareSidebar title={title} />
      <hr />
      <SubscriptionMessage />
      <hr />
      {data && (
        <>
          <TrendingStories title="Trending Stories" content={data.posts} />
          {data.eventDetails.length > 0 && <EventDetails eDetails={data.eventDetails[0]} />}
          {data.attorneys.length > 0 && <RelatedAttorneys attorneys={data.attorneys} />}
        </>
      )}
    </Col>
  );
}
