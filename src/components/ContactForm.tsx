import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const teamSizeOptions = [
  "1-10",
  "11-50",
  "51-100",
  "101-200",
  "201-500",
  "501-1000",
  "+1000",
];

const interestOptions = [
  "الحلول التقنية المتكاملة",
  "استشارات الأعمال",
  "التحول الرقمي",
  "إدارة المشاريع",
  "تطوير الأنظمة",
  "الذكاء الاصطناعي",
  "أخرى",
];

// Validation schema
const leadSchema = z.object({
  firstName: z.string().trim().min(1, "الاسم الأول مطلوب").max(100),
  lastName: z.string().trim().min(1, "اسم العائلة مطلوب").max(100),
  email: z.string().trim().email("البريد الإلكتروني غير صحيح").max(255),
  phone: z.string().trim().min(1, "رقم الهاتف مطلوب").max(20),
  company: z.string().trim().min(1, "اسم الشركة مطلوب").max(200),
  jobTitle: z.string().trim().min(1, "المسمى الوظيفي مطلوب").max(100),
  teamSize: z.string().min(1, "حجم الفريق مطلوب"),
  interest: z.string().min(1, "مجال الاهتمام مطلوب"),
  notes: z.string().max(1000).optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    teamSize: "",
    interest: "",
    notes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast({
        title: "يرجى الموافقة على الشروط والأحكام",
        variant: "destructive",
      });
      return;
    }

    // Validate form data
    const validation = leadSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "خطأ في البيانات",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        work_email: formData.email.trim(),
        phone: formData.phone.trim(),
        company_name: formData.company.trim(),
        job_title: formData.jobTitle.trim(),
        team_size: formData.teamSize,
        interest_area: formData.interest,
        notes: formData.notes?.trim() || null,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سيتواصل معك فريقنا خلال يوم عمل واحد.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        teamSize: "",
        interest: "",
        notes: "",
      });
      setAgreed(false);
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="gradient-card rounded-2xl border border-border/50 p-6 md:p-8 lg:p-10 shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-medium">
                  الاسم الأول <span className="text-accent">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="مثال: أحمد"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-medium">
                  اسم العائلة <span className="text-accent">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="مثال: الصالح"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  البريد الإلكتروني للعمل <span className="text-accent">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="مثال: name@company.sa"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  رقم الهاتف <span className="text-accent">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+966*********"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium">
                  اسم الشركة <span className="text-accent">*</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="اسم الجهة أو الشركة"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-foreground font-medium">
                  المسمى الوظيفي <span className="text-accent">*</span>
                </Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  placeholder="ما هو دورك الوظيفي؟"
                  required
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <Label htmlFor="teamSize" className="text-foreground font-medium">
                  حجم الفريق <span className="text-accent">*</span>
                </Label>
                <Select
                  value={formData.teamSize}
                  onValueChange={(value) => handleInputChange("teamSize", value)}
                  required
                >
                  <SelectTrigger className="bg-input/50 border-border/50 text-foreground focus:border-primary focus:ring-primary/20">
                    <SelectValue placeholder="اختر عدد الأعضاء" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {teamSizeOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-foreground hover:bg-muted focus:bg-muted">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Area of Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-foreground font-medium">
                  مجال الاهتمام <span className="text-accent">*</span>
                </Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => handleInputChange("interest", value)}
                  required
                >
                  <SelectTrigger className="bg-input/50 border-border/50 text-foreground focus:border-primary focus:ring-primary/20">
                    <SelectValue placeholder="اختر المجال" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {interestOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-foreground hover:bg-muted focus:bg-muted">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2 mt-5 md:mt-6">
              <Label htmlFor="notes" className="text-foreground font-medium">
                ملاحظات إضافية
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="هل هناك تفاصيل أو أهداف محددة ترغب بمشاركتها؟"
                rows={4}
                className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mt-6">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                أوافق على{" "}
                <a href="#" className="text-primary hover:text-primary/80 underline underline-offset-2">
                  الشروط والأحكام
                </a>
                {" "}و{" "}
                <a href="#" className="text-primary hover:text-primary/80 underline underline-offset-2">
                  سياسة الخصوصية
                </a>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-xl shadow-glow transition-all duration-300 hover:shadow-lg disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  جارٍ الإرسال...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  احجز عرضًا توضيحيًا
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
