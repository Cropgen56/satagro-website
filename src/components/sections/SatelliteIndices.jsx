import {useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
  Activity,
  BarChart3,
  Droplets,
  FlaskConical,
  Leaf,
  Layers3,
  ScanLine,
  Sparkles,
  Sprout,
  Waves,
} from "lucide-react";

const indices = [
  {
    id: "NDVI",
    name: "NDVI",
    full: "Normalized Difference Vegetation Index",
    desc: "Measures vegetation density and crop health. Higher values indicate lush, healthy growth, while lower values signal stress or bare soil.",
    Icon: Leaf,
    colors: ["bg-red-900", "bg-yellow-400", "bg-lime-400", "bg-green-500", "bg-green-700"],
    distribution: [2, 5, 20, 50, 23],
  },
  {
    id: "EVI",
    name: "EVI",
    full: "Enhanced Vegetation Index",
    desc: "Improves vegetation monitoring by reducing atmospheric and soil background noise in dense crop areas.",
    Icon: Activity,
    colors: ["bg-red-800", "bg-orange-400", "bg-yellow-300", "bg-lime-500", "bg-emerald-600"],
    distribution: [3, 8, 18, 45, 26],
  },
  {
    id: "NDWI",
    name: "NDWI",
    full: "Normalized Difference Water Index",
    desc: "Detects water content in crops and soil. Useful for identifying irrigation needs and drought stress.",
    Icon: Droplets,
    colors: ["bg-orange-600", "bg-yellow-400", "bg-sky-300", "bg-blue-400", "bg-blue-700"],
    distribution: [10, 20, 30, 25, 15],
  },
  {
    id: "NDRE",
    name: "NDRE",
    full: "Normalized Difference Red Edge",
    desc: "Sensitive to chlorophyll changes and helpful for detecting early nutrient deficiencies before severe stress appears.",
    Icon: FlaskConical,
    colors: ["bg-red-700", "bg-pink-400", "bg-violet-400", "bg-green-400", "bg-emerald-700"],
    distribution: [5, 12, 25, 40, 18],
  },
  {
    id: "SAVI",
    name: "SAVI",
    full: "Soil Adjusted Vegetation Index",
    desc: "Accounts for soil brightness variation, especially useful during early growth when soil exposure is common.",
    Icon: Sprout,
    colors: ["bg-zinc-500", "bg-yellow-500", "bg-lime-400", "bg-green-500", "bg-green-800"],
    distribution: [8, 15, 30, 35, 12],
  },
  {
    id: "LAI",
    name: "LAI",
    full: "Leaf Area Index",
    desc: "Quantifies leaf area per ground unit, helping estimate photosynthesis, biomass, and water usage.",
    Icon: Layers3,
    colors: ["bg-stone-300", "bg-lime-200", "bg-lime-400", "bg-green-500", "bg-green-800"],
    distribution: [5, 18, 28, 34, 15],
  },
  {
    id: "MSAVI",
    name: "MSAVI",
    full: "Modified Soil Adjusted Vegetation Index",
    desc: "A self-adjusting soil-aware index designed for large-scale field monitoring and early-stage crops.",
    Icon: Waves,
    colors: ["bg-gray-400", "bg-yellow-300", "bg-lime-300", "bg-green-500", "bg-green-700"],
    distribution: [6, 14, 32, 32, 16],
  },
];

function buildCells(idx) {
  return Array.from({length: 216}).map((_, i) => {
    const r = ((i * 37) % 100) / 100;

    const colorIdx =
      r < idx.distribution[0] / 100
        ? 0
        : r < (idx.distribution[0] + idx.distribution[1]) / 100
          ? 1
          : r <
              (idx.distribution[0] +
                idx.distribution[1] +
                idx.distribution[2]) /
                100
            ? 2
            : r <
                (idx.distribution[0] +
                  idx.distribution[1] +
                  idx.distribution[2] +
                  idx.distribution[3]) /
                  100
              ? 3
              : 4;

    return {
      id: i,
      color: idx.colors[colorIdx],
      opacity: 0.5 + ((i * 11) % 45) / 100,
    };
  });
}

function HeatmapGrid({activeIdx}) {
  const cells = useMemo(() => buildCells(activeIdx), [activeIdx]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIdx.id}
        initial={{opacity: 0, y: 18, scale: 0.97}}
        animate={{opacity: 1, y: 0, scale: 1}}
        exit={{opacity: 0, y: -12, scale: 0.97}}
        transition={{duration: 0.35}}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/90 p-4 shadow-[0_24px_80px_rgba(58,107,15,0.14)] backdrop-blur-xl sm:p-5"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
              Spectral Preview
            </p>
            <h3 className="mt-1 bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-lg font-bold text-transparent">
              {activeIdx.name} Field Layer
            </h3>
          </div>

          <span className="flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1.5 text-xs font-semibold text-brand-primary">
            <ScanLine className="h-3.5 w-3.5" />
            LIVE
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-app-border bg-app-panel p-2">
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent shadow-[0_0_22px_rgba(58,107,15,0.8)]"
            animate={{y: ["0%", "280px", "0%"]}}
            transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
          />

          <div
            className="grid gap-[2px]"
            style={{gridTemplateColumns: "repeat(18, minmax(0, 1fr))"}}
          >
            {cells.map((cell) => (
              <motion.div
                key={cell.id}
                className={`aspect-square rounded-[2px] ${cell.color}`}
                style={{opacity: cell.opacity}}
                whileHover={{scale: 1.7, zIndex: 20}}
                transition={{duration: 0.18}}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:26px_26px]" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-zinc-500">
          <span>Low</span>

          <div className="flex overflow-hidden rounded-full border border-app-border">
            {activeIdx.colors.map((color, i) => (
              <span key={i} className={`h-2.5 w-9 ${color}`} />
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
  const activeIdx = indices.find((item) => item.id === active) || indices[0];
  const ActiveIcon = activeIdx.Icon;

  return (
    <section
      id="indices"
      className="relative overflow-hidden bg-[#F7FBF5] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-[85px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-ember-accent/20 blur-[100px]" />

      <div className="container-wrap relative grid gap-10 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Satellite Indices
            </div>

            <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              See your farm the way scientists do.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Choose any spectral index to visualize crop health, water stress,
              nutrient changes, and field performance from satellite data.
            </p>
          </motion.div>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {indices.map((item) => {
              const Icon = item.Icon;
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`group flex items-center gap-2 rounded-2xl border p-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-brand-primary/30 bg-brand-primary text-white shadow-[0_16px_40px_rgba(58,107,15,0.22)]"
                      : "border-app-border bg-white/85 text-zinc-600 backdrop-blur hover:border-brand-primary/30 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span
                      className={`block truncate text-[10px] ${
                        isActive ? "text-white/70" : "text-zinc-400"
                      }`}
                    >
                      Spectral layer
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx.id}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -8}}
              transition={{duration: 0.3}}
              className="mt-5 overflow-hidden rounded-[1.4rem] border border-app-border bg-white/85 p-5 shadow-sm backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <ActiveIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    {activeIdx.name}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ember-text">
                    {activeIdx.full}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {activeIdx.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="lg:col-span-3"
          initial={{opacity: 0, y: 24, scale: 0.98}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.65}}
        >
          <HeatmapGrid activeIdx={activeIdx} />
        </motion.div>
      </div>
    </section>
  );
}