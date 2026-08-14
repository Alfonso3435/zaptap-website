import Link from "next/link";
import ZapMark from "./ZapMark";

export function LogoCompact({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="ZapTap home">
      <ZapMark className={`h-8 w-8 ${dark ? "text-white" : "text-ink"}`} />
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Zap<span className={dark ? "text-zap" : "text-zap-dark"}>Tap</span>
      </span>
    </Link>
  );
}

export default LogoCompact;
