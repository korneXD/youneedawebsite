"use client";

import { words } from "@/app/lib/utils";
import { FlipWords } from "./flipWords";
import { motion } from "motion/react";

export default function MainLayout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="my-12 space-y-4 text-center"
    >
      <h2 className="text-2xl font-semibold">
        Want to <FlipWords words={words} className="text-black" /> your website?
        You are in the right place!
      </h2>
      <h1 className="text-4xl font-bold tracking-tight">
        You need a website
        <span className="ml-2">💻</span>
      </h1>
      <p className="text-xl text-gray-400">
        We craft stunning websites that mean business.
      </p>
    </motion.section>
  );
}
