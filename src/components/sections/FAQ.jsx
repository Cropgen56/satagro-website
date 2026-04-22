import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const faqData = [
  {
    q: "What satellite data does SatAgro.AI use?",
    a: "We use Sentinel-2 (10 m resolution, 5-day revisit) and Landsat-8/9 (30 m resolution, 16-day revisit) from ESA and NASA. Data is sourced via Google Earth Engine and Sentinel Hub APIs.",
  },
  {
    q: "Does the app work in low-internet or remote areas?",
    a: "Yes. The SatAgro mobile app supports offline mode — you can download your field maps and latest reports for offline viewing. SMS alerts are also available for feature phones.",
  },
  {
    q: "Is my farm data secure and private?",
    a: "Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never share or sell your field data. You own your data and can export or delete it at any time.",
  },
  {
    q: "Which crops and states are supported?",
    a: "SatAgro.AI currently covers 50+ crop varieties including wheat, rice, cotton, soybean, sugarcane, and vegetables. We operate in 12+ states including Maharashtra, Punjab, UP, MP, Karnataka, and Gujarat.",
  },
  {
    q: "How accurate are the AI predictions?",
    a: "Yield predictions have a median accuracy of 88–92% depending on data quality. Disease detection models are validated against ground-truth surveys from ICAR-affiliated partners.",
  },
  {
    q: "Can I use SatAgro for multiple farms or as an FPO?",
    a: "Yes. Our Enterprise plan supports multi-farm dashboards, team access, and bulk reporting — ideal for FPOs, agricultural companies, and government schemes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 bg-app-panel">
      <div className="container-wrap">
        <SectionLabel
          align="center"
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about SatAgro.AI. Still curious? Reach out to our team."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqData.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 0.05}>
              <div
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  open === i ? "border-brand-primary/40 bg-white" : "border-app-border bg-white"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-ember-text">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-brand-primary"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-app-border px-6 pb-5 pt-4 text-sm leading-relaxed text-zinc-500">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Still have questions?{" "}
            <a href="/contact" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
              Contact our team →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}