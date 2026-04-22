import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionLabel({ label, title, subtitle, align }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const cls = align === "center" ? "mx-auto text-center" : "";

  return (
    <div ref={ref} className={`max-w-2xl ${cls}`}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary"
      >
        <span className="h-px w-6 bg-brand-primary inline-block opacity-60" />
        {label}
        <span className="h-px w-6 bg-brand-primary inline-block opacity-60" />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
        className="font-display text-3xl font-bold text-ember-text md:text-4xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
          className="mt-4 text-base leading-relaxed text-zinc-500"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

SectionLabel.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
};

SectionLabel.defaultProps = {
  subtitle: "",
  align: "left",
};