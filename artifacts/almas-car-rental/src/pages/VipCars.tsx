import { Gem } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function LuxuryCars() {
  return (
    <CategoryPage
      category="luxury"
      title="الفاخرة"
      subtitle="السيارات الفاخرة لأرقى التجارب وأعلى مستويات الراحة"
      heroImage="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-gray-700"
      gradientFrom="from-gray-900/70"
      gradientTo="to-gray-800/90"
      icon={<Gem className="w-7 h-7" />}
    />
  );
}
