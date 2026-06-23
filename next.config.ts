import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The legacy site uses plain <img> tags served from /public to preserve the
  // original CSS classes, aspect-ratio styles, and the framework's DOM selectors.
  reactStrictMode: false,
};

export default nextConfig;
