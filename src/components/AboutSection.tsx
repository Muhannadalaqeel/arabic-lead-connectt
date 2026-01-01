import { Handshake, Target, Users } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "شراكة حقيقية",
    description: "نحن لا نقدم خدمة فحسب، بل نبني علاقة شراكة طويلة المدى مع عملائنا لضمان تحقيق أهدافهم.",
  },
  {
    icon: Target,
    title: "حلول مخصصة",
    description: "نصمم حلولًا تتناسب مع احتياجات مؤسستك الفريدة، لأن كل عميل يستحق تجربة مصممة خصيصًا له.",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: "فريق من الخبراء المتخصصين جاهز لدعمك في كل خطوة من رحلة التحول والنمو.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              لماذا تختارنا كشريك نجاحك؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              نؤمن بأن النجاح الحقيقي يأتي من خلال الشراكة الفعّالة والتفهم العميق لاحتياجات عملائنا
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-2xl gradient-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-glow opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
