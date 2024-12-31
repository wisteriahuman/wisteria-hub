/** @type { import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.wisteria-io.com",
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
        additionalSitemaps: [
            // 必要に応じて追加
        ],
    },
};