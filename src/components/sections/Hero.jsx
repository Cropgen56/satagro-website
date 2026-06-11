import {useEffect, useMemo, useRef, useState} from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Activity,
  Droplets,
  Bug,
  Leaf,
  Radio,
  MapPin,
  TrendingUp,
  ScanLine,
} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import gsap from "gsap";

import IndexPill from "@components/ui/IndexPill";

const appUrl = "https://app.satagro.ai";

const ticker = [
  {Icon: Zap, title: "NDVI Alert", text: "Farm #A24 · Punjab · 0.42 Low", tone: "text-red-500 bg-red-50 border-red-100"},
  {Icon: Activity, title: "EVI Update", text: "0.68 Normal · Maharashtra", tone: "text-status-green bg-green-50 border-green-100"},
  {Icon: Bug, title: "Pest Risk", text: "Aphid detected · UP", tone: "text-status-orange bg-orange-50 border-orange-100"},
  {Icon: Droplets, title: "NDWI", text: "−0.12 Drought stress · Rajasthan", tone: "text-blue-500 bg-blue-50 border-blue-100"},
  {Icon: Leaf, title: "LAI", text: "3.8 Healthy · Karnataka", tone: "text-status-green bg-green-50 border-green-100"},
  {Icon: Radio, title: "New Scan", text: "Farm #B17 · Haryana", tone: "text-brand-primary bg-brand-primary/5 border-brand-primary/10"},
];

const itemVariants = {
  hidden: {opacity: 0, y: 18},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1]},
  },
};

