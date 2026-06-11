import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sparkles,
  Satellite,
  Radar,
  Leaf,
  ArrowRight,
  Clock,
  CalendarDays,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";

const posts = [
  {
    category: "Guides",
    title: "Understanding NDVI: What Your Crop Colours Mean From Space",
    excerpt:
      "Learn how the Normalized Difference Vegetation Index works, how to read the colour scale, and what actions to take at different NDVI levels.",
    date: "April 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Case Studies",
    title: "How a Soybean Farmer in MP Increased Yield by 18% Using AI Advisory",
    excerpt:
      "Sunil Yadav from Madhya Pradesh shares how SatAgro's Hindi-language advisory transformed his soybean cultivation this season.",
    date: "April 8, 2026",
    readTime: "4 min read",
  },
  {
    category: "Technology",
    title: "Sentinel-2 vs Landsat — Which Satellite Data Is Better for Indian Farms?",
    excerpt:
      "A detailed comparison of the two satellite systems we use — resolution, revisit time, and which is better for different use cases.",
    date: "March 30, 2026",
    readTime: "8 min read",
  },
  {
    category: "Weather",
    title: "Preparing Your Farm for the 2026 Kharif Season: A Satellite-Based Planting Guide",
    excerpt:
      "Using historical NDWI and soil moisture data to time your sowing date with satellite precision.",
    date: "March 22, 2026",
    readTime: "5 min read",
  },
  {
    category: "Guides",
    title: "Top 5 Signs of Nitrogen Deficiency Visible From Satellite — And How to Fix Them",
    excerpt:
      "EVI and NDRE drop months before yellowing appears. Here's how to spot nitrogen deficiency early and calculate the right urea dose.",
    date: "March 10, 2026",
    readTime: "7 min read",
  },
  {
    category: "Disease Detection",
    title: "How AI Detected Yellow Rust in Wheat Fields 12 Days Before Visual Symptoms",
    excerpt:
      "A breakdown of how our ML model flags early disease signatures from spectral data and what actions it recommends.",
    date: "February 28, 2026",
    readTime: "5 min read",
  },
];

const categoryColors = {
  Guides: "bg-blue-50 text-blue-600 border-blue-100",
  "Case Studies": "bg-emerald-50 text-emerald-600 border-emerald-100",
  Technology: "bg-violet-50 text-violet-600 border-violet-100",
  Weather: "bg-sky-50 text-sky-600 border-sky-100",
  "Disease Detection": "bg-rose-50 text-rose-600 border-rose-100",
};

const floatingIcons = [
  { Icon: Satellite, top: "18%", left: "10%", delay: 0 },
  { Icon: Radar, top: "22%", left: "84%", delay: 0.6 },
  { Icon: Leaf, top: "72%", left: "12%", delay: 1.1 },
  { Icon: Sparkles, top: "70%", left: "86%", delay: 1.6 },
];

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>Blog | SatAgro.AI</title>
        <meta
          name="description"
          content="Satellite farming insights, NDVI guides, case studies, and precision agriculture resources from the SatAgro.AI team."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-app-border bg-[#07130A] py-24 text-center text-white">
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
          animate={{ y: [0, 320, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-wrap relative">
          <ScrollReveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#BDEFA4] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              Blog
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
              Satellite Farming{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              Guides, case studies, and deep-dives from our agronomy and data
              science teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBF5] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(58,107,15,0.12),transparent_28%),radial-gradient(circle_at_90%_45%,rgba(245,158,11,0.1),transparent_28%)]" />

        <div className="container-wrap relative">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={(i % 3) * 0.08}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white/75 p-6 shadow-[0_18px_60px_rgba(58,107,15,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/25 hover:bg-white hover:shadow-[0_28px_90px_rgba(58,107,15,0.16)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-amber-400/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-all duration-500 group-hover:bg-brand-primary/20" />

                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${
                          categoryColors[post.category] ||
                          "border-zinc-100 bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {post.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold leading-snug text-[#111827] transition-colors group-hover:text-brand-primary">
                      {post.title}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-brand-primary/10 pt-4 text-xs">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>

                      <span className="inline-flex items-center gap-1 font-bold text-brand-primary">
                        Read More
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}