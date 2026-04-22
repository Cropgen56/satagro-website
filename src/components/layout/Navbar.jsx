import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Satellite } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Features",  href: "/features"  },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing",   href: "/pricing"   },
  { name: "About",     href: "/about"     },
  { name: "Blog",      href: "/blog"      },
  { name: "Contact",   href: "/contact"   },
];

const appUrl = "https://app.satagro.ai";

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-app-border bg-white/90 shadow-navbar backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-wrap flex h-14 items-center justify-between md:h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="SatAgro home">
          <img src="/logo.png" alt="SatAgro.AI logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-ember-sidebar"
                    : "text-zinc-600 hover:text-ember-sidebar"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-brand-primary"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href={appUrl} className="btn-secondary px-5 py-2">
            Log In
          </a>
          <a href={appUrl} className="btn-primary px-5 py-2">
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-ember-sidebar transition hover:bg-app-elevated md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-app-border bg-white md:hidden"
          >
            <div className="container-wrap flex flex-col gap-1 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.22 }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-app-active-bg text-ember-sidebar"
                          : "text-zinc-700 hover:bg-app-panel"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-app-border pt-3">
                <a href={appUrl} className="btn-secondary w-full text-center">
                  Log In
                </a>
                <a href={appUrl} className="btn-primary w-full text-center">
                  Get Started Free →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}