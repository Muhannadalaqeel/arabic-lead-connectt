import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsCounter />
        <ContactForm />
        <AboutSection />
        <PartnersMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