export default function Hero() {
  const cardRef = useRef(null);
  const scanRef = useRef(null);
  const bgOneRef = useRef(null);
  const bgTwoRef = useRef(null);

  const [activeCell, setActiveCell] = useState(null);

  const heatMapCells = useMemo(() => {
    return Array.from({length: 112}).map((_, i) => {
      const row = Math.floor(i / 16) + 1;
      const col = (i % 16) + 1;

      let status = "Healthy";
      let color = "bg-status-green";
      let ring = "hover:ring-status-green/40 focus:ring-status-green/40";
      let score = 72 + ((i * 7) % 21);
      let advisory = "Crop growth is stable in this patch.";

      if (i % 13 === 0) {
        status = "Stressed";
        color = "bg-red-500/75";
        ring = "hover:ring-red-500/40 focus:ring-red-500/40";
        score = 28 + ((i * 5) % 16);
        advisory = "Stress detected. Check irrigation and pest activity.";
      } else if (i % 9 === 0) {
        status = "Moderate";
        color = "bg-status-orange/80";
        ring = "hover:ring-status-orange/40 focus:ring-status-orange/40";
        score = 48 + ((i * 3) % 18);
        advisory = "Moderate risk. Monitor this patch in next scan.";
      }

      return {
        id: i,
        row,
        col,
        status,
        color,
        ring,
        score,
        advisory,
        ndvi: (score / 100).toFixed(2),
        opacity: 0.5 + ((i * 17) % 40) / 100,
      };
    });
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (scanRef.current) {
      gsap.to(scanRef.current, {
        yPercent: 5200,
        duration: isMobile ? 4.5 : 3,
        repeat: -1,
        ease: "power1.inOut",
      });
    }

    if (!isMobile) {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          y: -12,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bgOneRef.current) {
        gsap.to(bgOneRef.current, {
          x: 35,
          y: -25,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bgTwoRef.current) {
        gsap.to(bgTwoRef.current, {
          x: -30,
          y: 30,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }

    return () => gsap.killTweensOf([cardRef.current, scanRef.current, bgOneRef.current, bgTwoRef.current]);
  }, []);

  return (
    <section className="relative w-full overflow-x-hidden bg-[#F7FBF5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div
        ref={bgOneRef}
        className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-brand-primary/20 blur-[80px] md:h-72 md:w-72"
      />

      <div
        ref={bgTwoRef}
        className="pointer-events-none absolute -right-32 top-36 h-72 w-72 rounded-full bg-ember-accent/20 blur-[95px] md:h-[480px] md:w-[480px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 pb-14 pt-24 sm:px-6 md:pt-28 lg:grid-cols-5 lg:items-center lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div
          className="space-y-5 text-center lg:col-span-3 lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{staggerChildren: 0.1}}
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-2 text-[11px] font-semibold text-brand-primary shadow-sm backdrop-blur sm:px-4 sm:text-sm lg:mx-0"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="truncate">AI + Satellite Intelligence for modern farming</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[34px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#234607] bg-clip-text text-transparent">
              See crop stress
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-transparent">
              before it becomes
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#3A6B0F] via-[#4F8F18] to-[#F59E0B] bg-clip-text text-transparent">
              crop loss.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base md:text-lg lg:mx-0"
          >
            SatAgro.AI helps farmers and agri-teams monitor crop health, water
            stress, pest risk, and field performance using satellite imagery
            and AI-powered advisory.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href={appUrl} className="btn-primary w-full justify-center px-6 py-3 text-sm sm:w-auto sm:text-base">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="/contact" className="btn-secondary w-full justify-center px-6 py-3 text-sm sm:w-auto sm:text-base">
              <Play className="h-4 w-4" />
              Book a Demo
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto grid max-w-xl grid-cols-3 gap-2 sm:gap-3 lg:mx-0"
          >
            {[
              ["2,400+", "Farmers"],
              ["12+", "States"],
              ["24/7", "Monitoring"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-app-border bg-white/80 p-3 shadow-sm backdrop-blur sm:rounded-2xl sm:p-4"
              >
                <p className="bg-gradient-to-r from-[#111827] to-[#3A6B0F] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-full overflow-hidden rounded-2xl border border-app-border bg-white/85 p-1.5 shadow-sm backdrop-blur-sm sm:max-w-2xl sm:rounded-full lg:mx-0"
          >
            <div className="overflow-hidden">
              <div className="animate-ticker flex w-max gap-2 py-1.5 pl-2 sm:gap-3">
                {[...ticker, ...ticker].map(({Icon, title, text, tone}, index) => (
                  <div
                    key={index}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 shadow-sm sm:gap-3 sm:px-4 ${tone}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/80">
                      <Icon className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-left">
                      <span className="block text-[11px] font-bold leading-none sm:text-xs">
                        {title}
                      </span>
                      <span className="mt-1 block max-w-[145px] truncate text-[10px] opacity-75 sm:max-w-none sm:text-xs">
                        {text}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-[420px] lg:col-span-2 lg:max-w-none"
          initial={{opacity: 0, y: 22}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.25, duration: 0.65}}
        >
          <div ref={cardRef} className="relative">
            <div className="absolute -inset-3 rounded-[1.8rem] bg-gradient-to-br from-brand-primary/20 via-ember-accent/10 to-transparent blur-2xl" />

            <div className="relative rounded-[1.25rem] border border-white/70 bg-white/90 p-3 shadow-glow-md backdrop-blur-xl sm:rounded-[1.7rem] sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3 sm:mb-5">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400 sm:text-xs">
                    SatAgro.AI
                  </p>
                  <h3 className="mt-1 truncate bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-sm font-bold text-transparent sm:text-lg">
                    Live Crop Monitor
                  </h3>
                </div>

                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-status-green/10 px-2 py-1 text-[9px] font-semibold text-status-green sm:px-3 sm:py-1.5 sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-green" />
                  LIVE
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-app-border bg-app-panel p-1.5 sm:rounded-2xl sm:p-2">
                <div
                  ref={scanRef}
                  className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent shadow-[0_0_22px_rgba(58,107,15,0.8)]"
                />

                <div
                  className="grid gap-[2px] sm:gap-0.5"
                  style={{gridTemplateColumns: "repeat(16, minmax(0, 1fr))"}}
                >
                  {heatMapCells.map((cell) => (
                    <motion.button
                      type="button"
                      key={cell.id}
                      onMouseEnter={() => setActiveCell(cell)}
                      onMouseLeave={() => setActiveCell(null)}
                      onFocus={() => setActiveCell(cell)}
                      onBlur={() => setActiveCell(null)}
                      onClick={() => setActiveCell(cell)}
                      whileTap={{scale: 1.18}}
                      className={`relative aspect-square touch-manipulation rounded-[2px] outline-none transition-all duration-200 hover:z-20 hover:ring-2 focus:z-20 focus:ring-2 sm:rounded-[3px] ${cell.color} ${cell.ring}`}
                      style={{opacity: cell.opacity}}
                    />
                  ))}
                </div>

                <AnimatePresence>
                  {activeCell && (
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: 10}}
                      className="absolute bottom-2 left-2 right-2 z-30 rounded-xl border border-white/70 bg-white/95 p-2.5 shadow-xl backdrop-blur-xl sm:bottom-3 sm:left-3 sm:right-3 sm:rounded-2xl sm:p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="flex items-center gap-1.5 text-[11px] font-bold text-ember-text sm:text-xs">
                            <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                            Patch R{activeCell.row} / C{activeCell.col}
                          </p>

                          <p className="mt-1 text-[10px] leading-snug text-zinc-500 sm:text-xs">
                            {activeCell.advisory}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">
                          <p className="text-[9px] uppercase tracking-widest text-zinc-400">
                            NDVI
                          </p>
                          <p className="text-xs font-bold text-brand-primary sm:text-sm">
                            {activeCell.ndvi}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-100">
                        <motion.div
                          initial={{width: 0}}
                          animate={{width: `${activeCell.score}%`}}
                          className="h-full rounded-full bg-brand-primary"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5 text-[10px] text-zinc-500 sm:mt-4 sm:gap-2 sm:text-xs">
                {[
                  ["Healthy", "78%", "bg-status-green"],
                  ["Moderate", "16%", "bg-status-orange"],
                  ["Stressed", "6%", "bg-red-500/70"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-app-border bg-white/70 p-2 text-center sm:rounded-xl sm:p-2.5"
                  >
                    <span className={`mx-auto mb-1 block h-2 w-2 rounded-sm ${color}`} />
                    <p className="font-semibold text-ember-text">{value}</p>
                    <p className="truncate">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5">
                <IndexPill name="NDVI" value="0.74" status="healthy" />
                <IndexPill name="EVI" value="0.61" status="healthy" />
                <IndexPill name="NDWI" value="0.18" status="moderate" />
                <IndexPill name="LAI" value="3.2" status="healthy" />
              </div>

              <div className="mt-3 rounded-xl border border-brand-primary/10 bg-brand-primary/5 p-3 sm:mt-5 sm:rounded-2xl sm:p-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white sm:h-9 sm:w-9">
                    <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>

                  <div>
                    <p className="bg-gradient-to-r from-[#111827] to-[#3A6B0F] bg-clip-text text-xs font-bold text-transparent sm:text-sm">
                      AI Advisory
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      Tap any farm patch to inspect NDVI score, patch health,
                      and recommended action.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 flex flex-wrap items-center justify-end gap-1.5 text-right text-[10px] text-zinc-400 sm:mt-4 sm:text-xs">
                <ScanLine className="h-3.5 w-3.5" />
                Updated 12 min ago · Farm #A24, Punjab
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}