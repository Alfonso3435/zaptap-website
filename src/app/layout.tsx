import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaptap.shop"),
  title: "ZapTap — Custom NFC Google review cards, one-time payment",
  description:
    "Custom-branded NFC review cards from $19.99. Free design, backup QR, free chip replacement, free shipping. No subscription. Built in Sammamish, WA.",
  openGraph: {
    title: "ZapTap — Custom NFC Google review cards",
    description:
      "Your happy customers meant to leave you a review. One tap, inside the 90-second window. One payment, no subscription.",
    url: "https://zaptap.shop",
    siteName: "ZapTap",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
