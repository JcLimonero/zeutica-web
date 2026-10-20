"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    title: "Soluciones en Protección Industrial y Cuartos Limpios",
    text: "Distribuimos EPP, insumos para cuartos limpios y consumibles industriales para empresas, laboratorios y manufactura. Calidad, atención y respuesta rápida.",
    /* Atmospheric industrial — navy/teal/green only (no external image dependency) */
    image:
      "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(115,183,51,.22) 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 90% 80%, rgba(58,109,180,.35) 0%, transparent 50%), linear-gradient(118deg, #002433 0%, #003a4f 42%, #0a5270 72%, #164e6b 100%)",
  },
  {
    title: "Especialistas en tapetes adhesivos",
    text: "Control de contaminación en accesos críticos. Asesoría para seleccionar el formato y adherencia adecuados a tu planta o laboratorio.",
    image:
      "radial-gradient(circle at 75% 35%, rgba(115,183,51,.35) 0%, transparent 42%), linear-gradient(105deg, #002433 0%, #003a4f 38%, #1a5a3a 100%)",
  },
  {
    title: "Cotiza con un equipo que conoce tu industria",
    text: "Electrónica, farmacéutica, laboratorios, alimentaria, belleza, manufactura y más. Te ayudamos a elegir los productos correctos.",
    image:
      "radial-gradient(ellipse at 80% 50%, rgba(58,109,180,.45) 0%, transparent 50%), linear-gradient(125deg, #001a24 0%, #003a4f 50%, #3a6db4 120%)",
  },
];

const WA = "https://wa.me/523351119740";

export default function Hero() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((v) => (v + 1) % SLIDES.length), []);
  const prev = useCallback(() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[i];

  return (
    <section className="hero" aria-label="Destacados">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`hero-slide${idx === i ? " active" : ""}`}
          style={{ backgroundImage: s.image }}
          aria-hidden={idx !== i}
        />
      ))}
      <div className="hero-overlay" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-content" key={i}>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-ctas">
            <Link href="/cotizaciones" className="btn btn-blue">
              Solicitar cotización
            </Link>
            <a href={WA} className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <button type="button" className="hero-arrow prev" onClick={prev} aria-label="Anterior">
          ‹
        </button>
        <button type="button" className="hero-arrow next" onClick={next} aria-label="Siguiente">
          ›
        </button>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`hero-dot${idx === i ? " active" : ""}`}
            aria-label={`Diapositiva ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
