import { NextSeo } from 'next-seo';
import SimpleSearch from 'components/molecules/simple-search';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';

export default function CovidPage({
  title,
  internalCovidPosts,
  seo,
  bodyContent,
  canonicalUrl,
  subTitle,
}) {
  const sidebar = (
    <>
      <SimpleSearch />
      <hr />
      <SubscriptionMessage />
      <CommonSidebarLinks />
    </>
  );
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescr} canonical={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <LargeSidebarWithPosts
        posts={internalCovidPosts}
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={sidebar}
      />
    </>
  );
}
