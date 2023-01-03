/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import("next").NextConfig} */

const withPWA = require("next-pwa")({
	disable: process.env.NODE_ENV === "development",
	dest: "public",
	register: true,
	sw: "/sw.js",
});

const nextConfig = {
	experimental: {
		esmExternals: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = withPWA(nextConfig);
