import type { NextConfig } from "next";

// Vercel-native Next.js (App Router). Sin `output: "export"` para
// aprovechar el runtime de Vercel (SSR/ISR disponibles si se necesitan).
// El sitio sigue siendo estático en la práctica (formulario client-side).
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
