import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return {
      beforeFiles: [
        // The archived homepage expects its runtime and fonts at these URLs.
        {
          source: "/_next/static/immutable/:asset*",
          destination: "/static/immutable/:asset*",
        },
        {
          source: "/",
          destination: "/index.html",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
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
