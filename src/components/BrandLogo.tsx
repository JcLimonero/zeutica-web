import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  variant?: "header" | "footer" | "compact";
  className?: string;
  priority?: boolean;
};

const SIZES = {
  header: { width: 200, height: 66 },
  footer: { width: 180, height: 59 },
  compact: { width: 140, height: 46 },
} as const;

export default function BrandLogo({
  href = "/",
  variant = "header",
  className = "",
  priority = false,
}: Props) {
  const size = SIZES[variant];
  const img = (
    <Image
      src="/brand/zeutica-logotipo.png"
      alt="Zeutica"
      width={size.width}
      height={size.height}
      className={`brand-logo-img brand-logo-${variant}`}
      priority={priority}
      style={{ width: "auto", height: "auto", maxHeight: variant === "header" ? 48 : variant === "footer" ? 44 : 36 }}
    />
  );

  if (!href) {
    return <span className={`brand-logo ${className}`.trim()}>{img}</span>;
  }

  return (
    <Link href={href} className={`brand-logo ${className}`.trim()} aria-label="Zeutica inicio">
      {img}
    </Link>
  );
}

export function BrandMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/brand/zeutica-imagotipo.png"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}
