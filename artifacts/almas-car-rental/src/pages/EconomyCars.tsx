import { Car } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function EconomyCars() {
  return (
    <CategoryPage
      category="economy"
      title="الاقتصادية"
      subtitle="اقتصادية وموثوقة لرحلاتك اليومية بأفضل الأسعار"
      heroImage="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-green-500"
      gradientFrom="from-green-900/60"
      gradientTo="to-teal-900/80"
      icon={<Car className="w-7 h-7" />}
    />
  );
}
