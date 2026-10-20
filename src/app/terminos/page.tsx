import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos",
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Términos de uso</h1>
          <p>Condiciones de uso del sitio informativo Zeutica.</p>
        </div>
      </div>
      <section className="section">
        <div className="container prose">
          <p>
            Este sitio web es un portal corporativo informativo de Zeutica. No opera como tienda en
            línea propia: no se procesan pagos ni carritos de compra en este dominio. Las compras en
            Mercado Libre o Amazon se rigen por los términos de esas plataformas.
          </p>
          <h2>Cotizaciones</h2>
          <p>
            Las solicitudes enviadas por formulario o WhatsApp constituyen un interés comercial; los
            precios, disponibilidad y condiciones se confirman en la respuesta de ventas.
          </p>
          <h2>Contenido</h2>
          <p>
            Las descripciones de producto son orientativas. Zeutica puede actualizar catálogo,
            familias y datos de contacto sin previo aviso.
          </p>
          <h2>Contacto</h2>
          <p>
            <a href="mailto:ventas1@zeutica.com">ventas1@zeutica.com</a> · WhatsApp +52 33 5111 9740
            / +52 33 1299 5688.
          </p>
          <p style={{ fontSize: 14, color: "#798490" }}>
            Texto orientativo del rediseño demo. Sustituir por términos definitivos antes de
            producción.
          </p>
        </div>
      </section>
    </>
  );
}
