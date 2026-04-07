import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: "strict",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.paddle.com",
        port: "",
        pathname: "/_next/image**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
