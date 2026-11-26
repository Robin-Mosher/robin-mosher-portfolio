import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: "out/robin-mosher-portfolio",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
