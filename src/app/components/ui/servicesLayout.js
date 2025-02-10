"use client";
import { services } from "@/app/lib/utils";
import { motion } from "motion/react";

export default function ServicesLayout() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 text-center md:flex-row">
      {services.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center md:max-w-[20%]"
        >
          <span className="text-4xl">{e.img}</span>
          <h2 className="text-2xl font-semibold">{e.name}</h2>
          <p className="text-gray-400">{e.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
