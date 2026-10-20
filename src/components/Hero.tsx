"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    title: "Soluciones en Protección Industrial y Cuartos Limpios",
    text: "Distribuimos EPP, insumos para cuartos limpios y consumibles industriales para empresas, laboratorios y manufactura. Calidad, atención y respuesta rápida.",
    image: "/hero/hero-cleanroom.webp",
  },
  {
    title: "Especialistas en tapetes adhesivos",
    text: "Control de contaminación en accesos críticos. Asesoría para seleccionar el formato y adherencia adecuados a tu planta o laboratorio.",
    image: "/hero/hero-industrial.webp",
  },
  {
    title: "Cotiza con un equipo que conoce tu industria",
    text: "Electrónica, farmacéutica, laboratorios, alimentaria, belleza, manufactura y más. Te ayudamos a elegir los productos correctos.",
    image: "/hero/hero-cofias.webp",
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
          key={s.image}
          className={`hero-slide hero-slide-photo${idx === i ? " active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
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
