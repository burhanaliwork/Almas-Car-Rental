import { Car } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function EconomyCars() {
  return (
    <CategoryPage
      category="economy"
      title="السيارات الاقتصادية"
      subtitle="سيارات اقتصادية أنيقة ومريحة تناسب جميع الرحلات اليومية"
      heroImage="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-gray-700"
      gradientFrom="from-gray-800/60"
      gradientTo="to-gray-900/80"
      icon={<Car className="w-7 h-7" />}
    />
  );
}
