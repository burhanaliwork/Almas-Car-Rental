import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647735256513";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/sports", label: "الرياضية" },
  { href: "/economy", label: "الاقتصادية" },
  { href: "/family", label: "العائلية" },
  { href: "/vip", label: "VIP" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/logo-gem.png"
                alt="الماس لتأجير السيارات"
                className="w-14 h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <div className="leading-tight">
                <p className="text-base lg:text-lg font-black text-foreground tracking-tight">الماس</p>
                <p className="text-xs text-muted-foreground font-medium">لتأجير السيارات</p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`nav-link-${link.label}`}>
                <span
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    location === link.href
                      ? "bg-gray-100 text-gray-900 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* WhatsApp + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-black hover:bg-gray-800 text-white font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا</span>
            </a>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-menu-toggle"
              aria-label="toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background" data-testid="nav-mobile">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`mobile-nav-link-${link.label}`}>
                <span
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    location === link.href
                      ? "bg-gray-100 text-gray-900"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-black text-white font-bold text-sm"
              data-testid="mobile-link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
