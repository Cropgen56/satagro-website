import { useMemo, useState } from "react";
import { Check, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@components/ui/SectionLabel";
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
      { text: "Crop Health & NDVI Tracking",       available: true },
      { text: "Soil Analysis & Health Scores",      available: true },
      { text: "7-Day Weather Forecast",             available: true },
      { text: "Vegetation Indices (NDVI, EVI)",     available: true },
      { text: "Water Stress Indices (NDWI)",        available: false },
      { text: "Evapotranspiration Monitoring",      available: false },
      { text: "AI AgGPT Advisory",                 available: false },
      { text: "PDF Farm Reports",                  available: false },
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
      { text: "Crop Health & Yield Prediction",    available: true },
      { text: "Soil Analysis & Health Scores",     available: true },
      { text: "14-Day Advanced Weather Analytics", available: true },
      { text: "30+ Vegetation & Soil Indices",     available: true },
      { text: "Water & Drought Indices (NDWI)",    available: true },
      { text: "Evapotranspiration Monitoring",     available: true },
      { text: "AI AgGPT Advisory (Multilingual)",  available: true },
      { text: "Automated PDF Farm Reports",        available: true },
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
      { text: "Unlimited Farm Profiles",           available: true },
      { text: "Multi-User Team Dashboard",         available: true },
      { text: "API Access & Data Export",          available: true },
      { text: "Custom Satellite Indices",          available: true },
      { text: "Dedicated Account Manager",         available: true },
      { text: "On-premise Deployment Option",      available: true },
      { text: "SLA & Priority Support",            available: true },
      { text: "Training & Onboarding",             available: true },
      { text: "White-label Option",                available: true },
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
          return { ...plan, price: `₹${yearly}`, unit: "/ha/year", saveBadge: "Save 20%" };
        }
        return plan;
      });
    }
    return monthlyPlans;
  }, [billingCycle]);

  return (
    <section id="pricing" className="py-24 bg-hero-gradient">
      <div className="container-wrap">
        <SectionLabel
          align="center"
          label="Pricing"
          title="Affordable Plans for Every Farm Size"
          subtitle="Start for free, upgrade as you grow. All plans include a 14-day free trial."
        />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`transition ${billingCycle === "monthly" ? "text-ember-text" : "text-zinc-400 hover:text-zinc-600"}`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBillingCycle((c) => (c === "monthly" ? "yearly" : "monthly"))}
            className="relative h-7 w-12 rounded-full bg-brand-primary p-0.5 transition focus:outline-none"
            aria-label="Toggle billing cycle"
          >
            <motion.span
              layout
              className="block h-6 w-6 rounded-full bg-white shadow"
              animate={{ x: billingCycle === "yearly" ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>

          <span className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`transition ${billingCycle === "yearly" ? "text-ember-text" : "text-zinc-400 hover:text-zinc-600"}`}
            >
              Yearly
            </button>
            <AnimatePresence>
              {billingCycle === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="rounded-full bg-brand-primary px-2 py-0.5 text-xs font-bold text-white"
                >
                  2 months free
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 ${
                  plan.id === "premium"
                    ? "border-brand-primary bg-white shadow-glow-sm ring-1 ring-brand-primary/20"
                    : "border-app-border bg-white hover:border-brand-primary/40 hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 rounded-full bg-brand-primary px-4 py-1 text-xs font-bold text-white shadow-glow-sm">
                      <Zap className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-ember-text">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-5xl font-extrabold text-brand-primary">
                      {plan.price}
                    </span>
                    <span className="mb-1 text-sm text-zinc-500">{plan.unit}</span>
                  </div>
                  {billingCycle === "yearly" && plan.saveBadge && (
                    <p className="mt-1 text-xs font-semibold text-brand-primary">{plan.saveBadge}</p>
                  )}
                </div>

                <div className="mt-7 flex-1 border-t border-app-border pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        {f.available ? (
                          <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-primary" />
                        ) : (
                          <X className="mt-0.5 h-4.5 w-4.5 shrink-0 text-zinc-300" />
                        )}
                        <span className={f.available ? "text-zinc-700" : "text-zinc-400"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={plan.id === "enterprise" ? "/contact" : appUrl}
                    className={`block w-full rounded-full py-3 text-center font-bold transition-all ${
                      plan.id === "premium"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.id === "enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </a>
                  {plan.id !== "enterprise" && (
                    <p className="mt-2 text-center text-xs text-zinc-400">
                      No credit card required
                    </p>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.35}>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Need a custom quote for your cooperative or state scheme?{" "}
            <a href="/contact" className="font-semibold text-brand-primary hover:underline underline-offset-2">
              Talk to our team →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}