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

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? scrollTop / height : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/80 bg-canvas/80 backdrop-blur-md">
      <div
        className="absolute bottom-0 left-0 h-px bg-accent transition-[width] duration-75 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-100 transition-colors hover:text-accent"
        >
          {profile.shortName.split(" ")[0]}
          <span className="text-zinc-600">.</span>
        </Link>
        <ul className="flex max-w-[52vw] items-center gap-3 overflow-x-auto whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:max-w-none sm:gap-5 sm:text-xs md:gap-6">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="transition-colors hover:text-zinc-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumePath}
            className="hidden rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-200 transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
