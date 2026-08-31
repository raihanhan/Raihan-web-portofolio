"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#d6e1ee] bg-[#f4f7fb]/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="#hero" className="display-font text-xl font-bold tracking-tight text-[#102a43] dark:text-slate-100">
          Raihan<span className="text-[#1d4ed8]">.</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-7">
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#647574] md:flex dark:text-slate-300">
            <Link href="#about" className="transition hover:text-[#1d4ed8] dark:hover:text-blue-400">About</Link>
            <Link href="#experience" className="transition hover:text-[#1d4ed8] dark:hover:text-blue-400">Experience</Link>
            <Link href="#projects" className="transition hover:text-[#1d4ed8] dark:hover:text-blue-400">Projects</Link>
            <Link href="#contact" className="rounded-full bg-[#102a43] px-4 py-2 text-white transition hover:bg-[#1d4ed8] dark:bg-blue-600 dark:hover:bg-blue-500">Let&apos;s talk</Link>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e1ee] bg-white text-[#102a43] shadow-sm transition hover:border-blue-200 hover:text-[#1d4ed8] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500"
          >
            {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}