import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const appUrl = "https://app.satagro.ai";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Solutions", href: "/solutions" },
      { label: "Platform", href: appUrl, external: true },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "For Farmers", href: "/solutions" },
      { label: "For FPOs", href: "/solutions" },
      { label: "For Agri-cos", href: "/solutions" },
      { label: "Enterprise", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Satellite Indices Guide", href: "/blog" },
      { label: "Case Studies", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

const socials = [
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/917012804255", label: "WhatsApp" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-app-border bg-[#F7FBF5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(58,107,15,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.14),transparent_25%),linear-gradient(180deg,#F8FCF6_0%,#F4FAF0_50%,#EDF7E8_100%)]" />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(58,107,15,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(58,107,15,0.04)_1px,transparent_1px)] bg-[size:42px_42px]"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-brand-primary/15 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[140px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wrap relative py-20">
        <div className="grid gap-14 border-b border-brand-primary/10 pb-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Link to="/" aria-label="SatAgro home" className="inline-block">
              <img
                src="/logo.png"
                alt="SatAgro.AI"
                className="h-28 w-auto object-contain lg:h-32"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base">
              Satellite intelligence for every field — real-time NDVI, AI
              advisory, and hyper-local weather to help Indian farmers make
              confident decisions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/50 px-4 py-2 text-xs font-semibold text-brand-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Built for smarter farming
            </div>
          </div>

          <div className="rounded-3xl border border-brand-primary/10 bg-white/40 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-glow-sm">
              <Mail className="h-5 w-5" />
            </div>

            <p className="font-display text-lg font-extrabold text-[#111827]">
              Stay Updated
            </p>

            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Weekly farming insights and satellite tips. No spam.
            </p>

            {subscribed ? (
              <p className="mt-4 rounded-2xl bg-brand-primary/10 px-4 py-3 text-sm font-semibold text-brand-primary">
                ✅ You're subscribed! Check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12 flex-1 rounded-full border border-app-border bg-white/80 px-4 text-sm text-ember-text shadow-sm backdrop-blur-sm focus:border-brand-primary focus:outline-none"
                  required
                />

                <button
                  type="submit"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-b border-brand-primary/10 py-12 text-sm md:grid-cols-4">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-lg font-extrabold text-[#111827]">
                {col.heading}
              </h4>

              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-brand-primary"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="inline-block text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-brand-primary"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-sm text-zinc-500 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
            <p>
              © {new Date().getFullYear()} SatAgro.AI — Powered By Threedot Technologies
            </p>

            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-brand-primary"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="transition-colors hover:text-brand-primary"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/10 bg-white/70 text-zinc-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_10px_30px_rgba(58,107,15,0.25)]"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}