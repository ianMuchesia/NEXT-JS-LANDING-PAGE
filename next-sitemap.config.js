/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://careservicesandconsultantltd.com', // Replace with your site URL
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,

  exclude: ['/server-sitemap-index.xml'], // Add any pages you want to exclude from the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [], // Add any additional sitemaps you have
  },
 
};

  
  
  
  
  
  