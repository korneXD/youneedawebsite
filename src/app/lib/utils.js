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
    src: "https://utfs.io/a/vdrkhh77op/qVW5kgUPFS3w7agXzLjgaZyRfiDxFKI5Mc3YervHmP20JAuo",
  },
  {
    title: "Budget Manager",
    src: "https://utfs.io/a/vdrkhh77op/qVW5kgUPFS3w7agXzLjgaZyRfiDxFKI5Mc3YervHmP20JAuo",
  },
  {
    title: "CodeByByte",
    src: "https://utfs.io/a/vdrkhh77op/qVW5kgUPFS3w7agXzLjgaZyRfiDxFKI5Mc3YervHmP20JAuo",
  },
];

export const words = ["redesign", "build", "optimize"];
