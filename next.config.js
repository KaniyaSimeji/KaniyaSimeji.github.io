/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	basePath: "/KaniyaSimeji.github.io",
	assetPrefix: "/KaniyaSimeji.github.io",
	trailingSlash: true,
	images: {
		unoptimized: true,
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
