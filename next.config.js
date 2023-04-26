/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    disableStaticImages: true,
	unoptimized: true
  },
  webpack: (config, ctx) => {
    if (!ctx.isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(nextConfig);
