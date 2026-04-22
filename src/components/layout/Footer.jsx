import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from "react";

const appUrl = "https://app.satagro.ai";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features",     href: "/features"  },
      { label: "Pricing",      href: "/pricing"   },
      { label: "Solutions",    href: "/solutions"  },
      { label: "Platform",     href: appUrl, external: true },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "For Farmers",  href: "/solutions" },
      { label: "For FPOs",     href: "/solutions" },
      { label: "For Agri-cos", href: "/solutions" },
      { label: "Enterprise",   href: "/contact"   },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog",         href: "/blog"      },
      { label: "Satellite Indices Guide", href: "/blog" },
      { label: "Case Studies", href: "/blog"      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",          href: "/about"             },
      { label: "Contact",           href: "/contact"           },
      { label: "Privacy Policy",    href: "/privacy-policy"    },
      { label: "Terms & Conditions",href: "/terms-conditions"  },
    ],
  },
];

const socials = [
  { icon: FaXTwitter,  href: "#", label: "Twitter / X"  },
  { icon: FaLinkedin,  href: "#", label: "LinkedIn"      },
  { icon: FaYoutube,   href: "#", label: "YouTube"       },
  { icon: FaWhatsapp,  href: "https://wa.me/917012804255", label: "WhatsApp" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="border-t border-app-border bg-white">
      <div className="container-wrap py-16 space-y-14">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" aria-label="SatAgro home">
              <img src="/logo.png" alt="SatAgro.AI" className="h-12 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Satellite intelligence for every field — real-time NDVI, AI advisory, and hyper-local
              weather to help Indian farmers make confident decisions.
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="font-display font-bold text-ember-text">Stay Updated</p>
            <p className="text-sm text-zinc-500">
              Weekly farming insights and satellite tips. No spam.
            </p>
            {subscribed ? (
              <p className="text-sm font-semibold text-brand-primary">
                ✅ You're subscribed! Check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 flex-1 rounded-full border border-app-border bg-app-panel px-4 text-sm focus:border-brand-primary focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-5 py-2 text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          {footerLinks.map((col) => (
            <div key={col.heading} className="space-y-3">
              <h4 className="font-display font-bold text-ember-text">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-brand-primary"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-zinc-500 transition-colors hover:text-brand-primary"
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

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-app-border pt-8 text-sm text-zinc-400 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
            <p>© {new Date().getFullYear()} SatAgro.AI — Built with ❤️ in India</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-brand-primary transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-app-border text-zinc-400 transition-all hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary"
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