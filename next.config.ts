import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR-ready config (no basePath/assetPrefix needed for Amplify hosting)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
