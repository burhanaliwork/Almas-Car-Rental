import { Link } from "wouter";
import { Diamond, Phone, MapPin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md">
                <Diamond className="w-6 h-6 text-gray-900 fill-gray-900" />
              </div>
              <div className="leading-tight">
                <p className="text-xl font-black text-white">الماس</p>
                <p className="text-sm text-gray-400 font-medium">لتأجير السيارات</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm mb-6">
              نقدم لكم أفضل تجربة لتأجير السيارات في الموصل والعراق. أسطول متنوع من السيارات بأسعار تنافسية وخدمة على مدار الساعة.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/almas_carrental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-white hover:text-gray-900 transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-gray-700">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/sports", label: "السيارات الرياضية" },
                { href: "/economy", label: "السيارات الاقتصادية" },
                { href: "/family", label: "السيارات العائلية" },
                { href: "/vip", label: "سيارات VIP" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-gray-700">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">+964 773 525 6513</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">info@almas-rental.iq</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">الموصل – حي البريد، محافظة نينوى</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} الماس لتأجير السيارات. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
