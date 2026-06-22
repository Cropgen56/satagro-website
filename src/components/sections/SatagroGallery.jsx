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
import ScrollReveal from "@components/ui/ScrollReveal";

const slides = [
  {
    title: "Satellite Crop Monitoring",
    text: "Track crop health and field performance from space.",
    image: "/assets/gallery/satellite-farming.png",
    Icon: Satellite,
  },
  {
    title: "AI Farming Advisory",
    text: "Get smart recommendations powered by AI.",
    image: "/assets/gallery/ai-advisory.png",
    Icon: Sparkles,
  },
  {
    title: "Water Stress Detection",
    text: "Detect water shortage before yield is affected.",
    image: "/assets/gallery/water-stress.png",
    Icon: Droplets,
  },
  {
    title: "Pest & Disease Alerts",
    text: "Identify risks before they become outbreaks.",
    image: "/assets/gallery/pest-alert.png",
    Icon: Bug,
  },
  {
    title: "Smart Agriculture",
    text: "Transform farm management with real-time insights.",
    image: "/assets/gallery/smart-agriculture.png",
    Icon: Leaf,
  },
  {
    title: "Crop Health Mapping",
    text: "Monitor vegetation health across every field.",
    image: "/assets/gallery/crop-health.png",
    Icon: Satellite,
  },
  {
    title: "Precision Irrigation",
    text: "Optimize water usage using satellite analytics.",
    image: "/assets/gallery/precision-irrigation.png",
    Icon: Droplets,
  },
  {
    title: "Growth Stage Tracking",
    text: "Track crop growth from sowing to harvest.",
    image: "/assets/gallery/growth-stage.png",
    Icon: Leaf,
  },
  {
    title: "Field Analytics",
    text: "Understand trends and performance over time.",
    image: "/assets/gallery/field-analytics.png",
    Icon: Radar,
  },
  {
    title: "Yield Optimization",
    text: "Increase productivity with actionable insights.",
    image: "/assets/gallery/yield-optimization.png",
    Icon: Sparkles,
  },
];

const floatingIcons = [
  { Icon: Satellite, top: "16%", left: "10%", delay: 0 },
  { Icon: Radar, top: "22%", left: "84%", delay: 0.6 },
  { Icon: Leaf, top: "72%", left: "12%", delay: 1.1 },
  { Icon: Sparkles, top: "70%", left: "86%", delay: 1.6 },
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
    <section className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.2),transparent_25%)]" />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {floatingIcons.map(({ Icon, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#BDEFA4] backdrop-blur-md sm:flex"
          style={{ top, left }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 4 + i * 0.4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-4 w-4" />
        </motion.div>
      ))}

      <motion.div
        className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#9FE870]/10 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F59E0B]/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container-wrap relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold text-[#BDEFA4] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
              SatAgro AI Gallery
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              See Farming Intelligence
              <span className="block bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Through Every Frame
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-white/60 sm:text-sm">
              Large visual gallery for satellite monitoring, crop stress
              detection, and AI-powered farm insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="relative h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-white/10 shadow-[0_0_40px_rgba(159,232,112,0.16)] backdrop-blur-md sm:h-[430px] lg:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, x: 80, scale: 1.035 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 1.035 }}
                transition={slideTransition}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#07130A] via-[#07130A]/35 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 left-5 right-5 max-w-lg sm:bottom-6 sm:left-7 sm:right-auto"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#BDEFA4] backdrop-blur-md">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#9FE870]">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-extrabold uppercase tracking-tight text-white sm:text-xl">
                    {current.title}
                  </h3>
                </div>

                <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-4"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-4"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i
                    ? "w-7 bg-[#9FE870]"
                    : "w-2 bg-white/25 hover:bg-white/45"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}