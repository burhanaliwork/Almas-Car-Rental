import { Link } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background" dir="rtl" data-testid="page-not-found">
      <div className="text-center px-4">
        <p className="text-8xl font-black text-amber-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-2">الصفحة غير موجودة</h1>
        <p className="text-muted-foreground mb-8">لا يمكن العثور على الصفحة التي تبحث عنها</p>
        <Link href="/">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all cursor-pointer">
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </span>
        </Link>
      </div>
    </div>
  );
}
