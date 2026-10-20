import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import Fab from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZEUTICA – Importación y distribución",
    template: "%s | ZEUTICA",
  },
  description:
    "Soluciones en protección industrial y cuartos limpios. EPP, insumos cleanroom y consumibles industriales. Cotización y WhatsApp.",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "270x270", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Fab />
        <CookieBanner />
      </body>
    </html>
  );
}
