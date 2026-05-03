/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Avoid webpack PackFileCache ENOENT spam when `.next/cache` is cleared mid-run
  // or out of sync (e.g. sync tools on Desktop). Tradeoff: slightly slower dev HMR.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
