import { Users } from "lucide-react";
import CategoryPage from "./CategoryPage";

export default function FamilyCars() {
  return (
    <CategoryPage
      category="family"
      title="العائلية"
      subtitle="واسعة ومريحة وآمنة لرحلات عائلتك الكريمة"
      heroImage="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&auto=format&fit=crop&q=80"
      accentColor="text-blue-500"
      gradientFrom="from-blue-900/60"
      gradientTo="to-cyan-900/80"
      icon={<Users className="w-7 h-7" />}
    />
  );
}
