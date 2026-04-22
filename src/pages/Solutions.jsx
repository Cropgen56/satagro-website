import { Helmet } from "react-helmet-async";
import Layout from "@components/layout/Layout";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";
import CTA from "@components/sections/CTA";
import { Tractor, Building2, Landmark, FlaskConical } from "lucide-react";

const solutions = [
  {
    icon: Tractor,
    audience: "Individual Farmers",
    title: "Farm Smarter, Earn More",
    desc: "Whether you manage 1 hectare or 50, SatAgro gives you the same satellite tools used by professional agronomy teams — at farmer-friendly prices. Monitor crop health daily, receive AI advisory, and reduce input costs.",
    points: ["NDVI & health alerts via SMS", "Hindi & regional language AI advisory", "Offline mobile app support"],
    cta: "Start Free Trial",
    href: "https://app.satagro.ai",
  },
  {
    icon: Building2,
    audience: "Farmer Producer Organisations",
    title: "Manage Hundreds of Farms at Once",
    desc: "FPOs can monitor all member farms from a single dashboard. Get zone-wide alerts, aggregate reports, and input recommendations across your entire cluster — reducing agronomist costs dramatically.",
    points: ["Multi-farm cluster dashboard", "Bulk SMS alerts to members", "Exportable crop reports for banks & insurance"],
    cta: "Request FPO Demo",
    href: "/contact",
  },
  {
    icon: Landmark,
    audience: "Government & Development Agencies",
    title: "Scale Crop Intelligence Across Districts",
    desc: "Enable evidence-based scheme monitoring, crop damage assessment, and farmer advisory at district or state level. SatAgro integrates with existing systems via secure API.",
    points: ["Crop area & yield estimation", "Drought & flood risk monitoring", "Scheme beneficiary tracking"],
    cta: "Contact for Government Plans",
    href: "/contact",
  },
  {
    icon: FlaskConical,
    audience: "Agri-Research & Institutions",
    title: "Access Raw Satellite Time-Series Data",
    desc: "Researchers and extension services can access historical satellite index time-series, field boundary data, and weather datasets for any region in India through our API.",
    points: ["Historical data back to 2017", "Custom index computation support", "API access with documentation"],
    cta: "Explore Research API",
    href: "/contact",
  },
];

export default function Solutions() {
  return (
    <Layout>
      <Helmet>
        <title>Solutions | SatAgro.AI</title>
        <meta name="description" content="SatAgro.AI solutions for individual farmers, FPOs, government agencies, and agri-research institutions across India." />
      </Helmet>

      <section className="bg-hero-gradient py-24 text-center">
        <div className="container-wrap">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">Solutions</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-ember-text md:text-6xl">
              Built for Every Stakeholder in Agriculture
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-500">
              From smallholder farmers to national agencies — SatAgro.AI scales to your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wrap space-y-10">
          {solutions.map((s, i) => {
            const I = s.icon;
            const isReversed = i % 2 !== 0;
            return (
              <ScrollReveal key={s.audience} delay={0.05}>
                <div className={`grid items-center gap-10 rounded-2xl border border-app-border bg-white p-8 shadow-sm lg:grid-cols-2 ${isReversed ? "lg:direction-rtl" : ""}`}>
                  <div className={`space-y-5 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <I className="h-5 w-5" />
                    </div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">{s.audience}</p>
                    <h2 className="font-display text-3xl font-bold text-ember-text">{s.title}</h2>
                    <p className="leading-relaxed text-zinc-500">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-zinc-700">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a href={s.href} className="btn-primary inline-flex mt-2">
                      {s.cta} →
                    </a>
                  </div>
                  <div className={`flex h-56 items-center justify-center rounded-xl bg-gradient-to-br from-app-elevated to-app-sidebar ${isReversed ? "lg:order-1" : ""}`}>
                    <I className="h-24 w-24 text-brand-primary opacity-20" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </Layout>
  );
}
