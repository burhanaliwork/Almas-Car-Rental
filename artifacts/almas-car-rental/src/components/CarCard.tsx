import { useState } from "react";
import { Users, Fuel, Star, Calendar, Check, ClipboardList } from "lucide-react";
import { CarSpecs } from "@/data/cars";
import SpecsModal from "./SpecsModal";

interface CarCardProps {
  name: string;
  image: string;
  seats: number;
  fuelType: string;
  speed: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
  colors?: string[];
  specs?: CarSpecs;
  onBook?: () => void;
}

const colorLabels: Record<string, string> = {
  "#ffffff": "أبيض",
  "#1a1a1a": "أسود",
};

export default function CarCard({
  name,
  image,
  seats,
  fuelType,
  rating,
  badge,
  badgeColor = "bg-gray-900",
  colors,
  specs,
  onBook,
}: CarCardProps) {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        data-testid={`card-car-${name}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-72">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-testid={`img-car-${name}`}
          />
          {badge && (
            <span className={`absolute top-3 right-3 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`} data-testid={`badge-car-${name}`}>
              {badge}
            </span>
          )}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 text-gray-700 fill-gray-700" />
            <span className="text-xs font-bold text-gray-800">{rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-foreground mb-4 leading-snug" data-testid={`text-car-name-${name}`}>
            {name}
          </h3>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-muted/60">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{seats} مقاعد</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-muted/60">
              <Fuel className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{fuelType}</span>
            </div>
          </div>

          {/* Colors */}
          {colors && colors.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-muted-foreground font-medium">الألوان المتوفرة:</span>
              <div className="flex items-center gap-1.5">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="relative group/color"
                    title={colorLabels[color] || color}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      <Check className="w-2.5 h-2.5 text-green-500 opacity-0 group-hover/color:opacity-100 transition-opacity" style={{ color: color === "#ffffff" ? "#16a34a" : "#86efac" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBook?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white font-bold text-sm transition-all duration-200 shadow hover:shadow-md active:scale-95"
              data-testid={`button-book-${name}`}
            >
              <Calendar className="w-4 h-4" />
              احجز الآن
            </button>

            {specs && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSpecsOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm transition-all duration-200 border border-gray-200"
                data-testid={`button-specs-${name}`}
              >
                <ClipboardList className="w-4 h-4" />
                مواصفات السيارة
              </button>
            )}
          </div>
        </div>
      </div>

      {specs && (
        <SpecsModal
          isOpen={specsOpen}
          onClose={() => setSpecsOpen(false)}
          carName={name}
          specs={specs}
        />
      )}
    </>
  );
}
