import { useMemo, useState } from "react";
import { Check, X, Zap, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@components/ui/ScrollReveal";

const appUrl = "https://app.satagro.ai";

const monthlyPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹399",
    unit: "/ha/month",
    description: "Essential crop monitoring and advisory tools for small farms.",
    badge: null,
    features: [
      { text: "Satellite Imagery (10-day revisit)", available: true },
      { text: "Crop Health & NDVI Tracking", available: true },
      { text: "Soil Analysis & Health Scores", available: true },
      { text: "7-Day Weather Forecast", available: true },
      { text: "Vegetation Indices (NDVI, EVI)", available: true },
      { text: "Water Stress Indices (NDWI)", available: false },
      { text: "Evapotranspiration Monitoring", available: false },
      { text: "AI AgGPT Advisory", available: false },
      { text: "PDF Farm Reports", available: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹799",
    unit: "/ha/month",
    description: "Full precision farming suite with AI advisory and 30+ indices.",
    badge: "Most Popular",
    features: [
      { text: "Satellite Imagery (5-day revisit)", available: true },
      { text: "Crop Health & Yield Prediction", available: true },
      { text: "Soil Analysis & Health Scores", available: true },
      { text: "14-Day Advanced Weather Analytics", available: true },
      { text: "30+ Vegetation & Soil Indices", available: true },
      { text: "Water & Drought Indices (NDWI)", available: true },
      { text: "Evapotranspiration Monitoring", available: true },
      { text: "AI AgGPT Advisory (Multilingual)", available: true },
      { text: "Automated PDF Farm Reports", available: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    unit: "Tailored to your scale",
    description: "For FPOs, agricultural companies, and government agencies.",
    badge: null,
    features: [
      { text: "Unlimited Farm Profiles", available: true },
      { text: "Multi-User Team Dashboard", available: true },
      { text: "API Access & Data Export", available: true },
      { text: "Custom Satellite Indices", available: true },
      { text: "Dedicated Account Manager", available: true },
      { text: "On-premise Deployment Option", available: true },
      { text: "SLA & Priority Support", available: true },
      { text: "Training & Onboarding", available: true },
      { text: "White-label Option", available: true },
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = useMemo(() => {
    if (billingCycle === "yearly") {
      return monthlyPlans.map((plan) => {
        if (plan.price.startsWith("₹")) {
          const val = Number(plan.price.replace("₹", ""));
          const yearly = Math.round(val * 12 * 0.8);

          return {
            ...plan,
            price: `₹${yearly}`,
            unit: "/ha/year",
            saveBadge: "Save 20%",
          };
        }

        return plan;
      });
    }

    return monthlyPlans;
  }, [billingCycle]);

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#F7FBF5] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(58,107,15,0.14),transparent_28%),radial-gradient(circle_at_90%_35%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F7FBF5_45%,#EEF8E8_100%)]" />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(58,107,15,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(58,107,15,0.035)_1px,transparent_1px)] bg-[size:44px_44px]"
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-wrap relative">
        <ScrollReveal>
          <div className="mx-auto text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Pricing
            </div>

            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
              <span className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#234607] bg-clip-text text-transparent">
                Affordable Plans for
              </span>{" "}
              <span className="bg-gradient-to-r from-[#3A6B0F] via-[#4F8F18] to-[#F59E0B] bg-clip-text text-transparent">
                Every Farm Size
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
              Start for free, upgrade as you grow. All plans include a 14-day
              free trial.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`transition ${
              billingCycle === "monthly"
                ? "text-[#111827]"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() =>
              setBillingCycle((c) => (c === "monthly" ? "yearly" : "monthly"))
            }
            className="relative h-8 w-14 rounded-full bg-brand-primary p-1 shadow-[0_10px_30px_rgba(58,107,15,0.25)] transition focus:outline-none"
            aria-label="Toggle billing cycle"
          >
            <motion.span
              layout
              className="block h-6 w-6 rounded-full bg-white shadow"
              animate={{ x: billingCycle === "yearly" ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>

          <span className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`transition ${
                billingCycle === "yearly"
                  ? "text-[#111827]"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
            >
              Yearly
            </button>

            <AnimatePresence>
              {billingCycle === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 4 }}
                  className="rounded-full bg-brand-primary px-2.5 py-1 text-xs font-bold text-white"
                >
                  2 months free
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const isPremium = plan.id === "premium";

            return (
              <ScrollReveal key={plan.id} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition-all duration-300 ${
                    isPremium
                      ? "border-[#9FE870]/20 bg-[#07130A] text-white shadow-[0_30px_90px_rgba(7,19,10,0.35)] lg:-mt-5"
                      : "border-brand-primary/10 bg-white/80 text-[#111827] shadow-[0_18px_60px_rgba(58,107,15,0.09)] hover:border-brand-primary/25 hover:bg-white hover:shadow-[0_28px_90px_rgba(58,107,15,0.16)]"
                  }`}
                >
                  {isPremium && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.2),transparent_25%)]" />

                      <motion.div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
                        animate={{
                          backgroundPosition: ["0px 0px", "32px 32px"],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#9FE870]/10 blur-3xl"
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />

                      <motion.div
                        className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-[#F59E0B]/10 blur-3xl"
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                      />

                      {[...Array(7)].map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          className="absolute h-1.5 w-1.5 rounded-full bg-[#9FE870]/55"
                          style={{
                            left: `${12 + dotIndex * 12}%`,
                            top: `${18 + (dotIndex % 4) * 16}%`,
                          }}
                          animate={{
                            y: [0, -14, 0],
                            opacity: [0.25, 1, 0.25],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 3 + dotIndex * 0.25,
                            repeat: Infinity,
                            delay: dotIndex * 0.18,
                          }}
                        />
                      ))}

                      <motion.div
                        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#9FE870] to-transparent"
                        animate={{ y: [0, 420, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </>
                  )}

                  {!isPremium && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-amber-400/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-all duration-500 group-hover:bg-brand-primary/20" />
                      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />
                    </>
                  )}

                  {plan.badge && (
                    <div className="absolute right-6 top-6 z-10">
                      <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#9FE870] to-[#F59E0B] px-4 py-1.5 text-xs font-extrabold text-[#07130A] shadow-[0_0_30px_rgba(159,232,112,0.4)]">
                        <Zap className="h-3 w-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.22em] ${
                        isPremium ? "text-[#BDEFA4]" : "text-brand-primary"
                      }`}
                    >
                      {plan.name}
                    </p>

                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isPremium ? "text-white/70" : "text-zinc-500"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mt-7">
                      <div className="flex items-end gap-1">
                        <span
                          className={`font-display text-5xl font-extrabold ${
                            isPremium
                              ? "bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent"
                              : "text-brand-primary"
                          }`}
                        >
                          {plan.price}
                        </span>

                        <span
                          className={`mb-1 text-sm ${
                            isPremium ? "text-white/50" : "text-zinc-500"
                          }`}
                        >
                          {plan.unit}
                        </span>
                      </div>

                      {billingCycle === "yearly" && plan.saveBadge && (
                        <p
                          className={`mt-2 text-xs font-bold ${
                            isPremium ? "text-[#BDEFA4]" : "text-brand-primary"
                          }`}
                        >
                          {plan.saveBadge}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`relative mt-7 flex-1 border-t pt-6 ${
                      isPremium ? "border-white/10" : "border-brand-primary/10"
                    }`}
                  >
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f.text}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          {f.available ? (
                            <Check
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                isPremium
                                  ? "text-[#9FE870]"
                                  : "text-brand-primary"
                              }`}
                            />
                          ) : (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300" />
                          )}

                          <span
                            className={
                              f.available
                                ? isPremium
                                  ? "text-white/80"
                                  : "text-zinc-700"
                                : isPremium
                                ? "text-white/30"
                                : "text-zinc-400"
                            }
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-8 pt-2">
                    <a
                      href={plan.id === "enterprise" ? "/contact" : appUrl}
                      className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-bold transition-all ${
                        isPremium
                          ? "bg-gradient-to-r from-[#9FE870] to-[#F59E0B] text-[#07130A] shadow-[0_0_35px_rgba(159,232,112,0.35)] hover:brightness-110"
                          : "border border-brand-primary/15 bg-white text-brand-primary shadow-sm hover:-translate-y-1 hover:bg-brand-primary hover:text-white"
                      }`}
                    >
                      {plan.id === "enterprise"
                        ? "Contact Sales"
                        : "Start Free Trial"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>

                    {plan.id !== "enterprise" && (
                      <p
                        className={`mt-3 text-center text-xs ${
                          isPremium ? "text-white/50" : "text-zinc-400"
                        }`}
                      >
                        No credit card required
                      </p>
                    )}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      isPremium
                        ? "bg-gradient-to-r from-[#9FE870] to-[#F59E0B]"
                        : "bg-gradient-to-r from-brand-primary to-[#F59E0B]"
                    }`}
                  />
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.35}>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Need a custom quote for your cooperative or state scheme?{" "}
            <a
              href="/contact"
              className="font-semibold text-brand-primary underline-offset-2 hover:underline"
            >
              Talk to our team →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}