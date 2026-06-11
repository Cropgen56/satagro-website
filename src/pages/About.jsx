import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Satellite,
  ShieldCheck,
  Globe2,
  Users2,
  Sparkles,
  ArrowRight,
  Leaf,
  Radar,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";

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

const floatingIcons = [
  { Icon: Satellite, top: "18%", left: "10%", delay: 0 },
  { Icon: Radar, top: "22%", left: "84%", delay: 0.6 },
  { Icon: Leaf, top: "72%", left: "12%", delay: 1.1 },
  { Icon: Sparkles, top: "70%", left: "86%", delay: 1.6 },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | SatAgro.AI</title>
        <meta
          name="description"
          content="Learn about SatAgro.AI's mission to democratise satellite intelligence for Indian farmers."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-app-border bg-[#07130A] py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.2),transparent_25%)]" />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]"
          animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {floatingIcons.map(({ Icon, top, left, delay }, i) => (
          <motion.div
            key={i}
            className="absolute hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#BDEFA4] backdrop-blur-md sm:flex"
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

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#9FE870]/60"
            style={{
              left: `${10 + i * 8}%`,
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
          animate={{ y: [0, 360, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-wrap relative max-w-4xl text-center">
          <ScrollReveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#BDEFA4] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              Our Story
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Giving Every Farmer a{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Satellite
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              SatAgro.AI was founded with one belief: precision agriculture
              shouldn't be a privilege for large agri-businesses. Every Indian
              farmer should have access to real-time satellite data, AI insights,
              and actionable advice.
            </p>

            <motion.a
              href="https://app.satagro.ai"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9FE870] to-[#F59E0B] px-8 py-4 font-bold text-[#07130A] shadow-[0_0_30px_rgba(159,232,112,0.35)]"
            >
              Start Monitoring Your Farm
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBF5] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(58,107,15,0.12),transparent_28%),radial-gradient(circle_at_90%_45%,rgba(245,158,11,0.1),transparent_28%)]" />

        <div className="container-wrap relative">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
                Our Values
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#111827] md:text-5xl">
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {values.map((v, i) => {
              const I = v.icon;

              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-full overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white/75 p-7 shadow-[0_18px_60px_rgba(58,107,15,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/25 hover:bg-white hover:shadow-[0_28px_90px_rgba(58,107,15,0.16)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-amber-400/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-all duration-500 group-hover:bg-brand-primary/20" />

                    <div className="relative flex gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#4F8F18] text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)]">
                        <I className="h-7 w-7" />
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-[#111827]">
                          {v.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                          {v.desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

   <section className="relative overflow-hidden bg-white py-24">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(58,107,15,0.10),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.10),transparent_30%)]" />

  <motion.div
    className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(58,107,15,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(58,107,15,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"
    animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
  />

  <div className="container-wrap relative max-w-4xl">
    <ScrollReveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
          Journey
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-[#111827] md:text-5xl">
          From Idea to{" "}
          <span className="bg-gradient-to-r from-[#3A6B0F] to-[#F59E0B] bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
      </div>
    </ScrollReveal>

    <div className="relative mt-16">
      <motion.div
        className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#9FE870] via-brand-primary to-[#F59E0B] md:left-1/2"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="space-y-10">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;

          return (
            <ScrollReveal key={m.year} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative grid gap-5 md:grid-cols-2 ${
                  isLeft ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-brand-primary/10 bg-white/80 p-5 shadow-[0_18px_55px_rgba(58,107,15,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_24px_80px_rgba(58,107,15,0.16)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-amber-400/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-primary/10 blur-3xl transition-all duration-500 group-hover:bg-brand-primary/20" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#4F8F18] text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)]">
                        {m.year.slice(2)}
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-brand-primary">
                          {m.year}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                          {m.event}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.div>
                </div>

                <div className="hidden md:block" />

                <motion.div
                  className="absolute left-[13px] top-6 z-10 h-4 w-4 rounded-full bg-[#9FE870] shadow-[0_0_0_8px_rgba(159,232,112,0.15),0_0_30px_rgba(159,232,112,0.8)] md:left-1/2 md:-translate-x-1/2"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </div>
</section>

      <section className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-16 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.2),transparent_25%)]" />

        <div className="container-wrap relative">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to join the{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                mission?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Monitor your farm from space. Start free today.
            </p>

            <motion.a
              href="https://app.satagro.ai"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9FE870] to-[#F59E0B] px-8 py-4 font-bold text-[#07130A]"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}