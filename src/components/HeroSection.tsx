import { MessageCircle, Clock } from "lucide-react";

const HeroSection = () => {
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
            <span className="text-gradient-primary">رحلة النجاح</span>
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
