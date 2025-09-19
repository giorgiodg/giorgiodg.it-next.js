/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://giorgiodg.it',
  generateRobotsTxt: true, // (optional)
  exclude: ['/cv'],
}
