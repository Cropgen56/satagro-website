import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Home      = lazy(() => import("@pages/Home"));
const Features  = lazy(() => import("@pages/Features"));
const Solutions = lazy(() => import("@pages/Solutions"));
const Pricing   = lazy(() => import("@pages/Pricing"));
const About     = lazy(() => import("@pages/About"));
const Blog      = lazy(() => import("@pages/Blog"));
const Contact   = lazy(() => import("@pages/Contact"));
const NotFound        = lazy(() => import("@pages/NotFound"));
const TermsConditions = lazy(() => import("@pages/TermsConditions"));
const PrivacyPolicy   = lazy(() => import("@pages/PrivacyPolicy"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-app-border border-t-brand-primary" />
        <p className="text-sm font-medium text-zinc-400">Loading…</p>
      </div>
    </div>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

function AnimatedRoute({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/features"  element={<AnimatedRoute><Features /></AnimatedRoute>} />
          <Route path="/solutions" element={<AnimatedRoute><Solutions /></AnimatedRoute>} />
          <Route path="/pricing"   element={<AnimatedRoute><Pricing /></AnimatedRoute>} />
          <Route path="/about"     element={<AnimatedRoute><About /></AnimatedRoute>} />
          <Route path="/blog"      element={<AnimatedRoute><Blog /></AnimatedRoute>} />
          <Route path="/contact"   element={<AnimatedRoute><Contact /></AnimatedRoute>} />
          <Route path="/404"              element={<AnimatedRoute><NotFound /></AnimatedRoute>} />
          <Route path="/terms-conditions" element={<AnimatedRoute><TermsConditions /></AnimatedRoute>} />
          <Route path="/privacy-policy"   element={<AnimatedRoute><PrivacyPolicy /></AnimatedRoute>} />
          <Route path="*"                 element={<Navigate to="/404" replace />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}