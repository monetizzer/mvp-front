const siteUrl = "https://maite.com";

module.exports = {
	siteUrl,
	exclude: ["/404"],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: ["/"],
				disallow: ["/404"],
			},
		],
		additionalSitemaps: [`${siteUrl}/sitemap.xml`],
	},
};
