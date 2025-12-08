import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Note: "output: export" removed to enable API routes for Google Sheets integration
  // Deploy to Vercel or similar platform that supports serverless functions
  basePath: isProd ? "/nxtbuck" : "",
  assetPrefix: isProd ? "/nxtbuck/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/nxtbuck" : "",
  },
};

export default nextConfig;
