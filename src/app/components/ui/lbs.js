"use client";
import { motion } from "motion/react";

export default function LetsBuildSomething() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="rounded-full bg-gray-100 px-8 py-4 text-lg text-black shadow-lg"
    >
      Lets Build Something Amazing ✨
    </motion.button>
  );
}
