import { ArrowRight, Sparkles, Satellite, Radar, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@components/ui/ScrollReveal";

const appUrl = "https://app.satagro.ai";

const floatingIcons = [
  { Icon: Satellite, top: "16%", left: "10%", delay: 0 },
  { Icon: Radar, top: "22%", left: "84%", delay: 0.6 },
  { Icon: Leaf, top: "72%", left: "12%", delay: 1.1 },
  { Icon: Sparkles, top: "70%", left: "86%", delay: 1.6 },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-16 text-white">
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
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9FE870]/10 "
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
          style={{ left: `${10 + i * 8}%`, top: `${20 + (i % 4) * 15}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <motion.div
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#9FE870] to-transparent"
        animate={{ y: [0, 220, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-wrap relative">
        <div className="mx-auto max-w-4xl rounded-[28px]  px-6 py-10 text-center">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-[#BDEFA4]"
            >
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              </motion.div>
              Limited Early Access
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Start Monitoring Your Farm
              <span className="block bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                From Space Today
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Join thousands of farmers using satellite intelligence to grow smarter and increase productivity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                href={appUrl}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#9FE870] px-8 py-4 font-bold text-[#07130A] shadow-[0_0_30px_rgba(159,232,112,0.4)]"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur"
              >
                Schedule Demo
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.p
              className="mt-5 text-sm text-white/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              No credit card required · Setup in under 5 minutes
            </motion.p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}