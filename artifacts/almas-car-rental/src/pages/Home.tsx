import { Link } from "wouter";
import { Shield, Clock, MapPin, Star, ChevronLeft, Zap, Users, Gem, Car, Phone, CheckCircle, Award } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647735256513";

const features = [
  {
    icon: Shield,
    title: "ضمان الجودة",
    desc: "جميع سياراتنا مؤمنة بالكامل وتخضع لفحص دوري",
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: Clock,
    title: "خدمة 24/7",
    desc: "متاحون على مدار الساعة لخدمتك في أي وقت",
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: MapPin,
    title: "توصيل مجاني",
    desc: "نوصل السيارة لأي مكان تختاره في المدينة",
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: Star,
    title: "أسعار تنافسية",
    desc: "أفضل الأسعار مع أعلى مستويات الجودة والراحة",
    color: "bg-gray-100 text-gray-700",
  },
];

const categories = [
  {
    href: "/sports",
    label: "السيارات الرياضية",
    icon: Zap,
    desc: "أداء استثنائي وسرعات خيالية لعشاق القيادة",
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&auto=format&fit=crop&q=80",
    gradient: "from-gray-900 to-gray-700",
    startPrice: 100000,
  },
  {
    href: "/economy",
    label: "السيدات الاقتصادية",
    icon: Car,
    desc: "سيارات أنيقة واقتصادية مريحة لجميع المناسبات",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&auto=format&fit=crop&q=80",
    gradient: "from-gray-800 to-gray-600",
    startPrice: 30000,
  },
  {
    href: "/family",
    label: "السيارات العائلية",
    icon: Users,
    desc: "واسعة ومريحة تسع لكل العائلة",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80",
    gradient: "from-gray-900 to-gray-700",
    startPrice: 90000,
  },
  {
    href: "/luxury",
    label: "السيارات الفاخرة",
    icon: Gem,
    desc: "الفخامة والرقي لأعلى مستويات الراحة والتميز",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=80",
    gradient: "from-gray-900 to-gray-600",
    startPrice: 250000,
  },
];

const testimonials = [
  {
    name: "محمد الغامدي",
    role: "رجل أعمال",
    text: "خدمة ممتازة وسيارات نظيفة ومريحة. أنصح الجميع بالتعامل مع الماس.",
    rating: 5,
    avatar: "م",
  },
  {
    name: "سارة العتيبي",
    role: "مسافرة دائمة",
    text: "أحسن شركة تأجير تعاملت معها. التوصيل للمطار في الوقت المحدد وبدون تأخير.",
    rating: 5,
    avatar: "س",
  },
  {
    name: "أحمد الشهري",
    role: "مهندس",
    text: "أسعارهم معقولة جداً وخيارات السيارات متنوعة. سأستمر بالتعامل معهم.",
    rating: 4,
    avatar: "أ",
  },
];

const stats = [
  { value: "+5000", label: "عميل سعيد" },
  { value: "+99", label: "سيارة متاحة" },
  { value: "+3", label: "سنوات خبرة" },
  { value: "4.9", label: "تقييم العملاء" },
];

export default function Home() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0" />
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6" data-testid="badge-hero">
              <Star className="w-3.5 h-3.5 fill-white" />
              الأول في تأجير السيارات في الموصل
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" data-testid="text-hero-title">
              تأجير سيارات
              <span className="block text-gray-300">
                فاخرة وموثوقة
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed" data-testid="text-hero-desc">
              أسطول ضخم من السيارات الرياضية والسيدات الاقتصادية والعائلية والفاخرة. احجز الآن واستمتع بأفضل تجربة قيادة في الموصل والعراق.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-900 font-black text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                data-testid="button-hero-book"
              >
                احجز سيارتك الآن
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold text-base transition-all duration-200"
                data-testid="link-hero-call"
              >
                <Phone className="w-5 h-5" />
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-10" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label}`}>
                <p className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background" data-testid="section-location">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              تجدنا هنا
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3" data-testid="text-location-title">
              موقعنا
            </h2>
            <p className="text-muted-foreground text-lg">
              موقعنا في الموصل – حي البريد
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-black p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg leading-tight">شركة الماس لتأجير السيارات</h3>
                  <p className="text-gray-300 text-sm mt-0.5">الموصل – حي البريد، محافظة نينوى</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/95PH%2BHJW+%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%B3+%D9%84%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/@36.3864177,43.177547,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm transition-all duration-200 shadow whitespace-nowrap shrink-0"
                data-testid="link-open-maps"
              >
                <MapPin className="w-4 h-4" />
                فتح الموقع على Google Maps
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x-reverse sm:divide-x border-t border-border">
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">العنوان</p>
                  <p className="text-sm font-semibold text-foreground">الموصل – حي البريد</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">للتواصل</p>
                  <p className="text-sm font-semibold text-foreground">+964 773 525 6513</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ساعات العمل</p>
                  <p className="text-sm font-semibold text-foreground">24 ساعة / 7 أيام</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gray-50" data-testid="section-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4" data-testid="text-categories-title">
              اختر فئة السيارة
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              لدينا تشكيلة واسعة تناسب جميع احتياجاتك وميزانيتك
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} data-testid={`link-category-${cat.label}`}>
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-70`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <cat.icon className="w-10 h-10 mb-2 drop-shadow-lg" />
                      <h3 className="text-xl font-black drop-shadow-lg">{cat.label}</h3>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground mb-2">{cat.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">يبدأ من</span>
                      <span className="font-black text-gray-900 text-base">
                        {cat.startPrice.toLocaleString("ar-SA")} دينار/يوم
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-gray-800 font-bold text-sm group-hover:gap-2 transition-all">
                      <span>استعرض السيارات</span>
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              لماذا تختار الماس؟
            </h2>
            <p className="text-muted-foreground">
              نحن ملتزمون بتقديم أفضل خدمة تأجير سيارات في الموصل والعراق
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-card border border-card-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                data-testid={`feature-${feat.title}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.color}`}>
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              كيف يعمل الحجز؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "اختر سيارتك", desc: "تصفح أسطولنا المتنوع واختر السيارة المناسبة لك" },
              { step: "2", title: "حدد المواعيد", desc: "اختر تاريخ الاستلام والتسليم ومكان استلام السيارة" },
              { step: "3", title: "استمتع بالرحلة", desc: "نوصل لك السيارة وتبدأ مغامرتك على الطريق" },
            ].map((item) => (
              <div key={item.step} className="text-center" data-testid={`step-${item.step}`}>
                <div className="w-16 h-16 rounded-full bg-black text-white font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-black text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 inline-block"
              data-testid="button-cta-book"
            >
              احجز الآن
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">آراء عملائنا</h2>
            <p className="text-gray-400">ماذا يقول عملاؤنا عن تجربتهم معنا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            جاهز لتجربة قيادة استثنائية؟
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            احجز سيارتك الآن واستمتع بأفضل العروض والأسعار
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 font-black text-base transition-all duration-200 shadow-lg active:scale-95"
              data-testid="button-final-cta"
            >
              احجز الآن
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              "أسعار تنافسية",
              "توصيل مجاني",
              "خدمة 24/7",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
