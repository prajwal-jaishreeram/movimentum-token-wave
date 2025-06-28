import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ProcessSection from "@/components/ProcessSection";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyMetrics from "@/components/CaseStudyMetrics";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      {/* <HeroGeometric badge="Kokonut UI" title1="Elevate Your" title2="Digital Vision" /> */}
      <ProcessSection />
      <CaseStudies />
      <CaseStudyMetrics />
      <ClientLogos />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
