import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Zeutica: empresa mexicana de importación y distribución de EPP, cuartos limpios y consumibles. Misión, visión y especialidad en tapetes adhesivos.",
};

const ML = "https://www.mercadolibre.com.mx/tienda/zeutica";

export default function ConocenosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Empresa</span>
          <h1>Conócenos</h1>
          <p>
            Empresa mexicana especializada en distribución de EPP, insumos para cuartos limpios y
            consumibles especializados, con calidad, atención personalizada y respuesta rápida.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="banner-specialty banner-specialty-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/tamx-banner.png"
              alt="Somos especialistas en tapetes adhesivos — TA-MEX"
              className="banner-specialty-img"
            />
          </div>
        </div>
      </section>

      <section className="section section-gray" style={{ paddingTop: 40 }}>
        <div className="container about-grid">
          <div className="mv-card">
            <span className="eyebrow">Quiénes somos</span>
            <h2 style={{ fontSize: 28 }}>Zeutica</h2>
            <p>
              Somos una empresa mexicana enfocada en la importación y distribución B2B de equipo de
              protección personal, insumos para cuartos limpios y consumibles industriales para
              empresas, laboratorios y manufactura en México.
            </p>
            <p style={{ marginBottom: 0 }}>
              Operamos desde Zapopan / Guadalajara, Jalisco, con canales de cotización, WhatsApp y
              presencia en marketplaces (Mercado Libre y Amazon MX).
            </p>
          </div>
          <div className="about-photo">
            <Image
              src="/corporate/conocenos-team.webp"
              alt="Equipo y operación Zeutica"
              width={1200}
              height={1200}
              className="about-photo-img"
              sizes="(max-width: 900px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="mv-card">
            <span className="eyebrow">Visión</span>
            <h2 style={{ fontSize: 28 }}>Referente en distribución</h2>
            <p style={{ marginBottom: 0 }}>
              Ser referente en distribución de protección, cuartos limpios y consumibles
              especializados, por confianza, calidad y eficiencia.
            </p>
          </div>
          <div className="mv-card" style={{ borderTopColor: "#3A6DB4" }}>
            <span className="eyebrow">Misión</span>
            <h2 style={{ fontSize: 28 }}>Soluciones confiables</h2>
            <p style={{ marginBottom: 0 }}>
              Proveer soluciones y productos confiables con calidad, atención personalizada y
              servicio eficiente para las operaciones de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container text-center">
          <span className="eyebrow">Marketplace</span>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Los mejores productos en un solo clic
          </h2>
          <p className="section-lead">
            Compra en Mercado Libre (enlace externo). Para volumen industrial, solicita cotización.
          </p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}>
            <a href={ML} className="btn btn-blue" target="_blank" rel="noopener noreferrer">
              Vamos a comprar
            </a>
            <Link href="/cotizaciones" className="btn btn-outline">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
