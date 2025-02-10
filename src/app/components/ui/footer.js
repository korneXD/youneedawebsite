import Link from "next/link";
import Github from "./github";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} You Need A Website. All rights reserved.
      </p>
      <p className="mt-2">Built with Next.js and Tailwind CSS</p>
      <Link
        href={"https://github.com/korneXD"}
        target="_blank"
        className="my-4"
      >
        <Github className={"transition-all hover:text-gray-400"} />
      </Link>
    </footer>
  );
}
