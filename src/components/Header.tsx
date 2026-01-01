import { Button } from "@/components/ui/button";
import companyLogo from "@/assets/company-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={companyLogo} 
              alt="شعار الشركة" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>

          {/* CTA Button */}
          <Button
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 md:px-6 py-2 rounded-lg shadow-glow transition-all duration-300 hover:shadow-lg"
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            احجز عرضًا توضيحيًا
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
