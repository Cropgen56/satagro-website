import { ArrowRight, Satellite, Activity, Droplets, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import IndexPill from "@components/ui/IndexPill";

const ticker = [
  "⚡ NDVI Alert — Farm #A24, Punjab — 0.42 (Low)",
  "✅ EVI Update — 0.68 Normal — Maharashtra",
  "⚠️ Pest Risk: High — Aphid detected — UP",
  "💧 NDWI: −0.12 Drought stress — Rajasthan",
  "🌿 LAI: 3.8 Healthy — Karnataka",
  "📡 New scan ready — Farm #B17 — Haryana",
];

const appUrl = "https://app.satagro.ai";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Animated background grid */}
      <div className="hero-grid-bg pointer-events-none absolute inset-0" />

      {/* Soft radial glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-brand-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-ember-accent/10 blur-[100px]" />

      <div className="container-wrap relative grid min-h-screen items-center gap-10 pb-16 pt-24 lg:grid-cols-5 lg:pb-24">
        {/* Left: Content */}
        <motion.div
          className="space-y-7 lg:col-span-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/8 px-4 py-2 text-sm font-semibold text-brand-hover"
          >
            <Satellite className="h-4 w-4 animate-spin-slow" />
            Powered by Sentinel-2 &amp; Landsat-8 Satellites
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ember-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Monitor Every Crop.
            <br />
            <span className="gradient-text">From Space.</span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-lg leading-relaxed text-zinc-500"
          >
            SatAgro.AI delivers real-time satellite imagery and AI-powered advisory
            trusted by <strong className="text-ember-text">2,400+ farmers</strong> across{" "}
            <strong className="text-ember-text">12+ states</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href={appUrl} className="btn-primary px-7 py-3.5 text-base">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="btn-secondary px-7 py-3.5 text-base">
              Book a Demo
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.p variants={itemVariants} className="text-xs text-zinc-400">
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>

          {/* Live ticker */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-full border border-app-border bg-white/80 backdrop-blur-sm"
          >
            <div className="mask-fade-x">
              <div className="animate-ticker flex w-max gap-10 py-2.5 pl-6 text-sm text-zinc-500">
                {[...ticker, ...ticker].map((item, index) => (
                  <span key={index} className="shrink-0">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Live Monitor Widget */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl border border-app-border bg-white/80 p-5 shadow-glow-md backdrop-blur-sm">
            {/* Live dot */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                SatAgro.AI — Live Monitor
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-status-green/10 px-2.5 py-1 text-xs font-semibold text-status-green">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-green" />
                LIVE
              </span>
            </div>

            {/* Satellite heatmap grid */}
            <div className="relative overflow-hidden rounded-xl border border-app-border bg-app-panel">
              {/* scan line overlay */}
              <div className="pointer-events-none absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent animate-scan-line" style={{ position: "absolute", top: "0%" }} />
              <div className="grid grid-cols-16 gap-0.5 p-2" style={{ gridTemplateColumns: "repeat(16, 1fr)" }}>
                {Array.from({ length: 112 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[1px] ${
                      i % 11 === 0
                        ? "bg-red-500/70"
                        : i % 7 === 0
                          ? "bg-status-orange/80"
                          : i % 5 === 0
                            ? "bg-status-green/60"
                            : "bg-status-green"
                    }`}
                    style={{ opacity: 0.4 + Math.random() * 0.6 }}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-status-green" /> Healthy</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-status-orange" /> Moderate</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-red-500/70" /> Stressed</span>
            </div>

            {/* Index pills */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <IndexPill name="NDVI" value="0.74" status="healthy" />
              <IndexPill name="EVI"  value="0.61" status="healthy" />
              <IndexPill name="NDWI" value="0.18" status="moderate" />
              <IndexPill name="LAI"  value="3.2"  status="healthy" />
            </div>

            {/* Last updated */}
            <p className="mt-3 text-right text-xs text-zinc-400">Updated 12 min ago · Farm #A24, Punjab</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-zinc-300 pt-1.5">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-brand-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}