"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  MenuIcon,
  QuoteIcon,
  SearchIcon,
  WhatsAppIcon,
} from "./Icons";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/productos", label: "Productos" },
  { href: "/cotizaciones", label: "Cotizaciones" },
  { href: "/conocenos", label: "Nosotros" },
  { href: "/atencion-al-cliente", label: "Contacto" },
];

const WA = "https://wa.me/523351119740";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <Link href="/atencion-al-cliente">Ayuda y contacto</Link>
          <span className="topbar-msg">Cotización en 24–48 h · Lun–Vie 9:00–18:00</span>
          <div className="topbar-actions">
            <Link href="/cotizaciones" className="btn btn-pill btn-outline-white">
              Cotizar
            </Link>
            <a
              href={WA}
              className="btn btn-pill btn-topbar-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="subbar">
        <div className="container subbar-inner">
          <span className="subbar-locale">
            Español
            <span className="locale-badge">México</span>
          </span>
          <div className="segment-pills" aria-label="Segmentos">
            <span className="segment-pill active">Industrial</span>
            <span className="segment-pill">Cuarto limpio</span>
            <span className="segment-pill">EPP</span>
          </div>
        </div>
      </div>

      <div className="mainbar">
        <div className="container mainbar-inner">
          <BrandLogo variant="header" priority />

          <form className="search-wrap" action="/productos" method="get" role="search">
            <button type="submit" className="search-btn" aria-label="Buscar">
              <SearchIcon />
            </button>
            <input
              className="search-input"
              type="search"
              name="q"
              placeholder="Buscar productos, familias o catálogo…"
              aria-label="Buscar"
            />
          </form>

          <div className="header-actions">
            <Link href="/cotizaciones" className="header-action">
              <QuoteIcon />
              Cotizar
            </Link>
            <a href={WA} className="header-action" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={26} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <nav className="navbar" aria-label="Principal">
        <div className="container navbar-inner">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(pathname, item.href) ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div
        className={`offcanvas${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        role="presentation"
      >
        <div
          className="offcanvas-panel"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <button
            type="button"
            className="offcanvas-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/cotizaciones" className="offcanvas-cta" onClick={() => setOpen(false)}>
            Solicitar cotización
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
