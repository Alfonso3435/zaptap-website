import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Reputation } from "@/components/Reputation";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CustomOrder } from "@/components/CustomOrder";
import { Differentiators } from "@/components/Differentiators";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProblemSolution />
        <Reputation />
        <ProductCatalog />
        <CustomOrder />
        <Differentiators />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
