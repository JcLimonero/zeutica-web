"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon, WhatsAppIcon } from "./Icons";

const WA = "https://wa.me/523351119740";

export default function Fab() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fab-stack">
      <a
        href={WA}
        className="fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
      <button
        type="button"
        className={`fab-top${showTop ? " visible" : ""}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUpIcon />
      </button>
    </div>
  );
}
