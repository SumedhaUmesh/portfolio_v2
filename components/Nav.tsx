"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? scrollTop / height : 0;
      setProgress(Math.min(1, Math.max(0, p)));
      setScrolled(scrollTop > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[box-shadow,background-color] duration-300 ${
        scrolled
          ? "border-zinc-200/95 bg-white/95 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl backdrop-saturate-150"
          : "border-zinc-200/80 bg-white/85 backdrop-blur-md"
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-indigo-500 to-accent opacity-90 transition-[width] duration-75 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:text-accent"
        >
          {profile.shortName.split(" ")[0]}
          <span className="text-zinc-400 transition-colors group-hover:text-accent/70">
            .
          </span>
        </Link>
        <ul className="flex max-w-[52vw] items-center gap-3 overflow-x-auto whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 sm:max-w-none sm:gap-5 sm:text-xs md:gap-6">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="relative transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-zinc-900 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumePath}
            className="hidden rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white shadow-md transition-[transform,background-color] hover:bg-accent hover:shadow-lg sm:inline-flex"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
