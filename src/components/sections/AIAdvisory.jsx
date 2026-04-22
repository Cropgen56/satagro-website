import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Bot, User } from "lucide-react";
import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const conversation = [
  { from: "user", text: "What is wrong with my wheat crop?" },
  {
    from: "bot",
    text: "NDVI dropped from 0.74 → 0.51 in 14 days. Pattern matches early Yellow Rust infection. Recommend Propiconazole fungicide spray within 48 hours.",
  },
  { from: "user", text: "Which fertiliser should I apply this week?" },
  {
    from: "bot",
    text: "Soil moisture is optimal (NDWI: 0.22). Low EVI suggests nitrogen deficiency. Apply urea at 30 kg/ha in the morning.",
  },
];

const features = [
  "Analyses satellite + weather + historical field data",
  "Supports 8 regional languages including Hindi & Tamil",
  "Built on agronomy best practices & ICAR guidelines",
  "Available 24/7 via app, SMS, and WhatsApp",
  "Crop-specific advice for 50+ crop varieties",
];

export default function AIAdvisory() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => (v < conversation.length - 1 ? v + 1 : v));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="advisory" className="py-24 bg-app-panel">
      <div className="container-wrap grid items-center gap-12 lg:grid-cols-2">
        {/* Chat widget */}
        <ScrollReveal delay={0.05}>
          <div className="overflow-hidden rounded-2xl border border-app-border bg-white shadow-card-dark">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-app-border bg-ember-sidebar px-5 py-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/20 text-brand-primary">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">AgGPT — AI Agronomist</p>
                <p className="text-xs text-ember-accent">Online · Answers in seconds</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-status-green/20 px-2.5 py-1 text-xs font-semibold text-status-green">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-green" />
                Live
              </span>
            </div>

            {/* Messages */}
            <div className="flex min-h-[260px] flex-col gap-3 p-5">
              {conversation.slice(0, visible + 1).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      msg.from === "user"
                        ? "bg-brand-primary text-white"
                        : "bg-ember-sidebar/10 text-ember-sidebar"
                    }`}
                  >
                    {msg.from === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-brand-primary text-white"
                        : "rounded-bl-sm border border-app-border bg-app-panel text-zinc-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {/* Typing indicator */}
              {visible < conversation.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 pl-9"
                >
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-brand-primary"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ delay: d * 0.15, repeat: Infinity, duration: 0.7 }}
                    />
                  ))}
                </motion.div>
              )}
            </div>

            <div className="border-t border-app-border px-5 py-3.5">
              <p className="text-center text-xs text-zinc-400">
                Ask AgGPT about your crop health, pests, soil, or weather
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: info */}
        <div>
          <SectionLabel
            label="AI Advisory Engine"
            title="Your 24/7 Expert Agronomist — Powered by AI"
            subtitle="AgGPT combines satellite data, real-time weather and historical crop records to give advice that actually fits your field."
          />

          <ul className="mt-8 space-y-4">
            {features.map((f, i) => (
              <ScrollReveal key={f} delay={0.06 + i * 0.07}>
                <li className="flex items-start gap-3 text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{f}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={0.45}>
            <a href="https://app.satagro.ai" className="btn-primary mt-8 inline-flex">
              Try AgGPT Free →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}