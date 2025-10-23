
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import AgentsList from "@/components/landing/AgentsList";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#0A1F44] to-[#142F66]">
      <Hero />
      <HowItWorks />
      <AgentsList />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
