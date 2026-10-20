import Link from "next/link";
import Hero from "@/components/Hero";
import ProductImage from "@/components/ProductImage";
import {
  IconBeauty,
  IconChip,
  IconDelivery,
  IconExperience,
  IconFactory,
  IconFood,
  IconHome,
  IconLab,
  IconPharma,
  IconQuality,
  IconRestaurant,
  IconSupport,
  WhatsAppIcon,
} from "@/components/Icons";
import { FAMILY_IMAGES } from "@/lib/productImages";

const WA = "https://wa.me/523351119740";
const ML = "https://www.mercadolibre.com.mx/tienda/zeutica";
const AMZ =
  "https://www.amazon.com.mx/stores/ZEUTICA/page/00775A44-2AAD-4A32-AE28-A34A204B1125";

const FAMILIAS = [
  { name: "Cofias / cabeza", desc: "Plisadas, escafandra y malla para control de partículas.", key: "cofia" },
  { name: "Tapetes adhesivos", desc: "Control de contaminación en accesos. Especialidad TA-MEX.", key: "tapete" },
  { name: "Empaque y bolsas", desc: "Soluciones de empaque para higiene y proceso.", key: "bolsa" },
  { name: "Cubremangas", desc: "Protección de brazos en ambientes controlados.", key: "manga" },
  { name: "Cubrebarba / rostro", desc: "Barreras desechables para personal y visitantes.", key: "barba" },
  { name: "Cubrezapatos", desc: "Con opciones antiderrapantes para tránsito seguro.", key: "zapato" },
];

const SECTORES = [
  { name: "Industria electrónica", Icon: IconChip },
  { name: "Industria farmacéutica", Icon: IconPharma },
  { name: "Laboratorios", Icon: IconLab },
  { name: "Industria alimentaria", Icon: IconFood },
  { name: "Belleza", Icon: IconBeauty },
  { name: "Doméstico", Icon: IconHome },
  { name: "Manufactura", Icon: IconFactory },
  { name: "Industria restaurantera", Icon: IconRestaurant },
];

const PILARES = [
  {
    title: "Calidad Garantizada",
    text: "Productos confiables para protección industrial y ambientes controlados.",
    Icon: IconQuality,
  },
  {
    title: "Entrega Confiable",
    text: "Distribución B2B con respuesta ágil desde Guadalajara / Zapopan.",
    Icon: IconDelivery,
  },
  {
    title: "Atención Personalizada",
    text: "Te ayudamos a seleccionar los productos adecuados a tus requerimientos.",
    Icon: IconSupport,
  },
  {
    title: "Experiencia Industrial",
    text: "Conocimiento de sectores: electrónica, pharma, labs, alimentos y más.",
    Icon: IconExperience,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="brands-band">
            <span className="eyebrow">También nos encuentras</span>
            <div className="brands-row">
              <a className="brand-chip" href={ML} target="_blank" rel="noopener noreferrer">
                <span className="brand-dot" aria-hidden />
                Mercado Libre
              </a>
              <a className="brand-chip brand-amazon" href={AMZ} target="_blank" rel="noopener noreferrer">
                <span className="brand-dot" aria-hidden />
                Amazon MX
              </a>
              <span className="brand-chip brand-tamx">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/tamx-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="brand-chip-logo"
                />
                TA-MEX · Tapetes
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <span className="eyebrow">Nuestra oferta</span>
          <h2 className="section-title">Familias de producto</h2>
          <p className="section-lead" style={{ marginLeft: 0 }}>
            Línea informativa para protección industrial, cuartos limpios y control de higiene.
            Sin precios en sitio: solicita cotización o escríbenos por WhatsApp.
          </p>
          <div className="card-grid">
            {FAMILIAS.map((f) => {
              const img = FAMILY_IMAGES[f.key];
              return (
                <article key={f.name} className="product-card">
                  <ProductImage src={img.src} alt={img.alt} />
                  <h3>{f.name}</h3>
                  <p>{f.desc}</p>
                  <Link href="/cotizaciones" className="btn btn-green btn-sm">
                    Solicitar cotización
                  </Link>
                </article>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/productos" className="btn btn-outline">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">Industrias</span>
            <h2 className="section-title">Sectores que atendemos</h2>
          </div>
          <div className="sector-grid">
            {SECTORES.map(({ name, Icon }) => (
              <div key={name} className="sector-item">
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container text-center">
          <span className="eyebrow">¿Por qué elegir ZEUTICA?</span>
          <h2 className="section-title">Confianza para tu operación</h2>
          <p className="section-lead">
            Importación y distribución B2B con foco en calidad, entrega y acompañamiento técnico.
          </p>
          <div className="trust-grid">
            {PILARES.map(({ title, text, Icon }) => (
              <div key={title} className="trust-item">
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="teaser-row">
            <div
              className="media-teaser"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,36,51,.25), rgba(0,36,51,.75)), url(/hero/teaser-catalog.webp)",
              }}
            >
              <div className="media-teaser-body">
                <h3>Catálogo 2026</h3>
                <p>Consulta familias y especificaciones en nuestra página de productos.</p>
                <Link href="/productos" className="btn btn-blue btn-sm">
                  Ver catálogo
                </Link>
              </div>
            </div>
            <div
              className="media-teaser"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,36,51,.2), rgba(0,36,51,.8)), url(/corporate/conocenos-team.webp)",
              }}
            >
              <div className="media-teaser-body">
                <h3>Proveedor de confianza</h3>
                <p>Distribución especializada desde Jalisco para plantas y laboratorios.</p>
                <Link href="/conocenos" className="btn btn-outline-white btn-sm">
                  Conócenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="cta-band">
            <h2>Nuestro equipo puede ayudarte a seleccionar los productos adecuados</h2>
            <p>
              Cuéntanos tu requerimiento: cantidades, especificaciones y ciudad. Respondemos por
              correo o WhatsApp.
            </p>
            <div className="hero-ctas">
              <Link href="/cotizaciones" className="btn btn-green">
                Solicitar cotización
              </Link>
              <a href="mailto:ventas1@zeutica.com" className="btn btn-outline-white">
                ventas1@zeutica.com
              </a>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <a href={WA} className="whatsapp-banner" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={28} /> CONTÁCTANOS POR WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
