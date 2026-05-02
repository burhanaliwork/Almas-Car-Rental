import { useEffect } from "react";
import { X, Zap, Settings, Armchair, Shield } from "lucide-react";
import { CarSpecs } from "@/data/cars";

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  specs: CarSpecs;
}

export default function SpecsModal({ isOpen, onClose, carName, specs }: SpecsModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-card-border rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-lg font-black text-foreground">مواصفات السيارة</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{carName}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-muted hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">المحرك والأداء</p>
              <p className="text-sm text-foreground leading-relaxed">{specs.engine}</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">نظام نقل الحركة</p>
              <p className="text-sm text-foreground leading-relaxed">{specs.transmission}</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
              <Armchair className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">التصميم والراحة الداخلية</p>
              <p className="text-sm text-foreground leading-relaxed">{specs.interior}</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">مواصفات الأمان</p>
              <p className="text-sm text-foreground leading-relaxed">{specs.safety}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
