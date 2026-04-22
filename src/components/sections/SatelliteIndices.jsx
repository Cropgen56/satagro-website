import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const indices = [
  {
    id: "NDVI",
    name: "NDVI",
    full: "Normalized Difference Vegetation Index",
    desc: "Measures vegetation density and health. High values (0.6–0.9) mean lush, healthy crops. Values below 0.3 signal bare soil or severe stress.",
    colors: ["bg-red-900", "bg-yellow-400", "bg-lime-400", "bg-green-500", "bg-green-700"],
    distribution: [2, 5, 20, 50, 23],
  },
  {
    id: "EVI",
    name: "EVI",
    full: "Enhanced Vegetation Index",
    desc: "An improved vegetation index that reduces atmospheric influence and canopy background noise, giving more accurate readings in dense crop areas.",
    colors: ["bg-red-800", "bg-orange-400", "bg-yellow-300", "bg-lime-500", "bg-emerald-600"],
    distribution: [3, 8, 18, 45, 26],
  },
  {
    id: "NDWI",
    name: "NDWI",
    full: "Normalized Difference Water Index",
    desc: "Detects water content in crops and soil. Negative values indicate drought stress; values above 0.2 show adequate soil moisture.",
    colors: ["bg-orange-600", "bg-yellow-400", "bg-sky-300", "bg-blue-400", "bg-blue-700"],
    distribution: [10, 20, 30, 25, 15],
  },
  {
    id: "NDRE",
    name: "NDRE",
    full: "Normalized Difference Red Edge",
    desc: "Sensitive to chlorophyll content changes. Excellent for detecting early nutrient deficiencies like nitrogen stress before they become severe.",
    colors: ["bg-red-700", "bg-pink-400", "bg-violet-400", "bg-green-400", "bg-emerald-700"],
    distribution: [5, 12, 25, 40, 18],
  },
  {
    id: "SAVI",
    name: "SAVI",
    full: "Soil Adjusted Vegetation Index",
    desc: "Accounts for soil brightness variation — ideal for early crop growth stages when partial soil exposure is common.",
    colors: ["bg-zinc-500", "bg-yellow-500", "bg-lime-400", "bg-green-500", "bg-green-800"],
    distribution: [8, 15, 30, 35, 12],
  },
  {
    id: "LAI",
    name: "LAI",
    full: "Leaf Area Index",
    desc: "Quantifies the total leaf area per unit ground. Critical for water use, photosynthesis rate, and biomass estimation.",
    colors: ["bg-stone-300", "bg-lime-200", "bg-lime-400", "bg-green-500", "bg-green-800"],
    distribution: [5, 18, 28, 34, 15],
  },
  {
    id: "MSAVI",
    name: "MSAVI",
    full: "Modified Soil Adjusted Vegetation Index",
    desc: "A self-adjusting version of SAVI that doesn't require a soil correction factor — perfect for large-scale field monitoring.",
    colors: ["bg-gray-400", "bg-yellow-300", "bg-lime-300", "bg-green-500", "bg-green-700"],
    distribution: [6, 14, 32, 32, 16],
  },
];

function HeatmapGrid({ active }) {
  const idx = indices.find((t) => t.id === active) || indices[0];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-app-border bg-app-panel p-3"
      >
        <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(18, 1fr)" }}>
          {Array.from({ length: 252 }).map((_, i) => {
            const r = Math.random();
            const colorIdx =
              r < idx.distribution[0] / 100 ? 0
              : r < (idx.distribution[0] + idx.distribution[1]) / 100 ? 1
              : r < (idx.distribution[0] + idx.distribution[1] + idx.distribution[2]) / 100 ? 2
              : r < (idx.distribution[0] + idx.distribution[1] + idx.distribution[2] + idx.distribution[3]) / 100 ? 3
              : 4;
            return (
              <div
                key={i}
                className={`aspect-square rounded-[1px] ${idx.colors[colorIdx]}`}
                style={{ opacity: 0.5 + Math.random() * 0.5 }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>Low</span>
          <div className="flex gap-0.5">
            {idx.colors.map((c, i) => (
              <div key={i} className={`h-2 w-6 rounded-sm ${c}`} />
            ))}
          </div>
          <span>High</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function SatelliteIndices() {
  const [active, setActive] = useState("NDVI");
  const activeIdx = indices.find((t) => t.id === active) || indices[0];

  return (
    <section id="indices" className="py-24">
      <div className="container-wrap grid gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionLabel
            label="Satellite Indices"
            title="See Your Farm the Way Scientists Do"
            subtitle="Choose any index to visualise your field from a different spectral perspective."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {indices.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                  active === t.id
                    ? "bg-brand-primary text-white shadow-glow-sm"
                    : "border border-app-border bg-white text-zinc-600 hover:border-brand-primary/40"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active index info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-2xl border border-app-border bg-white p-5"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
                {activeIdx.name}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-ember-text">
                {activeIdx.full}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {activeIdx.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: heatmap */}
        <ScrollReveal delay={0.15}>
          <HeatmapGrid active={active} />
        </ScrollReveal>
      </div>
    </section>
  );
}