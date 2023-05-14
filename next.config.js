/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  webpack: (config, ctx) => {
    if (!ctx.isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
