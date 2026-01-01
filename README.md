# التوثيق الوطني للتدريب - صفحة الهبوط

صفحة هبوط احترافية لجمع بيانات العملاء المحتملين (Lead Generation)

## الرابط المباشر

**[demo.altawthiq.com](https://demo.altawthiq.com)**

---

## نظرة عامة

صفحة هبوط عربية متكاملة تتضمن:
- نموذج تواصل شامل لجمع بيانات العملاء
- تصميم عصري وجذاب مع دعم كامل للغة العربية (RTL)
- عرض شركاء النجاح بشكل متحرك
- تخزين البيانات في قاعدة بيانات Supabase

---

## التقنيات المستخدمة

| التقنية | الوصف |
|---------|-------|
| React 18 | مكتبة واجهات المستخدم |
| TypeScript | لغة البرمجة |
| Vite | أداة البناء |
| Tailwind CSS | تنسيق الواجهة |
| shadcn/ui | مكونات UI جاهزة |
| Supabase | قاعدة البيانات |
| Vercel | الاستضافة |

---

## التشغيل المحلي

```bash
# استنساخ المشروع
git clone https://github.com/Muhannadalaqeel/arabic-lead-connectt.git

# الدخول للمجلد
cd arabic-lead-connectt

# تثبيت المكتبات
npm install

# إنشاء ملف .env
# أضف المتغيرات التالية:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key

# تشغيل السيرفر
npm run dev
```

---

## هيكل المشروع

```
src/
├── components/          # المكونات
│   ├── Header.tsx      # الشريط العلوي
│   ├── HeroSection.tsx # القسم الترحيبي
│   ├── ContactForm.tsx # نموذج التواصل
│   ├── AboutSection.tsx# قسم لماذا نحن
│   ├── PartnersMarquee.tsx # شركاء النجاح
│   └── Footer.tsx      # التذييل
├── pages/              # الصفحات
├── integrations/       # تكامل Supabase
└── assets/             # الصور والشعارات
```

---

## النشر

المشروع مربوط مع Vercel - أي تعديل يُرفع على GitHub ينتشر تلقائياً.

```bash
git add .
git commit -m "وصف التعديل"
git push
```

---

## التواصل

- **الموقع**: [demo.altawthiq.com](https://demo.altawthiq.com)
- **البريد**: info@altawthiq.com
- **الهاتف**: +966 55 330 0598

---

## الترخيص

جميع الحقوق محفوظة © 2026 التوثيق الوطني للتدريب
