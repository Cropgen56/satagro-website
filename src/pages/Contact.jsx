import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const schema = z.object({
  name:         z.string().min(2,  "Name must be at least 2 characters"),
  email:        z.string().email("Please enter a valid email address"),
  phone:        z.string().min(8,  "Please enter a valid phone number"),
  organization: z.string().min(2,  "Please enter your organisation or farm name"),
  topic:        z.string().min(2,  "Please select a topic"),
  message:      z.string().min(10, "Please provide more details (10+ characters)"),
});

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Thavakkara Complex, Near Sunitha Furniture, Thavakkara, Kannur, Kerala — 670002",
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
      "https://server.cropgenapp.com";
    const normalizedApiBaseUrl = String(apiBaseUrl).replace(/\/+$/, "");
    const payload = {
      ...values,
      // Keep both keys for backward compatibility with server handlers.
      message: values.message,
      content: values.message,
    };

    const response = await fetch(`${normalizedApiBaseUrl}/v1/api/common/contact-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {
      throw new Error(
        data?.message ||
          `Failed to send your message (${response.status}). Please try again.`,
      );
    }

    toast.success("Message sent! We'll get back to you within 24 hours. 🌿", {
      duration: 5000,
    });
    reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | SatAgro.AI</title>
        <meta name="description" content="Get in touch with the SatAgro.AI team for demos, sales inquiries, technical support, or partnership discussions." />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container-wrap text-center">
          <ScrollReveal>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">Contact</p>
            <h1 className="font-display text-5xl font-extrabold text-ember-text">Talk to Our Team</h1>
            <p className="mx-auto mt-4 max-w-md text-zinc-500">
              Share your farm monitoring goals and we'll help you get started within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wrap grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <ScrollReveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-app-border bg-white p-8 shadow-card-dark"
            >
              <h2 className="font-display text-2xl font-bold text-ember-text">Send us a message</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="h-12 w-full rounded-xl border border-app-border bg-app-panel px-4 text-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                  {errors.name && <p className="mt-1 text-xs text-status-red">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Email Address"
                    type="email"
                    className="h-12 w-full rounded-xl border border-app-border bg-app-panel px-4 text-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                  {errors.email && <p className="mt-1 text-xs text-status-red">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    type="tel"
                    className="h-12 w-full rounded-xl border border-app-border bg-app-panel px-4 text-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-status-red">{errors.phone.message}</p>}
                </div>
                <div>
                  <input
                    {...register("organization")}
                    placeholder="Farm / Organisation Name"
                    className="h-12 w-full rounded-xl border border-app-border bg-app-panel px-4 text-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                  {errors.organization && <p className="mt-1 text-xs text-status-red">{errors.organization.message}</p>}
                </div>
              </div>

              <div>
                <select
                  {...register("topic")}
                  className="h-12 w-full rounded-xl border border-app-border bg-app-panel px-4 text-sm text-zinc-600 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                >
                  <option value="">Select a topic</option>
                  <option>Product Demo Request</option>
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>FPO / Enterprise Partnership</option>
                  <option>Government / Research Collaboration</option>
                  <option>General Inquiry</option>
                </select>
                {errors.topic && <p className="mt-1 text-xs text-status-red">{errors.topic.message}</p>}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your farm, how many hectares you manage, and what you're hoping to achieve..."
                  className="w-full rounded-xl border border-app-border bg-app-panel p-4 text-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-status-red">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary h-12 w-full disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>

              <p className="text-center text-xs text-zinc-400">
                We respond within 1 business day. Your data is never shared.
              </p>
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-app-border bg-white p-7 shadow-card-dark space-y-6">
                <h2 className="font-display text-2xl font-bold text-ember-text">Contact Information</h2>
                <p className="text-sm text-zinc-500">Our team is available to help with demos, onboarding, and support.</p>

                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const I = item.icon;
                    return (
                      <div key={item.label} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                          <I className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-zinc-700 hover:text-brand-primary transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-zinc-700">{item.value}</p>
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
                className="flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 transition hover:bg-[#25D366]/10"
              >
                <FaWhatsapp className="h-8 w-8 text-[#25D366]" />
                <div>
                  <p className="font-semibold text-ember-text">WhatsApp Us</p>
                  <p className="text-sm text-zinc-500">Quick support available on WhatsApp</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl border border-app-border bg-app-panel p-6 text-center">
                <p className="text-sm font-semibold text-ember-text">Ready to see SatAgro in action?</p>
                <p className="mt-1 text-xs text-zinc-500">Start monitoring your farm immediately — no demo needed</p>
                <a href="https://app.satagro.ai" className="btn-primary mt-4 inline-flex">
                  Launch Platform →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}