"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(229,162,74,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m
        </motion.p>

        <div className="mask-gradient-b">
          <motion.h1
            id="hero-heading"
            className="font-display text-[clamp(3rem,13vw,12rem)] font-medium uppercase leading-[0.85] tracking-tight text-zinc-50"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            Sumedha
            <br />
            <span className="text-zinc-600">Kulkarni</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {profile.location}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:inline" />
          <a
            href={profile.phoneHref}
            className="transition-colors hover:text-zinc-200"
          >
            {profile.phone}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:inline" />
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-zinc-200"
          >
            {profile.email}
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-panel/50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-300">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-accent"
              aria-hidden
            />
            {profile.availability}
          </span>
          <Link
            href={profile.resumePath}
            className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-canvas transition-colors hover:bg-accent hover:text-canvas"
          >
            Download CV
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-zinc-600 to-transparent"
          animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={
            reduce ? undefined : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }
          aria-hidden
        />
      </div>
    </section>
  );
}
