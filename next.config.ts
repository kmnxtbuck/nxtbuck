import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nxtbuck",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
