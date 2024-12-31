/** @type { import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.wisteria-io.com",
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://www.wisteria-io.com/sitemap.xml",
        ],
    },
};