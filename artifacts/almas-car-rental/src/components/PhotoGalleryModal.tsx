import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  images: string[];
}

export default function PhotoGalleryModal({ isOpen, onClose, carName, images }: PhotoGalleryModalProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) setCurrent(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p > 0 ? p - 1 : images.length - 1));
      if (e.key === "ArrowLeft") setCurrent((p) => (p < images.length - 1 ? p + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      // RTL: swipe right = previous, swipe left = next
      if (dx > 0) {
        setCurrent((p) => (p > 0 ? p - 1 : images.length - 1));
      } else {
        setCurrent((p) => (p < images.length - 1 ? p + 1 : 0));
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black">
          <h2 className="text-white font-bold text-lg truncate">{carName}</h2>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-white/70 text-sm font-bold">{current + 1} / {images.length}</span>
            <button
              onClick={onClose}
              aria-label="إغلاق"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-colors active:scale-95"
            >
              <X className="w-5 h-5" strokeWidth={3} />
              <span>إغلاق</span>
            </button>
          </div>
        </div>

        {/* Main image with swipe */}
        <div
          className="relative bg-gray-950 flex items-center justify-center select-none"
          style={{ minHeight: 380, touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={current}
            src={images[current]}
            alt={`${carName} - ${current + 1}`}
            className="max-h-[420px] w-full object-contain pointer-events-none"
            draggable={false}
          />
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full pointer-events-none">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all ${
                    i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Hint text */}
        {images.length > 1 && (
          <div className="text-center text-white/60 text-xs py-2 bg-black border-t border-white/5">
            اسحب يميناً أو يساراً لتغيير الصورة
          </div>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto bg-black/80">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-16 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-white" : "border-white/20 opacity-60 hover:opacity-90"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
