"use client";

import Link from "next/link";
import Github from "./github";
import { projects } from "@/app/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function ProjectsLayout() {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="w-full space-y-8 text-center">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2"
      >
        <span className="text-4xl">🎯</span>
        <h2 className="text-2xl font-semibold">Previous Works</h2>
        <p className="text-gray-400">
          Check out our portfolio of successful projects
        </p>
      </motion.div>
      <ul className="flex h-fit w-full flex-wrap items-center justify-center gap-10">
        {projects.map((e, i) => {
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex w-64 cursor-pointer flex-row items-center justify-around rounded-lg border border-gray-300 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <Link href={e.src} target="_blank">
                <Github className="transition-all hover:text-gray-400" />
              </Link>
              <h3 className="text-xl">{e.title}</h3>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
