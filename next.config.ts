import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gallery-soma-assets.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ap-northeast-2.console.aws.amazon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  distDir: "out",
};

export default nextConfig;
