import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import HomeBanner from 'components/organisms/home/banner';
import HomeHoneyCombSection from 'components/organisms/home/honey-comb-section';
import HomeLocations from 'components/organisms/home/locations';
import HomeMainTag from 'components/organisms/home/main-tag';
import HomeOurLeadership from 'components/organisms/home/our-leadership';
import HomeReviews from 'components/organisms/home/reviews';
import HomeWhoWeAreSection from 'components/organisms/home/who-we-are-section';
import HomePageLink from 'components/organisms/home/page-link';
import ArticleHero from 'components/shared/article-hero';
import { sortByKey } from 'utils/helpers';
import styles from 'styles/Home.module.css';
import marginStyles from 'styles/Margins.module.css';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import { SITE_URL } from 'utils/constants';

export default function HomePage({
  seo, posts, locations, leadership,
}) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`${SITE_URL}`}
        openGraph={{
          type: 'website',
          url: SITE_URL,
          title: 'Scarinci Hollenbeck',
          description: seo.metaDescription,
          images: [
            {
              url: `${SITE_URL}/images/no-image-found-diamond.png`,
              width: 300,
              height: 140,
              alt: 'Scarinci Hollenbeck',
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: SITE_URL,
          cardType: seo.metaDescription,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
      </Head>
      <HomeBanner />
      <Container>
        <HomeMainTag />
        <HomeHoneyCombSection
          contentOne={(
            <Image
              src="/images/goalssh-400x400.png"
              alt="meet our attorneys"
              width={400}
              height={400}
              layout="intrinsic"
            />
          )}
          contentTwo={(
            <div className={`${styles.honeyCombContent} float-right`}>
              <p className={styles.honeycombTitle}>
                <strong>MEET OUR TEAM</strong>
              </p>
              <p>
                Our attorneys collaborate across the firm’s practice areas to achieve the best
                combination of knowledge, experience, and efficiency. We are dedicated to delivering
                outstanding client service.
              </p>
              <Link href="/attorneys">
                <a>Meet our attorneys</a>
              </Link>
            </div>
          )}
        />
        <HomeHoneyCombSection
          contentOne={(
            <div className={styles.honeyCombContent}>
              <p className={styles.honeycombTitle}>
                <strong>OUR SERVICES</strong>
              </p>
              <p>
                We help our clients achieve their goals by providing tailored services with the
                focused experience of a boutique firm by drawing upon the resources of the firm’s
                core practice areas.
              </p>
              <Link href="/practices">
                <a>See what we do</a>
              </Link>
            </div>
          )}
          contentTwo={(
            <div className="float-right">
              <Image
                src="/images/colabsh2-400x400.png"
                alt="meet our attorneys"
                width={400}
                height={400}
                layout="intrinsic"
              />
            </div>
          )}
        />
        <HomeWhoWeAreSection />
        <HomePageLink link="/firm-overview" title="More from our firm" />
        <HomeOurLeadership attorneys={leadership} />
        <HomeReviews />
        <HomePageLink link="/awards" title="Award Methodology" />
        <HomeLocations locations={sortByKey(locations.offices, 'id')} />
        <div className={marginStyles.mt6}>
          <ArticleHero content={posts} />
        </div>
        <HomePageLink
          link="/library/category/firm-news"
          title="Read more articles about our attorneys"
          margins="my-5"
        />
      </Container>
    </>
  );
}
