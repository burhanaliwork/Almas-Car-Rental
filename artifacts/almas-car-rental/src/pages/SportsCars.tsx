import { Zap } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function SportsCars() {
  return (
    <CategoryPage
      category="sports"
      title="الرياضية"
      subtitle="أداء استثنائي وسرعات خيالية لعشاق القيادة الحقيقيين"
      heroImage="https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-red-500"
      gradientFrom="from-red-900/60"
      gradientTo="to-orange-900/80"
      icon={<Zap className="w-7 h-7" />}
    />
  );
}
