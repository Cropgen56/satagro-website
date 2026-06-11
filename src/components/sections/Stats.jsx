import {Users, Maximize2, Map, BarChart2, TrendingUp} from "lucide-react";
import {motion} from "framer-motion";
import AnimatedCounter from "@components/ui/AnimatedCounter";

const stats = [
  {
    end: 2400,
    suffix: "+",
    label: "Active Farmers",
    icon: Users,
    desc: "Across India",
  },
  {
    end: 14,
    suffix: "L+",
    label: "Acres Monitored",
    icon: Maximize2,
    desc: "Real-time data",
  },
  {
    end: 12,
    suffix: "+",
    label: "States Coverage",
    icon: Map,
    desc: "Pan-India reach",
  },
  {
    end: 30,
    suffix: "+",
    label: "Satellite Indices",
    icon: BarChart2,
    desc: "NDVI, EVI, NDWI",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBF5] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,107,15,0.16),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-ember-accent/15 blur-[100px]" />

      <div className="container-wrap relative">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
            <TrendingUp className="h-4 w-4" />
            Platform Impact
          </div>

          <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl lg:text-4xl">
            Crop intelligence at scale
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Real-time satellite monitoring and AI advisory built for modern
            farming teams.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.label}
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.08, duration: 0.55}}
                whileHover={{y: -8, scale: 1.02}}
                className="group relative overflow-hidden rounded-[1.6rem] border border-app-border bg-white/85 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/25 hover:shadow-[0_24px_70px_rgba(58,107,15,0.14)] sm:p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-primary/10 blur-2xl transition-all duration-300 group-hover:bg-brand-primary/20" />

                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="relative font-display bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>

                <p className="relative mt-3 font-semibold text-ember-text">
                  {s.label}
                </p>

                <p className="relative mt-1 text-sm text-zinc-400">{s.desc}</p>

                <div className="relative mt-5 h-1 overflow-hidden rounded-full bg-brand-primary/10">
                  <motion.div
                    initial={{width: 0}}
                    whileInView={{width: "100%"}}
                    viewport={{once: true}}
                    transition={{delay: 0.25 + i * 0.08, duration: 0.8}}
                    className="h-full rounded-full bg-gradient-to-r from-[#3A6B0F] to-[#F59E0B]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}