import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["cdn.10minuteschool.com", "s3.ap-southeast-1.amazonaws.com"],
    unoptimized: true,
  },
};

const nextIntlPlugin = createNextIntlPlugin();
export default nextIntlPlugin(nextConfig);
