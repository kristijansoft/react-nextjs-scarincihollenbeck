const {
  HOLIDAY_REWRITES,
  FUNERAL_REWRITES,
  POST_TYPE_REWRITES,
  POST_CATEOGRY_REWRITES,
  FIRM_PAGES_REWRITES,
} = require('./utils/rewrites');

module.exports = {
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    domains: [
      'shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com',
      'musicesq.com',
      'scarincilawyer.com',
      'conqqqshlskopvv.nyc3.digitaloceanspaces.com',
    ],
  },
  async rewrites() {
    return [
      ...POST_TYPE_REWRITES,
      ...POST_CATEOGRY_REWRITES,
      ...FIRM_PAGES_REWRITES,
      ...FUNERAL_REWRITES,
      ...HOLIDAY_REWRITES,
    ];
  },
};
