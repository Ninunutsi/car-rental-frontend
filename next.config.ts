import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  env: {
    CUSTOM_ENV: process.env.CUSTOM_ENV,
    BASE_URL: "http://127.0.0.1:8000/",
  },
  crossOrigin: "anonymous",
};

export default nextConfig;
