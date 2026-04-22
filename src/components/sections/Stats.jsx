import { Users, Maximize2, Map, BarChart2 } from "lucide-react";
import AnimatedCounter from "@components/ui/AnimatedCounter";
import ScrollReveal from "@components/ui/ScrollReveal";

const stats = [
  { end: 2400,  suffix: "+",   label: "Active Farmers",    icon: Users,      desc: "Across India" },
  { end: 14,    suffix: "L+",  label: "Acres Monitored",   icon: Maximize2,  desc: "Real-time data" },
  { end: 12,    suffix: "+",   label: "States Coverage",   icon: Map,        desc: "Pan-India reach" },
  { end: 30,    suffix: "+",   label: "Satellite Indices",  icon: BarChart2,  desc: "NDVI, EVI, NDWI …" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => {
          const I = s.icon;
          return (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-app-border bg-white p-8 text-center shadow-sm card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <I className="h-5 w-5" />
                </div>
                <p className="font-display text-5xl font-extrabold text-brand-primary">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="font-semibold text-ember-text">{s.label}</p>
                <p className="text-sm text-zinc-400">{s.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}