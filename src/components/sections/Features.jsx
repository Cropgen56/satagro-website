import {
  Satellite, BarChart2, Brain, AlertTriangle,
  Leaf, Cloud, TrendingUp, Map, FileText,
} from "lucide-react";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const cards = [
  {
    t: "Multi-Spectral Satellite Imagery",
    d: "High-resolution Sentinel-2 & Landsat imagery updated every 5 days.",
    i: Satellite,
  },
  {
    t: "30+ Vegetation & Soil Indices",
    d: "NDVI, EVI, NDWI, SAVI, LAI and more — computed automatically.",
    i: BarChart2,
  },
  {
    t: "AI-Powered Crop Advisory",
    d: "Personalised recommendations in Hindi, Tamil, Kannada & more.",
    i: Brain,
  },
  {
    t: "Early Disease & Pest Detection",
    d: "Spot issues weeks before they become visible to the naked eye.",
    i: AlertTriangle,
  },
  {
    t: "Real-Time Crop Health Tracking",
    d: "Daily health scores with trend charts and anomaly alerts.",
    i: Leaf,
  },
  {
    t: "Hyper-Local Weather Intelligence",
    d: "5 km resolution forecasts, rain alerts, and humidity tracking.",
    i: Cloud,
  },
  {
    t: "AI Yield Prediction",
    d: "Predict harvest yield weeks in advance with up to 90% accuracy.",
    i: TrendingUp,
  },
  {
    t: "Precise Field Boundary Mapping",
    d: "Draw field boundaries on satellite maps — no survey required.",
    i: Map,
  },
  {
    t: "Automated Farm Reports",
    d: "PDF reports with indices, health trends, and recommendations.",
    i: FileText,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container-wrap">
        <SectionLabel
          align="center"
          label="Core Features"
          title="Everything You Need for Precision Farming"
          subtitle="Data-rich insights and actionable advisory — all in one platform, built for Indian farming conditions."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const I = c.i;
            return (
              <ScrollReveal key={c.t} delay={(i % 3) * 0.08}>
                <article className="group relative flex flex-col gap-4 rounded-2xl border border-app-border bg-white p-6 shadow-sm card-hover h-full">
                  {/* icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-glow-sm">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ember-text">{c.t}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{c.d}</p>

                  {/* hover accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-brand-primary/40 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}