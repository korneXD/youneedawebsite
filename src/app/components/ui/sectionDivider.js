"use client";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function SectionDivider() {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="h-16 w-1 rounded-full bg-gray-200"
    ></motion.div>
  );
}
