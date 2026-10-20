export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 7h8v4H8zM8 13h5" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.5a12 12 0 006 6L16.5 13.5l4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  /* Geometric mark inspired by Praxisdienst split green/blue square */
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect width="48" height="48" rx="8" fill="#003A4F" />
      <path d="M8 8h16v32H8z" fill="#73B733" />
      <path d="M24 8h16v16H24z" fill="#3A6DB4" />
      <path d="M24 24h16v16H24z" fill="#E0EBEF" />
      <path
        d="M14 16h12M26 16l-8 16h12"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

/* Sector icons */
export function IconChip() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="18" width="44" height="28" rx="3" />
      <path d="M18 28h8M18 36h12M34 28h12M34 36h8" />
      <circle cx="48" cy="20" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPharma() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="22" y="10" width="20" height="44" rx="10" />
      <path d="M22 28h20" />
      <circle cx="32" cy="40" r="4" />
    </svg>
  );
}

export function IconLab() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 12v20l-10 18h36L40 32V12" />
      <path d="M22 12h20M18 42h28" />
    </svg>
  );
}

export function IconFood() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 52c-10 0-16-8-16-18 0-12 10-22 16-22s16 10 16 22c0 10-6 18-16 18z" />
      <path d="M32 12v8" />
    </svg>
  );
}

export function IconBeauty() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 48c-8-6-16-14-16-24a16 16 0 1132 0c0 10-8 18-16 24z" />
      <circle cx="32" cy="24" r="4" />
    </svg>
  );
}

export function IconHome() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 30L32 12l22 18" />
      <path d="M16 28v24h32V28" />
      <rect x="26" y="36" width="12" height="16" />
    </svg>
  );
}

export function IconFactory() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 52V28l14 8V28l14 8V20h20v32z" />
      <path d="M44 28v-8M50 28v-8" />
    </svg>
  );
}

export function IconRestaurant() {
  return (
    <svg className="sector-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12v20c0 4 3 6 6 6v14" />
      <path d="M16 12v12M24 12v12" />
      <path d="M42 12c6 0 8 6 8 12v8h-8V12zM42 32v20" />
    </svg>
  );
}

export function IconQuality() {
  return (
    <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="36" cy="36" r="24" />
      <path d="M24 37l8 8 16-18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDelivery() {
  return (
    <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <rect x="8" y="28" width="32" height="20" rx="2" />
      <path d="M40 34h14l8 10v4H40" />
      <circle cx="20" cy="52" r="5" />
      <circle cx="52" cy="52" r="5" />
    </svg>
  );
}

export function IconSupport() {
  return (
    <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="36" cy="28" r="10" />
      <path d="M18 54c2-10 10-16 18-16s16 6 18 16" />
      <path d="M14 30a8 8 0 008 8M58 30a8 8 0 01-8 8" strokeLinecap="round" />
    </svg>
  );
}

export function IconExperience() {
  return (
    <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <rect x="16" y="20" width="40" height="36" rx="3" />
      <path d="M28 20v-4h16v4M28 36h16M28 44h10" />
    </svg>
  );
}

export function ProductPlaceholder({ label }: { label: string }) {
  const navy = "#003A4F";
  const blue = "#3A6DB4";
  const green = "#73B733";
  const ice = "#E0EBEF";
  const soft = "#F5F8FA";

  if (label === "cofia") {
    return (
      <svg viewBox="0 0 200 200" aria-hidden>
        <rect width="200" height="200" fill={soft} />
        <ellipse cx="100" cy="108" rx="58" ry="48" fill="#fff" stroke={navy} strokeWidth="3" />
        <path d="M48 100c8-36 36-52 52-52s44 16 52 52" fill={ice} stroke={navy} strokeWidth="3" />
        <path d="M70 120c10 14 50 14 60 0" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="100" cy="72" r="5" fill={green} />
      </svg>
    );
  }
  if (label === "tapete") {
    return (
      <svg viewBox="0 0 200 200" aria-hidden>
        <rect width="200" height="200" fill={soft} />
        <rect x="36" y="52" width="128" height="96" rx="8" fill={blue} opacity="0.9" />
        <rect x="44" y="60" width="112" height="12" fill="#fff" opacity="0.35" />
        <rect x="44" y="80" width="112" height="12" fill="#fff" opacity="0.25" />
        <rect x="44" y="100" width="112" height="12" fill="#fff" opacity="0.2" />
        <rect x="44" y="120" width="112" height="12" fill="#fff" opacity="0.15" />
        <rect x="128" y="48" width="28" height="18" rx="3" fill={green} />
      </svg>
    );
  }
  if (label === "manga") {
    return (
      <svg viewBox="0 0 200 200" aria-hidden>
        <rect width="200" height="200" fill={soft} />
        <path
          d="M70 40c-8 20-10 50-8 80l18 36h12l14-40c4-28 2-56-4-76z"
          fill="#fff"
          stroke={navy}
          strokeWidth="3"
        />
        <path d="M78 44c20 8 36 8 52 0" fill="none" stroke={green} strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="92" cy="156" rx="16" ry="8" fill={ice} stroke={navy} strokeWidth="2" />
      </svg>
    );
  }
  if (label === "barba") {
    return (
      <svg viewBox="0 0 200 200" aria-hidden>
        <rect width="200" height="200" fill={soft} />
        <ellipse cx="100" cy="88" rx="34" ry="40" fill="#fff" stroke={navy} strokeWidth="3" />
        <path d="M66 100c8 36 60 36 68 0" fill={ice} stroke={navy} strokeWidth="3" />
        <path d="M72 78h56M78 118c12 16 32 16 44 0" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="88" cy="86" r="3" fill={navy} />
        <circle cx="112" cy="86" r="3" fill={navy} />
      </svg>
    );
  }
  if (label === "zapato") {
    return (
      <svg viewBox="0 0 200 200" aria-hidden>
        <rect width="200" height="200" fill={soft} />
        <path
          d="M48 120c8-20 28-36 52-36h28c20 0 36 14 40 28l4 12H52z"
          fill="#fff"
          stroke={navy}
          strokeWidth="3"
        />
        <path d="M52 128h120" stroke={green} strokeWidth="6" strokeLinecap="round" />
        <path d="M70 100h36" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  /* bolsa */
  return (
    <svg viewBox="0 0 200 200" aria-hidden>
      <rect width="200" height="200" fill={soft} />
      <path d="M62 70h76l10 90H52z" fill="#fff" stroke={navy} strokeWidth="3" />
      <path d="M78 70c0-18 44-18 44 0" fill="none" stroke={navy} strokeWidth="3" />
      <rect x="86" y="100" width="28" height="20" rx="3" fill={ice} stroke={blue} strokeWidth="2" />
      <circle cx="100" cy="64" r="4" fill={green} />
    </svg>
  );
}
