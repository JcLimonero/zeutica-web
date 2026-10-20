import type { NextConfig } from "next";

// Vercel-native Next.js — Image Optimization enabled for local /public assets.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
};

export default nextConfig;
