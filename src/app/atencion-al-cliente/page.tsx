import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Atención al cliente",
  description:
    "Contacto Zeutica: WhatsApp, email ventas1@zeutica.com, Zapopan Jal., horario Lun–Vie 9–18.",
};

const WA = "https://wa.me/523351119740";
const WA2 = "https://wa.me/523312995688";

export default function ContactoPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Estamos a tus órdenes</h1>
          <p>
            Contáctanos por WhatsApp, correo o teléfono. Estamos en Zapopan / Guadalajara, Jalisco.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>Datos de contacto</h3>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:ventas1@zeutica.com">ventas1@zeutica.com</a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  +52 33 5111 9740
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a href={WA2} target="_blank" rel="noopener noreferrer">
                  +52 33 1299 5688
                </a>
              </li>
              <li>
                <strong>Ubicación:</strong> Zapopan, Jal. / Guadalajara, Jalisco, México
              </li>
              <li>
                <strong>Horario:</strong> Lunes–Viernes 9:00–18:00
              </li>
              <li>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/zeuticaimportacionydistribucion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zeutica Importación y Distribución
                </a>
              </li>
            </ul>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href={WA} className="btn btn-green" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
              <Link href="/cotizaciones" className="btn btn-outline">
                Formulario de cotización
              </Link>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title="Mapa Zeutica"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Zeutica+Zapopan&ll=20.73887,-103.39468&z=15&output=embed"
            />
          </div>
        </div>
      </section>

      <section className="section section-gray" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>¿Listo para cotizar?</h2>
            <p>Envíanos tu lista de productos y cantidades. Te respondemos en 24–48 h hábiles.</p>
            <div className="hero-ctas">
              <Link href="/cotizaciones" className="btn btn-green">
                Solicitar cotización
              </Link>
              <a href="mailto:ventas1@zeutica.com" className="btn btn-outline-white">
                ventas1@zeutica.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
