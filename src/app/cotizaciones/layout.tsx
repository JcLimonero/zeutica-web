import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizaciones",
  description:
    "Solicita cotización de EPP, cuartos limpios y consumibles industriales. Zeutica — Guadalajara.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
