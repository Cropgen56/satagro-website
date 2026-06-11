import {useState} from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Satellite,
  ShieldCheck,
  WifiOff,
  Wheat,
  Brain,
  Building2,
} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

const faqData = [
  {
    q: "What satellite data does SatAgro.AI use?",
    a: "We use Sentinel-2 (10 m resolution, 5-day revisit) and Landsat-8/9 (30 m resolution, 16-day revisit) from ESA and NASA. Data is sourced via Google Earth Engine and Sentinel Hub APIs.",
    Icon: Satellite,
  },
  {
    q: "Does the app work in low-internet or remote areas?",
    a: "Yes. The SatAgro mobile app supports offline mode — you can download your field maps and latest reports for offline viewing. SMS alerts are also available for feature phones.",
    Icon: WifiOff,
  },
  {
    q: "Is my farm data secure and private?",
    a: "Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never share or sell your field data. You own your data and can export or delete it at any time.",
    Icon: ShieldCheck,
  },
  {
    q: "Which crops and states are supported?",
    a: "SatAgro.AI currently covers 50+ crop varieties including wheat, rice, cotton, soybean, sugarcane, and vegetables. We operate in 12+ states including Maharashtra, Punjab, UP, MP, Karnataka, and Gujarat.",
    Icon: Wheat,
  },
  {
    q: "How accurate are the AI predictions?",
    a: "Yield predictions have a median accuracy of 88–92% depending on data quality. Disease detection models are validated against ground-truth surveys from ICAR-affiliated partners.",
    Icon: Brain,
  },
  {
    q: "Can I use SatAgro for multiple farms or as an FPO?",
    a: "Yes. Our Enterprise plan supports multi-farm dashboards, team access, and bulk reporting — ideal for FPOs, agricultural companies, and government schemes.",
    Icon: Building2,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F7FBF5] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-[85px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-ember-accent/20 blur-[100px]" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[20%] hidden h-3 w-3 rounded-full bg-brand-primary/40 shadow-[0_0_40px_rgba(58,107,15,0.6)] lg:block"
        animate={{y: [0, -18, 0], opacity: [0.35, 1, 0.35]}}
        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[18%] right-[12%] hidden h-4 w-4 rounded-full bg-ember-accent/50 shadow-[0_0_45px_rgba(245,158,11,0.55)] lg:block"
        animate={{y: [0, 20, 0], opacity: [0.35, 1, 0.35]}}
        transition={{duration: 3.5, repeat: Infinity, ease: "easeInOut"}}
      />

      <div className="container-wrap relative">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>

          <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Questions farmers ask before getting started.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Everything you need to know about SatAgro.AI, satellite monitoring,
            crop intelligence, privacy and multi-farm support.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-5">
          <motion.div
            initial={{opacity: 0, x: -24}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="relative overflow-hidden rounded-[1.6rem] border border-app-border bg-white/85 p-5 shadow-[0_24px_80px_rgba(58,107,15,0.12)] backdrop-blur-xl lg:col-span-2"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl" />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <h3 className="mt-6 bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-2xl font-extrabold text-transparent">
                  Still curious?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Get help choosing the right plan, setting up fields, or
                  understanding satellite-based crop intelligence.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-brand-primary/10 bg-brand-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                  Support
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Our team can help you onboard farms, FPOs and agri-business
                  teams.
                </p>

                <a
                  href="/contact"
                  className="mt-4 inline-flex rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  Contact our team →
                </a>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3 lg:col-span-3">
            {faqData.map((item, i) => {
              const Icon = item.Icon;
              const isOpen = open === i;

              return (
                <motion.div
                  key={item.q}
                  initial={{opacity: 0, y: 18}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: i * 0.05, duration: 0.45}}
                  className={`group overflow-hidden rounded-2xl border bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 ${
                    isOpen
                      ? "border-brand-primary/35 shadow-[0_18px_50px_rgba(58,107,15,0.12)]"
                      : "border-app-border hover:border-brand-primary/20"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-brand-primary text-white"
                            : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>

                      <span className="font-semibold text-ember-text">
                        {item.q}
                      </span>
                    </div>

                    <motion.span
                      animate={{rotate: isOpen ? 180 : 0}}
                      transition={{duration: 0.25}}
                      className={`shrink-0 rounded-full p-1 transition-colors ${
                        isOpen
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-zinc-400"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="border-t border-app-border px-5 pb-5 pt-4">
                          <p className="text-sm leading-relaxed text-zinc-500">
                            {item.a}
                          </p>

                          <motion.div
                            initial={{width: 0}}
                            animate={{width: "100%"}}
                            transition={{duration: 0.55}}
                            className="mt-4 h-1 rounded-full bg-gradient-to-r from-[#3A6B0F] to-[#F59E0B]"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}