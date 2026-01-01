import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const rotatingWords = [
  "رحلة النجاح",
  "التطور المهني",
  "التميز التدريبي",
  "مستقبلك الآن",
];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            جاهز لتبدأ{' '}
            <span className="relative inline-block pb-3">
              <span 
                className={`text-gradient-primary inline-block transition-all duration-400 ease-in-out ${
                  isAnimating 
                    ? 'opacity-0 transform -translate-y-2' 
                    : 'opacity-100 transform translate-y-0'
                }`}
              >
                {rotatingWords[currentWordIndex]}
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full" />
            </span>
            {' '}مع فريقك؟
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            اكتشف كيف يمكن لحلولنا المتكاملة أن تُحدث فرقًا حقيقيًا في مؤسستك وترفع من مستوى الأداء والإنتاجية
          </p>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-5 py-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 text-accent">
              <Clock className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">سيتواصل معك أحد أعضاء فريقنا خلال يوم عمل واحد</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
