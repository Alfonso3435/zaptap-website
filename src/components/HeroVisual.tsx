/**
 * TODO(Poncho): replace with a real photograph as soon as you have one.
 * A card in a hand on an actual counter beside a phone with Google open beats
 * any illustration. This is a stand-in that shows the mechanism honestly, and
 * it is labelled as an illustration on purpose so nobody reads it as a photo.
 */
export default function HeroVisual() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
        <svg viewBox="0 0 420 380" className="w-full" role="img" aria-label="A customer holds their phone near a branded ZapTap card and the Google review page opens">
          <defs>
            <linearGradient id="counter" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e5e5e5" />
            </linearGradient>
          </defs>

          <rect width="420" height="380" fill="url(#counter)" />
          <rect y="300" width="420" height="80" fill="#d4d4d4" />
          <rect y="298" width="420" height="3" fill="#a3a3a3" opacity="0.5" />

          {/* The branded card, tilted on the counter */}
          <g transform="translate(28 176) rotate(-9)">
            <rect x="4" y="8" width="196" height="124" rx="14" fill="#000" opacity="0.14" />
            <rect width="196" height="124" rx="14" fill="#0a0a0a" />

            <g transform="translate(20 22)">
              <g stroke="#ffffff" strokeLinecap="round" fill="none">
                <path d="M2 15a10.5 10.5 0 0 1 21 0" strokeWidth="2.4" />
                <path d="M6 15a6.5 6.5 0 0 1 13 0" strokeWidth="2.4" opacity="0.7" />
              </g>
              <path d="M14.4 16 8 24.8h4.3l-1.2 5 7.2-9.4h-4.2l0.3-4.4Z" fill="#FFE500" />
            </g>

            <text x="20" y="76" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="700">
              Enjoyed your visit?
            </text>
            <text x="20" y="98" fill="#FFE500" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.5">
              TAP HERE TO LEAVE A REVIEW
            </text>

            {/* backup QR, present on every product */}
            <g transform="translate(150 74)">
              <rect width="32" height="32" rx="4" fill="#ffffff" />
              <g fill="#0a0a0a">
                <rect x="4" y="4" width="8" height="8" /><rect x="20" y="4" width="8" height="8" />
                <rect x="4" y="20" width="8" height="8" /><rect x="20" y="20" width="4" height="4" />
                <rect x="14" y="14" width="4" height="4" /><rect x="24" y="24" width="4" height="4" />
              </g>
            </g>
          </g>

          {/* Tap ripples between card and phone */}
          <g stroke="#FFE500" fill="none" strokeLinecap="round" strokeWidth="4">
            <path d="M212 168a34 34 0 0 1 0 48" opacity="0.9" />
            <path d="M224 156a52 52 0 0 1 0 72" opacity="0.55" />
            <path d="M236 144a70 70 0 0 1 0 96" opacity="0.28" />
          </g>

          {/* The phone, review page already open */}
          <g transform="translate(258 62)">
            <rect x="5" y="9" width="132" height="252" rx="22" fill="#000" opacity="0.16" />
            <rect width="132" height="252" rx="22" fill="#0a0a0a" />
            <rect x="7" y="7" width="118" height="238" rx="16" fill="#ffffff" />

            <rect x="7" y="7" width="118" height="30" rx="16" fill="#f5f5f5" />
            <text x="20" y="27" fill="#525252" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600">
              google.com
            </text>

            <text x="20" y="62" fill="#0a0a0a" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700">
              Your Business
            </text>
            <text x="20" y="79" fill="#737373" fontFamily="system-ui, sans-serif" fontSize="9">
              Rate your experience
            </text>

            <g transform="translate(20 92)" fill="#FFC107">
              {[0, 19, 38, 57, 76].map((x) => (
                <path
                  key={x}
                  transform={`translate(${x} 0)`}
                  d="M7 0l2.2 4.5 5 .7-3.6 3.5.9 5L7 11.4 2.5 13.7l.9-5L0 5.2l5-.7L7 0z"
                />
              ))}
            </g>

            <rect x="20" y="118" width="92" height="42" rx="6" fill="#f5f5f5" />
            <rect x="28" y="128" width="70" height="5" rx="2.5" fill="#d4d4d4" />
            <rect x="28" y="140" width="52" height="5" rx="2.5" fill="#d4d4d4" />

            <rect x="20" y="174" width="92" height="26" rx="13" fill="#0a0a0a" />
            <text x="66" y="191" fill="#ffffff" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600">
              Post review
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 text-xs text-neutral-400">
        Illustration. Product photos coming.
      </figcaption>
    </figure>
  );
}
