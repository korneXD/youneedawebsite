import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    img: "✨",
    name: "Beautiful Design",
    description: "Clean, modern aesthetics that capture your brands essence",
  },
  {
    img: "⚡️",
    name: "Lightning Fast",
    description: "Optimized performance for the best user experience",
  },
  {
    img: "📱",
    name: "Mobile First",
    description: "Responsive designs that work perfectly on every device",
  },
  {
    img: "🔄",
    name: "Redesign & Reoptimize",
    description: "Revamp your website for improved aesthetics and performance",
  },
];

export const projects = [
  {
    title: "Blog Web",
    src: "https://github.com/korneXD/blog2025",
  },
  {
    title: "Budget Manager",
    src: "https://github.com/korneXD/budget-manager",
  },
  {
    title: "CodeByByte",
    src: "https://codebybyte.hu",
  },
];

export const words = ["redesign", "build", "optimize"];
