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
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
    swcFileReading: false,
  },
  webpack: (config, ctx) => {
    if (!ctx.isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
