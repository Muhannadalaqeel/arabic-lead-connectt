import { useEffect, useState, useRef } from "react";
import { GraduationCap, BookOpen, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: 50000,
    suffix: "+",
    label: "مشارك",
  },
  {
    icon: BookOpen,
    value: 40000,
    suffix: "+",
    label: "برنامج تدريبي",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "مدرب محترف",
  },
  {
    icon: Clock,
    value: 45000,
    suffix: "+",
    label: "ساعة تدريبية",
  },
  {
    icon: Award,
    value: 13,
    suffix: "+",
    label: "سنة خبرة",
  },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2500, isVisible);

  return (
    <div
      className="group relative p-6 md:p-8 rounded-2xl gradient-card border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-glow opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon with 3D effect */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500" />
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 tabular-nums">
          <span className="text-primary">{count.toLocaleString('en-US')}</span>
          <span className="text-accent">{stat.suffix}</span>
        </div>

        {/* Label */}
        <p className="text-muted-foreground text-sm md:text-base font-medium">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Floating orbs for 3D effect */}
      <div className="absolute top-10 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            إنجازاتنا <span className="text-accent">بالأرقام</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            أرقام تعكس ثقة عملائنا وجودة خدماتنا على مدار السنوات
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

