import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Aviso de privacidad</h1>
          <p>Información sobre el tratamiento de datos personales en Zeutica.</p>
        </div>
      </div>
      <section className="section">
        <div className="container prose">
          <p>
            Zeutica Importación y Distribución (en adelante, “Zeutica”), con operaciones en Zapopan /
            Guadalajara, Jalisco, México, trata datos personales de contacto comercial con la
            finalidad de atender cotizaciones, brindar información de productos y dar seguimiento a
            solicitudes de clientes y prospectos.
          </p>
          <h2>Datos que recabamos</h2>
          <p>
            Nombre, apellidos, empresa, correo electrónico, teléfono o WhatsApp, ciudad, código
            postal, contenido de la solicitud de cotización y archivos adjuntos que el usuario
            proporcione de forma voluntaria.
          </p>
          <h2>Finalidades</h2>
          <ul>
            <li>Responder solicitudes de cotización y contacto.</li>
            <li>Brindar atención comercial y soporte.</li>
            <li>Enviar información relacionada con productos o servicios cuando así se solicite.</li>
          </ul>
          <h2>Contacto</h2>
          <p>
            Para ejercer derechos ARCO o aclaraciones:{" "}
            <a href="mailto:ventas1@zeutica.com">ventas1@zeutica.com</a>.
          </p>
          <p style={{ fontSize: 14, color: "#798490" }}>
            Texto orientativo del rediseño demo. Sustituir por el aviso legal definitivo de la
            empresa antes de producción.
          </p>
        </div>
      </section>
    </>
  );
}
