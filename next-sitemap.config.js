/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://careservicesandconsultantltd.com', // Replace with your site URL
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // Add any pages you want to exclude from the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [], // Add any additional sitemaps you have
  },
  transform: async (config, path) => {
    const { lastmod } = config;
    const modifiedConfig = { ...config };
  
    if (path === '/') {
      // You can customize the lastmod value for the homepage
      modifiedConfig.lastmod = '2023-05-20T12:00:00.000Z';
    }
  
    return modifiedConfig;
  },
  
};

  
  
  
  
  
  