import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Satellite,
  Radar,
  Leaf,
  Droplets,
  Bug,
} from "lucide-react";

const slides = [
  { title: "Satellite Crop Monitoring", image: "/assets/gallery/satellite-farming.png", Icon: Satellite },
  { title: "AI Farming Advisory", image: "/assets/gallery/ai-advisory.png", Icon: Sparkles },
  { title: "Water Stress Detection", image: "/assets/gallery/water-stress.png", Icon: Droplets },
  { title: "Pest & Disease Alerts", image: "/assets/gallery/pest-alert.png", Icon: Bug },
  { title: "Smart Agriculture", image: "/assets/gallery/smart-agriculture.png", Icon: Leaf },
  { title: "Crop Health Mapping", image: "/assets/gallery/crop-health.png", Icon: Satellite },
  { title: "Precision Irrigation", image: "/assets/gallery/precision-irrigation.png", Icon: Droplets },
  { title: "Growth Stage Tracking", image: "/assets/gallery/growth-stage.png", Icon: Leaf },
  { title: "Field Analytics", image: "/assets/gallery/field-analytics.png", Icon: Radar },
  { title: "Yield Optimization", image: "/assets/gallery/yield-optimization.png", Icon: Sparkles },
];

const slideTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export default function SatagroGallery() {
  const [active, setActive] = useState(0);
  const current = slides[active];
  const Icon = current.Icon;

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07130A] text-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={current.image}
          src={current.image}
          alt={current.title}
          initial={{ opacity: 0, x: 90, scale: 1.04 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -90, scale: 1.04 }}
          transition={slideTransition}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#07130A]/90 via-[#07130A]/25 to-[#07130A]/25" />

      <div className="absolute left-0 right-0 top-0 z-20 px-4 pt-8 text-center sm:pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[11px] font-semibold text-[#BDEFA4] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
          SatAgro AI Gallery
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 left-5 right-5 z-20 flex items-center gap-3 sm:bottom-24 sm:left-10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-[#BDEFA4] backdrop-blur-md">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <span className="text-xs font-extrabold text-[#9FE870]">
              {String(active + 1).padStart(2, "0")}
            </span>

            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              {current.title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur transition hover:bg-black/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur transition hover:bg-black/40"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-wrap justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              active === i
                ? "w-8 bg-[#9FE870]"
                : "w-2 bg-white/35 hover:bg-white/55"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}