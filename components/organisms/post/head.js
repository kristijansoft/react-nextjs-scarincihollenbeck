import { NextSeo, ArticleJsonLd } from 'next-seo';
import { SITE_URL } from 'utils/constants';

export default function PostHead({
  seo, canonicalUrl, metaAuthorLinks, post, authors,
}) {
  return (
    <>
      <NextSeo
        title={seo.metaTitle}
        description={seo.metaDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: seo.metaTitle,
          description: seo.metaDescription,
          type: 'article',
          article: {
            publishedTime: seo.publishedDate,
            modifiedTime: seo.updatedDate,
            authors: metaAuthorLinks,
          },
          images: [
            {
              url: post.featuredImage,
              width: 750,
              height: 350,
              alt: seo.metaTitle,
            },
          ],
        }}
        twitter={{
          handle: '@S_H_Law',
          site: canonicalUrl,
          cardType: seo.metaDescription,
        }}
      />
      <ArticleJsonLd
        url={canonicalUrl}
        title={seo.metaDescription}
        images={[post.featuredImage]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={authors.map((author) => author.display_name)}
        publisherName="Scarinci Hollenbeck, LLC"
        publisherLogo={`${SITE_URL}/images/sh-logo-2020-compressor.png`}
        description={`${seo.metaDescription}`}
      />
    </>
  );
}
