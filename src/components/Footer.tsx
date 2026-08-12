import { LogoCompact } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-page py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <LogoCompact light />
            <p className="mt-4 text-paper/60 text-sm leading-relaxed max-w-xs">
              Custom-branded NFC cards and plates so your customers can leave
              reviews, follow you on social media, or answer surveys — with a
              single tap.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wide text-paper/50">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li><a href="#how-it-works" className="hover:text-zap-yellow">How it works</a></li>
              <li><a href="#products" className="hover:text-zap-yellow">Products</a></li>
              <li><a href="#why-zaptap" className="hover:text-zap-yellow">Why ZapTap</a></li>
              <li><a href="#faq" className="hover:text-zap-yellow">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wide text-paper/50">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li>
                <a href="tel:+14256528532" className="hover:text-zap-yellow">
                  +1 425 652 8532
                </a>
              </li>
              <li>
                <a href="mailto:zaptapcard@gmail.com" className="hover:text-zap-yellow">
                  zaptapcard@gmail.com
                </a>
              </li>
              <li className="text-paper/50">Free shipping · Delivered in 48 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} ZapTap. All rights reserved.</p>
          <p>zaptap.shop</p>
        </div>
      </div>
    </footer>
  );
}
