import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Add external domains if needed
    unoptimized: true, // Use this if you're not optimizing images
  },
};

export default nextConfig;
