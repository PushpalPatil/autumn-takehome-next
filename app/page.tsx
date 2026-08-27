import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Sem from "@/components/Sem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Flagship from "@/components/Flagship";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Partners />
        <SocialProof />
        <Sem />
        <HowItWorks />
        <Services />
        <Flagship />
      </main>
      <Footer />
    </>
  );
}
