import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.paddle.com",
        port: "",
        pathname: "/_next/image**",
      },
    ],
  },
};

export default nextConfig;
