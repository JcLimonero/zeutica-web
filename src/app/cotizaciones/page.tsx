"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";

const WA = "https://wa.me/523351119740";

export default function CotizacionesPage() {
  const [ok, setOk] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Lead-gen B2B</span>
          <h1>Cotizaciones</h1>
          <p>
            Completa el formulario con productos, cantidades y especificaciones. Nuestro equipo
            responde por correo o WhatsApp en horario laboral (Lun–Vie 9:00–18:00).
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container quote-layout">
          <div className="form-card">
            <div className={`form-success${ok ? " show" : ""}`} role="status">
              Gracias. Recibimos tu solicitud (demo local). En producción se enviará a ventas1@zeutica.com.
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-grid two">
                <div className="form-field">
                  <label htmlFor="nombre">Nombre *</label>
                  <input id="nombre" name="nombre" required autoComplete="given-name" />
                </div>
                <div className="form-field">
                  <label htmlFor="apellidos">Apellidos *</label>
                  <input id="apellidos" name="apellidos" required autoComplete="family-name" />
                </div>
                <div className="form-field">
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" name="empresa" autoComplete="organization" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="form-field">
                  <label htmlFor="telefono">Teléfono o WhatsApp *</label>
                  <input id="telefono" name="telefono" type="tel" required autoComplete="tel" />
                </div>
                <div className="form-field">
                  <label htmlFor="ciudad">Ciudad *</label>
                  <input id="ciudad" name="ciudad" required autoComplete="address-level2" />
                </div>
                <div className="form-field">
                  <label htmlFor="cp">Código postal *</label>
                  <input id="cp" name="cp" required autoComplete="postal-code" />
                </div>
                <div className="form-field full">
                  <label htmlFor="productos">Productos y cantidades *</label>
                  <textarea
                    id="productos"
                    name="productos"
                    required
                    placeholder="Ej.: 10 cajas cofia plisada blanca, 5 tapetes adhesivos azules — incluye especificaciones si las tienes"
                  />
                </div>
                <div className="form-field full">
                  <label htmlFor="archivo">Adjuntar requisición o archivo</label>
                  <input id="archivo" name="archivo" type="file" />
                  <span className="form-hint">Opcional · PDF, imagen o hoja de cálculo</span>
                </div>
              </div>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
                <button type="submit" className="btn btn-green">
                  Solicitar cotización
                </button>
                <a href={WA} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={18} /> Preferir WhatsApp
                </a>
              </div>
            </form>
          </div>

          <aside className="contact-card" style={{ maxWidth: 480 }}>
            <h3>Contacto directo</h3>
            <ul className="contact-list">
              <li>
                Email: <a href="mailto:ventas1@zeutica.com">ventas1@zeutica.com</a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  +52 33 5111 9740
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href="https://wa.me/523312995688" target="_blank" rel="noopener noreferrer">
                  +52 33 1299 5688
                </a>
              </li>
              <li>Zapopan / Guadalajara, Jalisco</li>
              <li>Horario: Lunes–Viernes 9:00–18:00</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
