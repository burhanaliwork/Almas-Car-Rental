import { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  images: string[];
}

export default function PhotoGalleryModal({ isOpen, onClose, carName, images }: PhotoGalleryModalProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isOpen) setCurrent(0);
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

  const prev = () => setCurrent((p) => (p > 0 ? p - 1 : images.length - 1));
  const next = () => setCurrent((p) => (p < images.length - 1 ? p + 1 : 0));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">{carName}</h2>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">{current + 1} / {images.length}</span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="relative bg-gray-950 flex items-center justify-center" style={{ minHeight: 380 }}>
          <img
            key={current}
            src={images[current]}
            alt={`${carName} - ${current + 1}`}
            className="max-h-[420px] w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto bg-black/60">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-16 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-white" : "border-white/20 opacity-60 hover:opacity-90"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
