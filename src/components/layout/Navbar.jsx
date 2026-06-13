import {useState, useEffect} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {Menu, X, Satellite, ArrowRight, Sparkles} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

const links = [
  {name: "Features", href: "/features"},
  {name: "Solutions", href: "/solutions"},
  {name: "Pricing", href: "/pricing"},
  {name: "About", href: "/about"},
  {name: "Blog", href: "/blog"},
  {name: "Contact", href: "/contact"},
];

const appUrl = "https://app.satagro.ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();

    window.addEventListener("scroll", handler, {passive: true});
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-primary/10 bg-[#F7FBF5]/88 shadow-[0_14px_40px_rgba(58,107,15,0.10)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#F7FBF5]/65 backdrop-blur-md"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(58,107,15,0.12),transparent_28%),radial-gradient(circle_at_88%_0%,rgba(245,158,11,0.10),transparent_24%)]" />

      <div className="container-wrap relative flex h-16 items-center justify-between md:h-[72px]">
        <Link
          to="/"
          className="group flex items-center gap-2"
          aria-label="SatAgro home"
        >
          <motion.div
            whileHover={{scale: 1.035}}
            whileTap={{scale: 0.98}}
            transition={{type: "spring", stiffness: 320, damping: 20}}
            className="relative flex items-center"
          >
            <span className="absolute -inset-4 rounded-full bg-brand-primary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src="/logo.png"
              alt="SatAgro.AI logo"
              className="relative h-20 w-auto object-contain md:h-24"
            />
          </motion.div>
        </Link>

        <nav
          className="hidden items-center rounded-full border border-brand-primary/10 bg-white/55 px-1.5 py-1.5 text-sm font-semibold shadow-[0_10px_28px_rgba(58,107,15,0.07)] backdrop-blur-xl md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({isActive}) =>
                `group relative rounded-full px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-brand-primary"
                    : "text-zinc-600 hover:text-brand-primary"
                }`
              }
            >
              {({isActive}) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-brand-primary/10 bg-gradient-to-r from-brand-primary/12 via-brand-primary/8 to-ember-accent/10 shadow-inner"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}

                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-ember-accent/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  )}

                  <span className="relative z-10">{link.name}</span>

                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-primary to-ember-accent transition-all duration-300 group-hover:w-5" />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <motion.a
            href={appUrl}
            whileHover={{y: -2}}
            whileTap={{scale: 0.97}}
            className="rounded-full border border-brand-primary/15 bg-white/60 px-5 py-2.5 text-sm font-bold text-brand-primary shadow-sm backdrop-blur transition hover:border-brand-primary/25 hover:bg-brand-primary/5"
          >
            Log In
          </motion.a>

          <motion.a
            href={appUrl}
            whileHover={{y: -2}}
            whileTap={{scale: 0.97}}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#234607] via-[#3A6B0F] to-[#4F8F18] px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(58,107,15,0.24)]"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            <Satellite className="relative h-4 w-4" />
            <span className="relative">Get Started</span>
          </motion.a>
        </div>

        <button
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-primary/10 bg-white/70 text-brand-primary shadow-sm backdrop-blur transition hover:bg-brand-primary/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{rotate: -90, opacity: 0, scale: 0.85}}
              animate={{rotate: 0, opacity: 1, scale: 1}}
              exit={{rotate: 90, opacity: 0, scale: 0.85}}
              transition={{duration: 0.18}}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.28, ease: [0.22, 1, 0.36, 1]}}
            className="overflow-hidden border-t border-brand-primary/10 bg-[#F7FBF5]/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-wrap py-4">
              <div className="rounded-3xl border border-brand-primary/10 bg-white/70 p-2 shadow-[0_20px_45px_rgba(58,107,15,0.10)] backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2 rounded-2xl bg-brand-primary/5 px-4 py-3 text-xs font-bold text-brand-primary">
                  <Sparkles className="h-4 w-4" />
                  AI + Satellite Farming Intelligence
                </div>

                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{opacity: 0, x: -14}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: i * 0.045, duration: 0.22}}
                  >
                    <NavLink
                      to={link.href}
                      className={({isActive}) =>
                        `group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition ${
                          isActive
                            ? "bg-gradient-to-r from-brand-primary/12 to-ember-accent/8 text-brand-primary"
                            : "text-zinc-700 hover:bg-brand-primary/5 hover:text-brand-primary"
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </NavLink>
                  </motion.div>
                ))}

                <div className="mt-3 grid gap-2 border-t border-brand-primary/10 pt-3">
                  <a
                    href={appUrl}
                    className="rounded-2xl border border-brand-primary/15 bg-white/75 px-4 py-3 text-center text-sm font-bold text-brand-primary transition hover:bg-brand-primary/5"
                  >
                    Log In
                  </a>

                  <a
                    href={appUrl}
                    className="rounded-2xl bg-gradient-to-r from-[#234607] via-[#3A6B0F] to-[#4F8F18] px-4 py-3 text-center text-sm font-bold text-white shadow-[0_14px_28px_rgba(58,107,15,0.22)]"
                  >
                    Get Started Free →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}