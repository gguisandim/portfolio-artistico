"use client";

import { motion } from "motion/react";

export default function CollectionTransition() {
  return (
    <section className="collection-transition">
      <motion.svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="collection-transition__line"
        aria-hidden="true"
      >
        <motion.path
          d="M 0 120 C 150 100, 260 170, 390 120 S 650 50, 760 145 S 950 230, 1200 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </motion.svg>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        A cor desaparece. A forma permanece.
      </motion.p>
    </section>
  );
}
