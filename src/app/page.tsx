import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Stakes from "@/components/Stakes";
import ProductCatalog from "@/components/ProductCatalog";
import Guarantee from "@/components/Guarantee";
import NinetySecondWindow from "@/components/NinetySecondWindow";
import ZeroStepCapture from "@/components/ZeroStepCapture";
import FreeMockup from "@/components/FreeMockup";
import WhyNotCheap from "@/components/WhyNotCheap";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * SECTION ORDER — shop-first.
 *
 * The first four sections exist to get a ready buyer to the catalog in as
 * little scrolling as possible: hook, proof it works, why it matters, buy.
 * Everything after the catalog is for the reader who scrolled past it without
 * buying, ordered by what most likely stopped them.
 *
 *   Hero ............... hook: it wasn't your service
 *   Demo ............... the 10-second proof, moved up front
 *   Stakes ............. B1  reviews decide whether I'm found at all
 *   ProductCatalog ..... the offer
 *   Guarantee .......... risk on the design is removed
 *   NinetySecondWindow . B3  THE HINGE: the failure was structural, not personal
 *   ZeroStepCapture .... B4  one step, and it lives where the moment happens
 *   FreeMockup ......... lead capture for the ones who won't buy today
 *   WhyNotCheap ........ B5  cheap cards fail predictably
 *   FAQ ................ residual objections, incl. Google's rules
 *   Contact ............ B6  a real, local person stands behind it
 *
 * Removed: ReviewDebt and WhoItsFor. Both argued well but sat between the
 * reader and the catalog, and the argument survives without them.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Demo />
        <Stakes />
        <ProductCatalog />
        <Guarantee />
        <NinetySecondWindow />
        <ZeroStepCapture />
        <FreeMockup />
        <WhyNotCheap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
