/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md"],
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
