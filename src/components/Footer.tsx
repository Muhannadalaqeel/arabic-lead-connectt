import { Mail, Phone } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={companyLogo} 
              alt="شعار التوثيق الوطني للتدريب" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm text-center md:text-right max-w-xs">
              شريكك الموثوق في رحلة التحول والنمو
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:info@company.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">info@company.com</span>
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+966500000000"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm" dir="ltr">+966 50 000 0000</span>
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} التوثيق الوطني للتدريب
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
