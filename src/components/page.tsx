import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stakes from "@/components/Stakes";
import ReviewDebt from "@/components/ReviewDebt";
import NinetySecondWindow from "@/components/NinetySecondWindow";
import ZeroStepCapture from "@/components/ZeroStepCapture";
import WhoItsFor from "@/components/WhoItsFor";
import WhyNotCheap from "@/components/WhyNotCheap";
import ProductCatalog from "@/components/ProductCatalog";
import Guarantee from "@/components/Guarantee";
import FreeMockup from "@/components/FreeMockup";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * SECTION ORDER = THE BELIEF CHAIN. Do not reorder without checking which
 * belief you are stranding.
 *
 *   Hero ............... hook: it wasn't your service
 *   Stakes ............. B1  reviews decide whether I'm found at all
 *   ReviewDebt ......... B2  I'm owed reviews I never collected
 *   NinetySecondWindow . B3  THE HINGE: the failure was structural, not personal
 *   ZeroStepCapture .... B4  one step, and it lives where the moment happens
 *   WhoItsFor .......... B4b it works in my trade specifically
 *   WhyNotCheap ........ B5  cheap cards fail predictably
 *   ProductCatalog ..... the offer
 *   Guarantee .......... B14, partial: covers "I risk hating the design," not
 *                        "I risk it not working" — no performance guarantee
 *                        as of the design-guarantee rewrite
 *   FreeMockup ......... lead capture for the ones who won't buy today
 *   FAQ ................ residual objections, incl. Google's rules
 *   Contact ............ B6  a real, local person stands behind it
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stakes />
        <ReviewDebt />
        <NinetySecondWindow />
        <ZeroStepCapture />
        <WhoItsFor />
        <WhyNotCheap />
        <ProductCatalog />
        <Guarantee />
        <FreeMockup />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
