const HOLIDAY_REWRITES = [
  {
    source: '/holiday/2019-happy-holidays',
    destination: '/holiday/2019-happy-holidays',
  },
  {
    source: '/holiday/2020-happy-holidays',
    destination: '/holiday/2020-happy-holidays',
  },
];

const FUNERAL_REWRITES = [
  {
    source: '/passing-attorney-harvey-r-poe',
    destination: '/funeral-announcements/passing-attorney-harvey-r-poe',
  },
  {
    source: '/passing-attorney-david-a-einhorn',
    destination: '/funeral-announcements/passing-attorney-david-a-einhorn',
  },
];

const POST_TYPE_REWRITES = [
  {
    source: '/attorneys/:path*',
    destination: '/attorney/:path*',
  },
  {
    source: '/practices/:path*',
    destination: '/practice/:path*',
  },
  {
    source: '/locations/:path*',
    destination: '/location/:path*',
  },
  {
    source: '/careers/:path*',
    destination: '/career/:path*',
  },
];

const POST_CATEOGRY_REWRITES = [
  {
    source: '/law-firm-insights/:slug*',
    destination: '/post/:slug*?category=law-firm-insights',
  },
  {
    source: '/firm-news/:slug*',
    destination: '/post/:slug*?category=firm-news',
  },
  {
    source: '/news/:slug*',
    destination: '/post/:slug*?category=firm-news',
  },
  {
    source: '/client-alert/:slug*',
    destination: '/post/:slug*?category=client-alert',
  },
  {
    source: '/covid-19-alerts/:slug*',
    destination: '/post/:slug*?category=covid-19-alerts',
  },
  {
    source: '/covid-19-education-alert/:slug*',
    destination: '/post/:slug*?category=covid-19-education-alert',
  },
  {
    source: '/cyber-security-client-alert/:slug*',
    destination: '/post/:slug*?category=cyber-security-client-alert',
  },
  {
    source: '/featured/:slug*',
    destination: '/post/:slug*?category=featured',
  },
  {
    source: '/federal-payroll-protection-act/:slug*',
    destination: '/post/:slug*?category=federal-payroll-protection-act',
  },
  {
    source: '/firm-events/:slug*',
    destination: '/post/:slug*?category=firm-events',
  },
  {
    source: '/headlines/:slug*',
    destination: '/post/:slug*?category=headlines',
  },
  {
    source: '/just-in/:slug*',
    destination: '/post/:slug*?category=just-in',
  },
  {
    source: '/art-law/:slug*',
    destination: '/post/:slug*?category=art-law',
  },
  {
    source: '/quick-news/:slug*',
    destination: '/post/:slug*?category=quick-news',
  },
  {
    source: '/mandarin/:slug*',
    destination: '/post/:slug*?category=mandarin',
  },
];

const FIRM_PAGES_REWRITES = [
  {
    source: '/diversity-group',
    destination: '/firm-pages/diversity-group',
  },
  {
    source: '/community-involvement',
    destination: '/firm-pages/community-involvement',
  },
  {
    source: '/pro-bono',
    destination: '/firm-pages/pro-bono',
  },
  {
    source: '/women-lead',
    destination: '/firm-pages/women-lead',
  },
];

module.exports = {
  HOLIDAY_REWRITES,
  FUNERAL_REWRITES,
  POST_TYPE_REWRITES,
  POST_CATEOGRY_REWRITES,
  FIRM_PAGES_REWRITES,
};
