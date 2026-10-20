import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { FacebookIcon, MailIcon, WhatsAppIcon } from "./Icons";

const WA = "https://wa.me/523351119740";
const ML = "https://www.mercadolibre.com.mx/tienda/zeutica";
const AMZ =
  "https://www.amazon.com.mx/stores/ZEUTICA/page/00775A44-2AAD-4A32-AE28-A34A204B1125";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-top-grid">
          <div>
            <div className="footer-ctas">
              <a href={WA} className="btn btn-outline btn-pill" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> Iniciar chat
              </a>
              <a href="mailto:ventas1@zeutica.com" className="btn btn-outline btn-pill">
                <MailIcon /> Escribir email
              </a>
            </div>
            <p style={{ fontSize: 14, marginBottom: 8, fontWeight: 600 }}>Síguenos</p>
            <div className="footer-social">
              <a
                className="social-btn"
                href="https://www.facebook.com/zeuticaimportacionydistribucion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <p style={{ fontSize: 14, marginTop: 20, marginBottom: 8, fontWeight: 600 }}>
              También nos encuentras en
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <a className="brand-chip" href={ML} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, padding: "10px 16px" }}>
                Mercado Libre
              </a>
              <a className="brand-chip" href={AMZ} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, padding: "10px 16px" }}>
                Amazon MX
              </a>
              <span className="brand-chip brand-tamx" style={{ fontSize: 14, padding: "8px 14px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/tamx-logo.png" alt="TA-MEX" width={28} height={28} style={{ borderRadius: 6, objectFit: "contain" }} />
                TA-MEX
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Servicios y soporte</h4>
            <ul>
              <li><Link href="/productos">Productos</Link></li>
              <li><Link href="/cotizaciones">Cotizaciones</Link></li>
              <li><Link href="/conocenos">Nosotros</Link></li>
              <li><Link href="/atencion-al-cliente">Atención al cliente</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ayuda e información</h4>
            <ul>
              <li><a href="mailto:ventas1@zeutica.com">ventas1@zeutica.com</a></li>
              <li><a href={WA} target="_blank" rel="noopener noreferrer">+52 33 5111 9740</a></li>
              <li><a href="https://wa.me/523312995688" target="_blank" rel="noopener noreferrer">+52 33 1299 5688</a></li>
              <li><Link href="/aviso-de-privacidad">Aviso de privacidad</Link></li>
              <li><Link href="/terminos">Términos</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-ice">
        <div className="container footer-ice-inner">
          <Link href="/cotizaciones" className="btn btn-outline btn-sm btn-pill">
            Solicitar cotización
          </Link>
          <span style={{ fontSize: 14, color: "#45585F" }}>
            Zapopan / Guadalajara, Jalisco · Lun–Vie 9:00–18:00
          </span>
        </div>
      </div>

      <div className="footer-brand">
        <div className="container footer-brand-inner">
          <BrandLogo variant="footer" />
          <div>
            <h4 style={{ marginBottom: 8 }}>Distribución B2B para industria y cuartos limpios</h4>
            <p>
              Importación y distribución de EPP, insumos para cuartos limpios y consumibles
              industriales. Calidad, atención personalizada y respuesta rápida.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container footer-legal-inner">
          <span>© {new Date().getFullYear()} ZEUTICA · Guadalajara, Jalisco, México</span>
          <div className="footer-legal-links">
            <Link href="/terminos">Términos</Link>
            <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>
            <Link href="/atencion-al-cliente">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
