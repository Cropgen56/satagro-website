import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
  once: PropTypes.bool,
};
