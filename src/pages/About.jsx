import { Helmet } from "react-helmet-async";
import Layout from "@components/layout/Layout";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";
import { Satellite, ShieldCheck, Globe2, Users2 } from "lucide-react";

const values = [
  {
    icon: Satellite,
    title: "Data-First Farming",
    desc: "We believe every farmer deserves access to the same satellite technology that was previously reserved for research institutions.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    desc: "Your farm data belongs to you. We're fully committed to data security, transparency, and farmer sovereignty.",
  },
  {
    icon: Globe2,
    title: "Built for India",
    desc: "From low-bandwidth mobile apps to regional language advisory, we build specifically for Indian farming realities.",
  },
  {
    icon: Users2,
    title: "Farmer-Centric",
    desc: "Our product decisions are guided by feedback from the farmers who use SatAgro every day in the field.",
  },
];

const milestones = [
  { year: "2021", event: "SatAgro.AI founded in Kannur, Kerala" },
  { year: "2022", event: "MVP launched — 50 pilot farmers in Maharashtra" },
  { year: "2023", event: "500+ farmers, 3 states, NABARD recognition" },
  { year: "2024", event: "2,400+ farmers, 12 states, AgGPT AI engine launched" },
  { year: "2025", event: "Enterprise tier for FPOs & government schemes" },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | SatAgro.AI</title>
        <meta name="description" content="Learn about SatAgro.AI's mission to democratise satellite intelligence for Indian farmers." />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient py-24">
        <div className="container-wrap max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">Our Story</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-ember-text md:text-6xl">
              Giving Every Farmer a
              <span className="gradient-text"> Satellite</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              SatAgro.AI was founded with one belief: precision agriculture shouldn't be a
              privilege for large agri-businesses. Every Indian farmer — regardless of farm size
              — should have access to real-time satellite data, AI insights, and actionable advice.
            </p>
            <a href="https://app.satagro.ai" className="btn-primary mt-8 inline-flex">
              Start Monitoring Your Farm →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-wrap">
          <SectionLabel
            label="Our Values"
            title="What We Stand For"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => {
              const I = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-5 rounded-2xl border border-app-border bg-white p-6 shadow-sm card-hover">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <I className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ember-text">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-app-panel">
        <div className="container-wrap max-w-2xl">
          <SectionLabel
            label="Journey"
            title="From Idea to Impact"
          />
          <div className="mt-12 relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-app-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.07}>
                  <div className="flex items-start gap-6">
                    <div className="w-12 shrink-0 pt-0.5 text-right font-mono text-sm font-bold text-brand-primary">
                      {m.year}
                    </div>
                    <div className="relative flex-1 rounded-xl border border-app-border bg-white p-4 shadow-sm">
                      <div className="absolute -left-3 top-4 h-6 w-6 rounded-full border-2 border-brand-primary bg-white" />
                      <p className="text-sm text-zinc-700">{m.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container-wrap">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-ember-text md:text-4xl">
              Ready to join the mission?
            </h2>
            <p className="mt-4 text-zinc-500">Monitor your farm from space. Start free today.</p>
            <a href="https://app.satagro.ai" className="btn-primary mt-6 inline-flex">
              Get Started Free
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}