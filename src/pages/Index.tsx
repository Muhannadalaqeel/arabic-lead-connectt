import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WaveDivider variant="primary" />
        <StatsCounter />
        <WaveDivider variant="accent" flip />
        <ContactForm />
        <WaveDivider variant="subtle" />
        <AboutSection />
        <WaveDivider variant="primary" flip />
        <PartnersMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
