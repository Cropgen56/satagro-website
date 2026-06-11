import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Sparkles,
  Satellite,
  Radar,
  Leaf,
  ArrowRight,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  organization: z.string().min(2, "Please enter your organisation or farm name"),
  topic: z.string().min(2, "Please select a topic"),
  message: z.string().min(10, "Please provide more details"),
});

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value:
      "Thavakkara Complex, Near Sunitha Furniture, Thavakkara, Kannur, Kerala — 670002",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@satagro.ai",
    href: "mailto:support@satagro.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70128 04255",
    href: "tel:+917012804255",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon–Sat, 9 AM – 6 PM IST",
  },
];

const floatingIcons = [
  { Icon: Satellite, top: "18%", left: "10%", delay: 0 },
  { Icon: Radar, top: "22%", left: "84%", delay: 0.6 },
  { Icon: Leaf, top: "72%", left: "12%", delay: 1.1 },
  { Icon: Sparkles, top: "70%", left: "86%", delay: 1.6 },
];

const inputClass =
  "h-13 w-full rounded-2xl border-2 border-[#DDE8D6] bg-white px-5 py-4 text-sm text-[#111827] shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 hover:border-[#C7D9BD] focus:border-[#4F8F18] focus:ring-4 focus:ring-[#4F8F18]/10";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (values) => {
    const apiBaseUrl =
      import.meta.env.VITE_API_BASE_URL ||
      import.meta.env.VITE_CROPGEN_SERVER_URL ||
      "http://localhost:7070";

    const normalizedApiBaseUrl = String(apiBaseUrl).replace(/\/+$/, "");

    const payload = {
      ...values,
      source: "satagro",
      message: values.message,
      content: values.message,
    };

    const response = await fetch(
      `${normalizedApiBaseUrl}/v1/api/common/contact-us`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {
      throw new Error(data?.message || "Failed to send your message.");
    }

    toast.success("Message sent! We'll get back to you within 24 hours. 🌿");
    reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | SatAgro.AI</title>
        <meta
          name="description"
          content="Get in touch with the SatAgro.AI team for demos, sales inquiries, technical support, or partnership discussions."
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

        <div className="container-wrap relative">
          <ScrollReveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#BDEFA4] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              Contact
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
              Talk to Our{" "}
              <span className="bg-gradient-to-r from-[#9FE870] to-[#F59E0B] bg-clip-text text-transparent">
                Team
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              Share your farm monitoring goals and we'll help you get started
              within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBF5] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(58,107,15,0.12),transparent_28%),radial-gradient(circle_at_90%_45%,rgba(245,158,11,0.1),transparent_28%)]" />

        <div className="container-wrap relative grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <ScrollReveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white p-6 shadow-[0_18px_60px_rgba(58,107,15,0.09)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#F59E0B]/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)]">
                    <Send className="h-6 w-6" />
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#111827]">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Fill the details below and our team will contact you within
                    24 hours.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Enter your name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Email Address" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <FormField label="Phone Number" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Farm / Organisation"
                    error={errors.organization?.message}
                  >
                    <input
                      {...register("organization")}
                      placeholder="Farm or company name"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField label="Topic" error={errors.topic?.message}>
                    <select
                      {...register("topic")}
                      className={`${inputClass} text-zinc-600`}
                    >
                      <option value="">Select a topic</option>
                      <option>Product Demo Request</option>
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>FPO / Enterprise Partnership</option>
                      <option>Government / Research Collaboration</option>
                      <option>General Inquiry</option>
                    </select>
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField label="Message" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your farm, hectares managed, crop type, and what you need help with..."
                      className={`${inputClass} min-h-[150px] resize-none`}
                    />
                  </FormField>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-[#4F8F18] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(58,107,15,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(58,107,15,0.32)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-4 text-center text-xs text-zinc-400">
                  Your information is secure and will never be shared.
                </p>
              </div>
            </form>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="rounded-[2rem] border border-brand-primary/10 bg-white/75 p-7 shadow-[0_18px_60px_rgba(58,107,15,0.09)] backdrop-blur-xl">
                <h2 className="text-2xl font-extrabold text-[#111827]">
                  Contact Information
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Our team is available to help with demos, onboarding, and
                  support.
                </p>

                <div className="mt-7 space-y-5">
                  {contactInfo.map((item) => {
                    const I = item.icon;

                    return (
                      <div key={item.label} className="flex gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                          <I className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                            {item.label}
                          </p>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-brand-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm leading-relaxed text-zinc-700">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/917012804255"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[2rem] border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition hover:bg-[#25D366]/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                  <FaWhatsapp className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-lg font-extrabold text-[#111827]">
                    WhatsApp Us
                  </p>
                  <p className="text-sm text-zinc-500">
                    Quick support available on WhatsApp
                  </p>
                </div>

                <ArrowRight className="ml-auto h-5 w-5 text-[#25D366] transition-transform group-hover:translate-x-1" />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#07130A] p-7 text-center text-white shadow-[0_24px_70px_rgba(7,19,10,0.24)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.2),transparent_25%)]" />

                <div className="relative">
                  <p className="text-lg font-extrabold">
                    Ready to see SatAgro in action?
                  </p>

                  <p className="mx-auto mt-2 max-w-xs text-sm text-white/60">
                    Start monitoring your farm immediately — no demo needed.
                  </p>

                  <a
                    href="https://app.satagro.ai"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9FE870] to-[#F59E0B] px-6 py-3 text-sm font-bold text-[#07130A]"
                  >
                    Launch Platform
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FormField({ label, children, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </span>

      {children}

      {error ? (
        <p className="mt-1.5 text-xs font-medium text-status-red">{error}</p>
      ) : null}
    </label>
  );
}