import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sparkles,
  Satellite,
  Cpu,
  Leaf,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import FeaturesSection from "@components/sections/Features";
import HowItWorks from "@components/sections/HowItWorks";
import SatelliteIndices from "@components/sections/SatelliteIndices";
import CTA from "@components/sections/CTA";
import ScrollReveal from "@components/ui/ScrollReveal";

const floatingIcons = [
  { Icon: Satellite, top: "20%", left: "12%", delay: 0 },
  { Icon: Cpu, top: "22%", left: "84%", delay: 0.5 },
  { Icon: Leaf, top: "72%", left: "15%", delay: 1 },
  { Icon: Sparkles, top: "70%", left: "82%", delay: 1.5 },
];

export default function Features() {
  return (
    <Layout>
      <Helmet>
        <title>Features | SatAgro.AI</title>
        <meta
          name="description"
          content="Explore SatAgro.AI features — 30+ satellite indices, AI crop advisory, disease detection, yield prediction, and hyper-local weather intelligence."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-app-border bg-[#07130A] py-24 text-center text-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.22),transparent_25%)]" />

        {/* Animated Grid */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]"
          animate={{
            backgroundPosition: ["0px 0px", "42px 42px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Glow Blobs */}
        <motion.div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9FE870]/10 blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        {/* Floating Icons */}
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

        {/* Floating Particles */}
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

        {/* Scanning Line */}
        <motion.div
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#9FE870] to-transparent"
          animate={{ y: [0, 320, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <div className="container-wrap relative">
          <ScrollReveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#BDEFA4] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              Platform Features
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
              Built for the{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Modern Farmer
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              Everything you need to monitor, analyse, and optimise your
              fields — powered by satellite intelligence, AI insights,
              crop monitoring and hyper-local weather forecasting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FeaturesSection />
      <HowItWorks />
      <SatelliteIndices />
      <CTA />
    </Layout>
  );
}