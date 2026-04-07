import { Gem } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function LuxuryCars() {
  return (
    <CategoryPage
      category="luxury"
      title="الفاخرة"
      subtitle="السيارات الفاخرة لأرقى التجارب وأعلى مستويات الراحة"
      heroImage="/hero-luxury.jpg"
      accentColor="text-gray-700"
      gradientFrom="from-gray-900/70"
      gradientTo="to-gray-800/90"
      icon={<Gem className="w-7 h-7" />}
    />
  );
}
