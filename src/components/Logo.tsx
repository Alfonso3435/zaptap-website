import Image from "next/image";

/** Full square lockup (icon + wordmark stacked) — use where there's vertical room: large hero moments. */
export function Logo({
  variant = "black",
  className = "",
  height = 120,
}: {
  variant?: "black" | "white";
  className?: string;
  height?: number;
}) {
  const src =
    variant === "black" ? "/logo/zaptap-black.jpg" : "/logo/zaptap-white.jpg";
  return (
    <Image
      src={src}
      alt="ZapTap"
      width={height}
      height={height}
      className={`object-contain ${className}`}
      style={{ height, width: "auto" }}
      priority
    />
  );
}

/** Compact horizontal lockup for the header/footer — uses the real icon artwork (signal + bolt). */
export function LogoCompact({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const iconSrc = light ? "/logo/icon-light.png" : "/logo/icon-dark.png";
  return (
    <span className={`inline-flex items-center gap-2 font-display font-semibold text-xl ${className}`}>
      <Image
        src={iconSrc}
        alt=""
        width={28}
        height={28}
        className="object-contain shrink-0"
        style={{ height: 28, width: "auto" }}
        priority
      />
      <span className={light ? "text-paper" : "text-ink"}>
        Zap<span className="text-zap-yellow-deep">Tap</span>
      </span>
    </span>
  );
}
