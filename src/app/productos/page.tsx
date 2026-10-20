import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { WhatsAppIcon } from "@/components/Icons";
import { FAMILY_IMAGES, SKU_IMAGES } from "@/lib/productImages";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Familias de producto Zeutica: cofias, tapetes adhesivos, desechables PP/PE y más. Catálogo informativo sin tienda en línea.",
};

const WA = "https://wa.me/523351119740";
const ML = "https://www.mercadolibre.com.mx/tienda/zeutica";
const AMZ =
  "https://www.amazon.com.mx/stores/ZEUTICA/page/00775A44-2AAD-4A32-AE28-A34A204B1125";

const FAMILIAS = [
  { name: "Cofias / cabeza", desc: "Plisadas blanco/azul, escafandra y malla.", key: "cofia", cat: "Cofias" },
  { name: "Tapetes adhesivos", desc: "Azul y blanco. Especialidad TA-MEX.", key: "tapete", cat: "Tapete" },
  { name: "Empaque y bolsas", desc: "Insumos de empaque para higiene industrial.", key: "bolsa", cat: "Desechable PP/PE" },
  { name: "Cubremangas", desc: "Protección de brazos desechable.", key: "manga", cat: "Desechable PP/PE" },
  { name: "Cubrebarba / rostro", desc: "Barreras para personal y áreas críticas.", key: "barba", cat: "Desechable PP/PE" },
  { name: "Cubrezapatos", desc: "Con opción antiderrapante.", key: "zapato", cat: "Desechable PP/PE" },
];

const SKUS = [
  { name: "Cofia plisada blanco", cat: "Cofias" },
  { name: "Cofia plisada color azul", cat: "Cofias" },
  { name: "Cofia tipo escafandra", cat: "Cofias" },
  { name: "Cofia tipo malla", cat: "Cofias" },
  { name: "Cubrebarba", cat: "Desechable PP/PE" },
  { name: "Cubremanga", cat: "Desechable PP/PE" },
  { name: "Cubrezapato con antiderrapante", cat: "Desechable PP/PE" },
  { name: "Tapete adhesivo color azul", cat: "Tapete" },
  { name: "Tapete adhesivo color blanco", cat: "Tapete" },
];

export default function ProductosPage() {
  return (
    <>
      <div className="page-hero page-hero-photo">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url(/hero/teaser-catalog.webp)" }}
          aria-hidden
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Catálogo informativo</span>
          <h1>Nuestros productos</h1>
          <p>
            Línea para protección industrial, cuartos limpios y control de higiene. Fichas
            informativas — sin precios ni carrito en este sitio. Cotiza o compra en marketplaces.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pdf-strip">
            <div className="pdf-strip-photo">
              <Image
                src="/corporate/catalog-preview-2.webp"
                alt="Vista previa del catálogo Zeutica"
                width={120}
                height={80}
                className="pdf-strip-thumb"
              />
            </div>
            <div>
              <h3>Catálogo Zeutica 2026</h3>
              <p>Consulta el flipbook / PDF en el sitio actual o solicítalo por correo.</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-navy btn-sm"
                href="https://zeutica.com/productos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir catálogo
              </a>
              <Link href="/cotizaciones" className="btn btn-green btn-sm">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray" style={{ paddingTop: 40 }}>
        <div className="container">
          <span className="eyebrow">Familias</span>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Categorías de oferta
          </h2>
          <div className="card-grid">
            {FAMILIAS.map((f) => {
              const img = FAMILY_IMAGES[f.key];
              return (
                <article key={f.name} className="product-card">
                  <ProductImage src={img.src} alt={img.alt} />
                  <p className="meta" style={{ fontSize: 12, fontWeight: 600, color: "#798490", marginBottom: 4 }}>
                    {f.cat}
                  </p>
                  <h3>{f.name}</h3>
                  <p>{f.desc}</p>
                  <Link href="/cotizaciones" className="btn btn-green btn-sm">
                    Solicitar cotización
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Referencia</span>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Productos destacados
          </h2>
          <p style={{ maxWidth: 640, marginBottom: 28 }}>
            Listado informativo (sin stock ni add-to-cart). Para compra inmediata puedes usar
            Mercado Libre o Amazon; para volumen B2B, cotiza con nosotros.
          </p>
          <div className="sku-list">
            {SKUS.map((s) => {
              const img = SKU_IMAGES[s.name];
              return (
                <div key={s.name} className="sku-item">
                  <div className="sku-item-main">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={72}
                        height={72}
                        className="sku-thumb"
                      />
                    ) : null}
                    <div>
                      <h4>{s.name}</h4>
                      <span className="meta">{s.cat} · Disponible a cotización</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link href="/cotizaciones" className="btn btn-outline btn-sm">
                      Cotizar
                    </Link>
                    <a href={WA} className="btn btn-green btn-sm" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container text-center">
          <span className="eyebrow">Canales externos</span>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Compra en nuestros marketplaces
          </h2>
          <p className="section-lead">
            No operamos checkout propio. También nos encuentras en:
          </p>
          <div className="brands-row" style={{ marginBottom: 28 }}>
            <a className="brand-chip" href={ML} target="_blank" rel="noopener noreferrer">
              Mercado Libre
            </a>
            <a className="brand-chip" href={AMZ} target="_blank" rel="noopener noreferrer">
              Amazon MX
            </a>
          </div>
          <a href={WA} className="whatsapp-banner" style={{ maxWidth: 560, margin: "0 auto" }} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={26} /> COTIZAR POR WHATSAPP
          </a>
        </div>
      </section>
    </>
  );
}
