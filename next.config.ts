import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
  async redirects() {
    return [
      {
        source: "/services/mobile-desktop-apps",
        destination: "/services/android-ios-development",
        permanent: true,
      },
      {
        source: "/services/website-designing",
        destination: "/services/ui-ux-brand-design",
        permanent: true,
      },
      {
        source: "/services/graphics-logo-design",
        destination: "/services/ui-ux-brand-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
