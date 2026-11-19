import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
