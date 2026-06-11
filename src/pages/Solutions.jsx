import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Tractor,
  Building2,
  Landmark,
  FlaskConical,
  Sparkles,
  Satellite,
  Users,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";
import CTA from "@components/sections/CTA";

const solutions = [
  {
    icon: Tractor,
    audience: "Individual Farmers",
    title: "Farm Smarter, Earn More",
    desc: "Whether you manage 1 hectare or 50, SatAgro gives you the same satellite tools used by professional agronomy teams — at farmer-friendly prices. Monitor crop health daily, receive AI advisory, and reduce input costs.",
    points: [
      "NDVI & health alerts via SMS",
      "Hindi & regional language AI advisory",
      "Offline mobile app support",
    ],
    cta: "Start Free Trial",
    href: "https://app.satagro.ai",
  },
  {
    icon: Building2,
    audience: "Farmer Producer Organisations",
    title: "Manage Hundreds of Farms at Once",
    desc: "FPOs can monitor all member farms from a single dashboard. Get zone-wide alerts, aggregate reports, and input recommendations across your entire cluster — reducing agronomist costs dramatically.",
    points: [
      "Multi-farm cluster dashboard",
      "Bulk SMS alerts to members",
      "Exportable crop reports for banks & insurance",
    ],
    cta: "Request FPO Demo",
    href: "/contact",
  },
  {
    icon: Landmark,
    audience: "Government & Development Agencies",
    title: "Scale Crop Intelligence Across Districts",
    desc: "Enable evidence-based scheme monitoring, crop damage assessment, and farmer advisory at district or state level. SatAgro integrates with existing systems via secure API.",
    points: [
      "Crop area & yield estimation",
      "Drought & flood risk monitoring",
      "Scheme beneficiary tracking",
    ],
    cta: "Contact for Government Plans",
    href: "/contact",
  },
  {
    icon: FlaskConical,
    audience: "Agri-Research & Institutions",
    title: "Access Raw Satellite Time-Series Data",
    desc: "Researchers and extension services can access historical satellite index time-series, field boundary data, and weather datasets for any region in India through our API.",
    points: [
      "Historical data back to 2017",
      "Custom index computation support",
      "API access with documentation",
    ],
    cta: "Explore Research API",
    href: "/contact",
  },
];

const floatingIcons = [
  { Icon: Tractor, top: "20%", left: "12%", delay: 0 },
  { Icon: Satellite, top: "22%", left: "84%", delay: 0.5 },
  { Icon: Users, top: "72%", left: "15%", delay: 1 },
  { Icon: Leaf, top: "70%", left: "82%", delay: 1.5 },
];

export default function Solutions() {
  return (
    <Layout>
      <Helmet>
        <title>Solutions | SatAgro.AI</title>
        <meta
          name="description"
          content="SatAgro.AI solutions for individual farmers, FPOs, government agencies, and agri-research institutions across India."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-app-border bg-[#07130A] py-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.22),transparent_25%)]" />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]"
          animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9FE870]/10 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {floatingIcons.map(({ Icon, top, left, delay }, i) => (
          <motion.div
            key={i}
            className="absolute hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#BDEFA4] backdrop-blur-md sm:flex"
            style={{ top, left }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.08, 1],
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 4 + i * 0.4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        ))}

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#9FE870]/60 shadow-[0_0_15px_rgba(159,232,112,0.7)]"
            style={{
              left: `${8 + i * 7}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        <motion.div
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#9FE870] to-transparent"
          animate={{ y: [0, 320, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-wrap relative">
          <ScrollReveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#BDEFA4] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              Solutions
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
              Built for Every Stakeholder in{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Agriculture
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              From smallholder farmers to national agencies — SatAgro.AI scales
              to your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBF5] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(58,107,15,0.12),transparent_28%),radial-gradient(circle_at_90%_45%,rgba(245,158,11,0.1),transparent_28%)]" />

        <div className="container-wrap relative grid gap-7 md:grid-cols-2">
          {solutions.map((s, i) => {
            const I = s.icon;

            return (
              <ScrollReveal key={s.audience} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white/75 p-6 shadow-[0_18px_60px_rgba(58,107,15,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/25 hover:bg-white hover:shadow-[0_28px_90px_rgba(58,107,15,0.18)] sm:p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-amber-400/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-all duration-500 group-hover:bg-brand-primary/20" />

                  <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                  <div className="relative">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#4F8F18] text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)]"
                      >
                        <I className="h-7 w-7" />
                      </motion.div>

                      <span className="rounded-full border border-brand-primary/10 bg-brand-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
                        0{i + 1}
                      </span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                      {s.audience}
                    </p>

                    <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight text-[#111827] sm:text-3xl">
                      {s.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
                      {s.desc}
                    </p>

                    <div className="mt-6 space-y-3">
                      {s.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-start gap-3 rounded-2xl border border-brand-primary/10 bg-white/70 p-3 text-sm text-zinc-700 shadow-sm transition-all duration-300 group-hover:border-brand-primary/20"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={s.href}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-hover hover:shadow-[0_18px_45px_rgba(58,107,15,0.32)]"
                    >
                      {s.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  <div className="pointer-events-none absolute bottom-5 right-5 opacity-[0.05] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.09]">
                    <I className="h-36 w-36 text-brand-primary" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </Layout>
  );
}