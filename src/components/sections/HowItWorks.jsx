import { PlusCircle, Satellite, Cpu, Lightbulb } from "lucide-react";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const steps = [
  {
    icon: PlusCircle,
    title: "Add Your Fields",
    desc: "Draw field boundaries on our interactive satellite map — no GPS device or survey required.",
    color: "from-emerald-500 to-brand-primary",
  },
  {
    icon: Satellite,
    title: "Satellite Data Acquisition",
    desc: "We automatically pull Sentinel-2 & Landsat imagery updated every 5 days for your location.",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: Cpu,
    title: "AI Analysis & Index Computation",
    desc: "Our engine computes 30+ indices — NDVI, EVI, NDWI, LAI — and detects anomalies instantly.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Actionable Recommendations",
    desc: "Receive personalised, AI-generated farming advice in your regional language via app or SMS.",
    color: "from-amber-400 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-app-panel">
      <div className="container-wrap">
        <SectionLabel
          label="How It Works"
          title="From Field Mapping to Expert Recommendations"
          subtitle="Get satellite-backed insights in 4 simple steps — no technical expertise needed."
        />

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-app-border to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const I = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="relative flex flex-col items-start gap-4 rounded-2xl border border-app-border bg-white p-6 shadow-sm card-hover">
                    {/* Step number badge */}
                    <div className="absolute -top-3.5 left-5 rounded-full bg-brand-primary px-3 py-0.5 text-xs font-bold text-white shadow-glow-sm">
                      Step {i + 1}
                    </div>

                    {/* Icon */}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md`}>
                      <I className="h-6 w-6" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-ember-text">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}