import { Gem } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function VipCars() {
  return (
    <CategoryPage
      category="vip"
      title="VIP"
      subtitle="الفخامة والرقي لكبار الشخصيات في أبهى صورها"
      heroImage="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-purple-500"
      gradientFrom="from-purple-900/60"
      gradientTo="to-pink-900/80"
      icon={<Gem className="w-7 h-7" />}
    />
  );
}
