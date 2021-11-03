import { headers } from 'utils/helpers';
import { BASE_API_URL } from 'utils/constants';

const fetch = require('node-fetch');

// querires for page/administration
const getAdmininstrationPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/admin-search/admin`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.admins.map((a) => a.link);

  return paths;
};

const getAdministrationContent = async (slug) => {
  const url = `${BASE_API_URL}/wp-json/individual-admin/admin/${slug}`;
  const request = await fetch(url, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

// queries for pages/attorneys
const getAttorneyPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/attorney-search/attorneys`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

const getAttorneyContent = async (slug) => {
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/main/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/contact/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/biography`, {
      headers,
    })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/blogs`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(
      `${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/news-press-releases`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles];
};

const getAttorneyBackPageContent = async (slug, type) => {
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/main/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/contact/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/${type}`, {
      headers,
    })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/blogs`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(
      `${BASE_API_URL}/wp-json/attorney-profile/attorney/${slug}/back-page/news-press-releases`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles];
};
// queries for pages/careers
const getCareersPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/career-portal/careers`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.careers.map((c) => `/career${c.slug}`);

  return paths;
};

const getCareersContent = async (slug) => {
  const url = `${BASE_API_URL}/wp-json/individual-career/career/${slug}`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

// query for pages/firm-pages
const getFirmPagesContent = async (slug) => {
  const request = await fetch(`${BASE_API_URL}/wp-json/firm-page/page/${slug}`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

// query for pages/index
const getHomePageContent = async () => {
  const [seo, news, events, locations, attorneys, administration] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/front-page/meta`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=98&_embed`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=99&_embed`, { headers }).then((data) => data.json()),
    fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/attorneys?per_page=100`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/administration?per_page=10`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  const posts = [...news, ...events];

  return [seo, posts, locations, attorneys, administration];
};
// query for pages/post
const getPostBySlugAndCategory = async (slug, category) => {
  const url = `${BASE_API_URL}/wp-json/single/post/${slug}/${category}`;
  const request = await fetch(url, { mode: 'no-cors', headers })
    .then((data) => data.body())
    .catch((err) => err);

  return request;
};

// query page content
const getPageContent = async (slug) => {
  const request = await fetch(`${BASE_API_URL}/wp-json/single-page/page/${slug}`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

// queries pages/library/category
const getCategoryPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/all-categories/list`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request
    .filter((a, b) => a.link !== b.link)
    .map((a) => `/library/category/${a.link}`);

  return paths;
};

const getAuthorPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/author/list`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.map((a) => `/library/author/${a}`);

  return paths;
};

const getLibraryCategoryContent = async (tempStr, tempChildCat) => {
  const [results, authors, childrenOfCurrentCategory, popularCategories, categoryDetails] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/v2/search/query?${tempStr}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/author/full-list`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/category/children/${tempChildCat}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/category/popular-categories`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/category/posts/${tempChildCat}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [results, authors, childrenOfCurrentCategory, popularCategories, categoryDetails];
};

const getAuthorContent = async (tempStr, tempChildCat, slug) => {
  const [results, authors, childrenOfCurrentCategory, popularCategories, authorBio] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/v2/search/query?${tempStr}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/author/full-list`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/category/children/${tempChildCat}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/category/popular-categories`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/author/bio/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [results, authors, childrenOfCurrentCategory, popularCategories, authorBio];
};

const getSearchQueryResults = async (tempStr, tempChildCat) => {
  const [results, authors, childrenOfCurrentCategory, popularCategories] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/v2/search/query?${tempStr}`, {
      headers,
    }).then((data) => data.json()),
    fetch(`${BASE_API_URL}/wp-json/author/full-list`, {
      headers,
    }).then((data) => data.json()),
    fetch(`${BASE_API_URL}/wp-json/category/children/${tempChildCat}`, {
      headers,
    }).then((data) => data.json()),
    fetch(`${BASE_API_URL}/wp-json/category/popular-categories`, {
      headers,
    }).then((data) => data.json()),
  ]);

  return [results, authors, childrenOfCurrentCategory, popularCategories];
};

// queries for pages/location
const getLocationPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.offices.map((o) => o.slug);

  return paths;
};

const getLocationContent = async (slug) => {
  const [locations, currentOffice, currentOfficePosts] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/individual-location/office/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/individual-location/posts/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [locations, currentOffice, currentOfficePosts];
};

// get pages/practice
const getPracticePaths = async (isArticles) => {
  const request = await fetch(`${BASE_API_URL}/wp-json/practice-portal/all-links`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const genPath = (slug) => (isArticles ? `/practice/${slug}/articles` : `/practice/${slug}`);

  const paths = request.map((slug) => genPath(slug));
  return paths;
};

const getPracticeContent = async (slug) => {
  const [res, practices] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/individual-practices/practice/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/practice-portal/page`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [res, practices];
};

const getPracticePosts = async (practiceSlug, blogId) => {
  const request = await fetch(
    `${BASE_API_URL}/wp-json/individual-practices/related-articles/practice/${practiceSlug}/${blogId}`,
  )
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

const getAttorneysPageContent = async () => {
  const [attorneys, locations, designations, practices, seo] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/attorney-search/attorneys`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-search/office-locations`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-search/designations`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-search/practices`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/attorney-search/meta`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [attorneys, locations, designations, practices, seo];
};

// queries for pages/covid-19-crisis-management...
const getCovid19BasedPages = async (slug, id) => {
  const [request, posts] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/single-page/page/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=${id}&per_page=100`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [request, posts];
};
module.exports = {
  getAdmininstrationPaths,
  getAdministrationContent,
  getAttorneyPaths,
  getAttorneyContent,
  getAttorneyBackPageContent,
  getCareersPaths,
  getCareersContent,
  getFirmPagesContent,
  getPostBySlugAndCategory,
  getHomePageContent,
  getPageContent,
  getCategoryPaths,
  getLibraryCategoryContent,
  getAuthorPaths,
  getAuthorContent,
  getSearchQueryResults,
  getLocationPaths,
  getLocationContent,
  getPracticePaths,
  getPracticeContent,
  getPracticePosts,
  getAttorneysPageContent,
  getCovid19BasedPages,
};
