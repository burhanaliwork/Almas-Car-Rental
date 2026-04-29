import { useState } from "react";
import { cars, Car } from "@/data/cars";
import CarCard from "@/components/CarCard";
import BookingModal from "@/components/BookingModal";
import { Filter, SlidersHorizontal } from "lucide-react";

interface CategoryPageProps {
  category: Car["category"];
  title: string;
  subtitle: string;
  heroImage: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

export default function CategoryPage({
  category,
  title,
  subtitle,
  heroImage,
  gradientFrom,
  gradientTo,
  icon,
}: CategoryPageProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string | undefined>();
  const [sortBy, setSortBy] = useState<"rating">("rating");

  const filteredCars = cars
    .filter((c) => c.category === category)
    .sort((a, b) => {
      return b.rating - a.rating;
    });

  const handleBook = (carName: string) => {
    setSelectedCar(carName);
    setBookingOpen(true);
  };

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="relative h-64 lg:h-80 flex items-end overflow-hidden" data-testid={`section-hero-${category}`}>
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-b ${gradientFrom} ${gradientTo}`} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-white" data-testid={`text-title-${category}`}>
                السيارات {title}
              </h1>
              <p className="text-white/80 text-sm mt-1">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-card border-b border-border" data-testid="info-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-6">
          <span className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{filteredCars.length}</span> سيارة متاحة
          </span>
          <div className="flex items-center gap-2 mr-auto">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">ترتيب:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm bg-background border border-input rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
              data-testid="select-sort"
            >
              <option value="rating">الأعلى تقييماً</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <section className="py-12 bg-background" data-testid={`section-cars-${category}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                name={car.name}
                image={car.image}
                seats={car.seats}
                fuelType={car.fuelType}
                speed={car.speed}
                rating={car.rating}
                badge={car.badge}
                badgeColor={car.badgeColor}
                colors={car.colors}
                specs={car.specs}
                images={car.images}
                onBook={() => handleBook(car.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setSelectedCar(undefined);
        }}
        carName={selectedCar}
      />
    </main>
  );
}
