import {PlusCircle, Satellite, Cpu, Lightbulb, Route} from "lucide-react";
import {motion} from "framer-motion";

const steps = [
  {
    icon: PlusCircle,
    title: "Add Your Fields",
    desc: "Draw field boundaries on our interactive satellite map — no GPS device or survey required.",
  },
  {
    icon: Satellite,
    title: "Satellite Data Acquisition",
    desc: "We automatically pull Sentinel-2 & Landsat imagery updated every 5 days for your location.",
  },
  {
    icon: Cpu,
    title: "AI Analysis & Index Computation",
    desc: "Our engine computes 30+ indices — NDVI, EVI, NDWI, LAI — and detects anomalies instantly.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Recommendations",
    desc: "Receive personalised, AI-generated farming advice in your regional language via app or SMS.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-10 text-white sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.22),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container-wrap relative">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <div>
            <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#BDEFA4] backdrop-blur lg:mx-0">
              <Route className="h-4 w-4" />
              How It Works
            </div>

            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              From field mapping to expert recommendations.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Get satellite-backed insights in 4 simple steps — no technical
            expertise needed.
          </p>
        </div>

        <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-4">
          <div className="absolute left-8 right-8 top-[4.2rem] hidden h-px bg-gradient-to-r from-transparent via-[#9FE870]/35 to-transparent lg:block" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{opacity: 0, y: 22}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: i * 0.08, duration: 0.55}}
                  whileHover={{y: -6}}
                  className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur transition-all duration-300 hover:border-[#9FE870]/50 hover:bg-white/[0.12]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#9FE870]/10 blur-2xl transition-all duration-300 group-hover:bg-[#9FE870]/25" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9FE870]/12 text-[#BDEFA4] transition-all duration-300 group-hover:bg-[#9FE870] group-hover:text-[#07130A]">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-xs font-semibold text-white/35">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-sm font-bold text-white">
                      {step.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}