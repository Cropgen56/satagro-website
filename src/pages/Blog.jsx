import { Helmet } from "react-helmet-async";
import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";
import SectionLabel from "@components/ui/SectionLabel";

const posts = [
  {
    category: "Guides",
    title: "Understanding NDVI: What Your Crop Colours Mean From Space",
    excerpt: "Learn how the Normalized Difference Vegetation Index works, how to read the colour scale, and what actions to take at different NDVI levels.",
    date: "April 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Case Studies",
    title: "How a Soybean Farmer in MP Increased Yield by 18% Using AI Advisory",
    excerpt: "Sunil Yadav from Madhya Pradesh shares how SatAgro's Hindi-language advisory transformed his soybean cultivation this season.",
    date: "April 8, 2026",
    readTime: "4 min read",
  },
  {
    category: "Technology",
    title: "Sentinel-2 vs Landsat — Which Satellite Data Is Better for Indian Farms?",
    excerpt: "A detailed comparison of the two satellite systems we use — resolution, revisit time, and which is better for different use cases.",
    date: "March 30, 2026",
    readTime: "8 min read",
  },
  {
    category: "Weather",
    title: "Preparing Your Farm for the 2026 Kharif Season: A Satellite-Based Planting Guide",
    excerpt: "Using historical NDWI and soil moisture data to time your sowing date with satellite precision.",
    date: "March 22, 2026",
    readTime: "5 min read",
  },
  {
    category: "Guides",
    title: "Top 5 Signs of Nitrogen Deficiency Visible From Satellite — And How to Fix Them",
    excerpt: "EVI and NDRE drop months before yellowing appears. Here's how to spot nitrogen deficiency early and calculate the right urea dose.",
    date: "March 10, 2026",
    readTime: "7 min read",
  },
  {
    category: "Disease Detection",
    title: "How AI Detected Yellow Rust in Wheat Fields 12 Days Before Visual Symptoms",
    excerpt: "A breakdown of how our ML model flags early disease signatures from spectral data and what actions it recommends.",
    date: "February 28, 2026",
    readTime: "5 min read",
  },
];

const categoryColors = {
  Guides:             "bg-blue-50 text-blue-600",
  "Case Studies":     "bg-emerald-50 text-emerald-600",
  Technology:         "bg-violet-50 text-violet-600",
  Weather:            "bg-sky-50 text-sky-600",
  "Disease Detection": "bg-rose-50 text-rose-600",
};

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>Blog | SatAgro.AI</title>
        <meta name="description" content="Satellite farming insights, NDVI guides, case studies, and precision agriculture resources from the SatAgro.AI team." />
      </Helmet>

      <section className="bg-hero-gradient py-24 text-center">
        <div className="container-wrap">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">Blog</p>
            <h1 className="font-display text-5xl font-extrabold text-ember-text md:text-6xl">
              Satellite Farming Insights
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg text-zinc-500">
              Guides, case studies, and deep-dives from our agronomy and data science teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-app-border bg-white p-6 shadow-sm card-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColors[post.category] || "bg-zinc-100 text-zinc-600"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold leading-snug text-ember-text group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-app-border pt-4 text-xs text-zinc-400">
                    <span>{post.date}</span>
                    <span className="font-semibold text-brand-primary group-hover:underline underline-offset-2">
                      Read More →
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}