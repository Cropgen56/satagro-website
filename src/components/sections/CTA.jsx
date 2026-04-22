import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@components/ui/ScrollReveal";

const appUrl = "https://app.satagro.ai";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating dots */}
      {[
        { top: "20%", left: "10%", d: 0 },
        { top: "60%", left: "85%", d: 0.6 },
        { top: "80%", left: "25%", d: 1.2 },
        { top: "15%", left: "75%", d: 1.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-white/20"
          style={{ top: dot.top, left: dot.left }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.5, delay: dot.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="container-wrap relative text-center text-white">
        <ScrollReveal>
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Limited Early Access — 3 Months Free on Pro Plan
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Start Monitoring Your Farm From Space Today
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/75">
            Join 2,400+ farmers using satellite intelligence to grow smarter, not harder.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={appUrl} className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-9 py-4 text-base font-bold text-white shadow-glow-md transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-glow-lg">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-9 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20">
              Schedule a Demo
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-sm text-white/50">
            No credit card required · Setup in under 5 minutes
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}