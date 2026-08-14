import Link from "next/link";
import ZapMark from "./ZapMark";
import { EMAIL, PHONE_DISPLAY } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-ink text-neutral-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <ZapMark className="h-8 w-8 text-white" />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Zap<span className="text-zap">Tap</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Custom-branded NFC review cards for local businesses. One payment, no
            subscription. Built and supported from Sammamish, Washington.
          </p>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Pages
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#the-window" className="hover:text-white">The 90-second window</Link></li>
            <li><Link href="/#products" className="hover:text-white">Cards and bundles</Link></li>
            <li><Link href="/#guarantee" className="hover:text-white">Guarantee</Link></li>
            <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/google-review-card" className="hover:text-white">Google review cards</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>{PHONE_DISPLAY}</li>
            <li>{EMAIL}</li>
            <li>Sammamish, WA</li>
            <li className="pt-2">Free shipping, delivered in 48 hours</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-6 text-xs">
          <span>&copy; {new Date().getFullYear()} ZapTap. All rights reserved.</span>
          <span>zaptap.shop</span>
        </div>
      </div>
    </footer>
  );
}
