import Hero from "@/app/components/home/Hero";
import Header from "@/app/components/layout/Header";
import AboutMe from "@/app/components/home/AboutMe";
import Services from "@/app/components/home/Services";
import Pricing from "@/app/components/home/Pricing";
import Testimonials from "@/app/components/home/Testimonials";
import QuoteSection from "./components/home/QuoteSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Header />
      <Hero />

      <Services />
      <Pricing />
       <AboutMe />
      <Testimonials />
      <QuoteSection />
      <ContactSection id="contact" />
    </main>
  );
}
