import {
  Satellite,
  BarChart2,
  Brain,
  AlertTriangle,
  Leaf,
  Cloud,
  TrendingUp,
  Map,
  FileText,
  Sparkles,
} from "lucide-react";
import {motion} from "framer-motion";

const cards = [
  {
    t: "Multi-Spectral Satellite Imagery",
    d: "High-resolution Sentinel-2 & Landsat imagery updated every 5 days.",
    i: Satellite,
    className: "lg:col-span-4 lg:row-span-2",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "30+ Vegetation & Soil Indices",
    d: "NDVI, EVI, NDWI, SAVI, LAI and more — computed automatically.",
    i: BarChart2,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "AI-Powered Crop Advisory",
    d: "Personalised recommendations in Hindi, Tamil, Kannada & more.",
    i: Brain,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "Early Disease & Pest Detection",
    d: "Spot issues weeks before they become visible to the naked eye.",
    i: AlertTriangle,
    className: "lg:col-span-3",
    img: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=1000&q=80",
  },
  {
    t: "Real-Time Crop Health Tracking",
    d: "Daily health scores with trend charts and anomaly alerts.",
    i: Leaf,
    className: "lg:col-span-3",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    t: "Hyper-Local Weather Intelligence",
    d: "5 km resolution forecasts, rain alerts, and humidity tracking.",
    i: Cloud,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "AI Yield Prediction",
    d: "Predict harvest yield weeks in advance with up to 90% accuracy.",
    i: TrendingUp,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "Precise Field Boundary Mapping",
    d: "Draw field boundaries on satellite maps — no survey required.",
    i: Map,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "Automated Farm Reports",
    d: "PDF reports with indices, health trends, and recommendations.",
    i: FileText,
    className: "lg:col-span-6",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F7FBF5] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(58,107,15,0.16),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_52%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-brand-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-ember-accent/15 blur-[110px]" />

      <div className="container-wrap relative">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Core Features
          </div>

          <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Precision farming tools,
            <br className="hidden sm:block" /> beautifully connected.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Data-rich insights and actionable advisory in one platform, built
            for Indian farming conditions.
          </p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {cards.map((c, i) => {
            const Icon = c.i;
            const isLarge = c.className.includes("row-span-2");

            return (
              <motion.article
                key={c.t}
                initial={{opacity: 0, y: 28}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.05, duration: 0.55}}
                whileHover={{y: -6}}
                className={`group relative overflow-hidden rounded-[1.6rem] border border-app-border bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#9FE870]/30 hover:shadow-[0_24px_70px_rgba(58,107,15,0.25)] ${c.className}`}
              >
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-white/90 transition-all duration-500 group-hover:bg-[#07130A]/70" />

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl transition-all duration-300 group-hover:bg-[#9FE870]/25" />

                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-[#9FE870] group-hover:text-[#07130A]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-display text-4xl font-extrabold text-brand-primary/10 transition-all duration-300 group-hover:text-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-display font-extrabold leading-snug text-ember-text transition-colors duration-300 group-hover:text-white ${
                        isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                      }`}
                    >
                      {c.t}
                    </h3>

                    <p
                      className={`mt-3 leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-white/80 ${
                        isLarge ? "max-w-lg text-sm sm:text-base" : "text-sm"
                      }`}
                    >
                      {c.d}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}