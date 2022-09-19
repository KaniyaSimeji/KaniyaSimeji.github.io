/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	trailingSlash: true,
	images: {
		//unoptimized: true,
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
}

const withMDX = require("@next/mdx")({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		providerImportSource: "@mdx-js/react"
	},
})

module.exports = withMDX(nextConfig)
