"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("zeutica-cookies")) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem("zeutica-cookies", "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookies">
      <h3>Privacidad</h3>
      <p>
        Cookies esenciales para el sitio. Al continuar, aceptas el aviso de privacidad.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-green btn-sm" onClick={accept}>
          Aceptar
        </button>
        <a href="/aviso-de-privacidad" className="btn btn-outline btn-sm">
          Más información
        </a>
      </div>
    </div>
  );
}
