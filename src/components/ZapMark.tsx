/**
 * The ZapTap mark: three signal arcs above a bolt, matching the logo files
 * in /public/logo. Arcs inherit currentColor so the mark works on light and
 * dark backgrounds. The bolt is always brand yellow.
 */
export default function ZapMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path d="M9 22a15 15 0 0 1 30 0" strokeWidth="3.4" />
        <path d="M14.5 22a9.5 9.5 0 0 1 19 0" strokeWidth="3.4" opacity="0.75" />
        <path d="M20 22a4 4 0 0 1 8 0" strokeWidth="3.4" opacity="0.5" />
      </g>
      <path
        d="M26.4 23.5 15.5 38.5h7.4L20.8 47l12.4-16h-7.3l0.5-7.5Z"
        fill="#FFE500"
      />
    </svg>
  );
}
