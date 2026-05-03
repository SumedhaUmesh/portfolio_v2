"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.065,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease },
    },
  };

  return (
    <section
      className="relative overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-[5.5rem]"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0 mesh-gradient opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hero-texture opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full bg-gradient-to-bl from-indigo-400/35 via-accent/20 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[280px] w-[280px] rounded-full bg-gradient-to-tr from-violet-400/20 via-accent/15 to-transparent blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-32 w-32 text-accent/20 lg:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
      >
        <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,340px)] lg:gap-12 xl:gap-14">
          <motion.div
            className="order-2 space-y-0 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/85 px-3 py-1.5 shadow-md shadow-accent/10 backdrop-blur-sm ring-1 ring-white/60"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              <span className="text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-600">
                Hi, I&apos;m
              </span>
            </motion.div>

            <div className="mask-gradient-b">
              <motion.h1
                id="hero-heading"
                variants={item}
                className="font-display text-[clamp(1.85rem,5.2vw,3.85rem)] font-medium uppercase leading-[1.04] tracking-tight text-zinc-900 drop-shadow-[0_1px_0_rgb(255_255_255/0.8)]"
              >
                Sumedha
                <br />
                <span className="bg-gradient-to-r from-indigo-700 via-accent to-indigo-600 bg-clip-text text-transparent">
                  Kulkarni
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base leading-snug text-zinc-700 sm:text-lg sm:leading-relaxed"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl rounded-r-lg border-l-[3px] border-accent/50 bg-gradient-to-r from-accent/[0.06] to-transparent py-2 pl-4 pr-3 text-[15px] italic leading-relaxed text-zinc-800 sm:text-base"
            >
              {profile.heroHumanLine}
            </motion.p>

            <motion.ul
              variants={item}
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Focus areas"
            >
              {profile.heroFocusAreas.map((label) => (
                <li key={label}>
                  <span className="inline-flex items-center rounded-lg border border-indigo-200/80 bg-gradient-to-b from-white to-indigo-50/90 px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm ring-1 ring-indigo-900/[0.06]">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600"
            >
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-white/90 px-2.5 py-1.5 shadow-sm ring-1 ring-accent/10">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                {profile.location}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline" />
              <a
                href={profile.phoneHref}
                className="transition-colors duration-300 hover:text-accent"
              >
                {profile.phone}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline" />
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors duration-300 hover:text-accent"
              >
                {profile.email}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-900 shadow-sm">
                {!reduce ? (
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden
                  />
                )}
                {profile.availability}
              </span>
              <Link
                href={profile.resumePath}
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-zinc-900/25 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-accent/25"
              >
                Download CV
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white/90 px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-800 shadow-sm transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.6,
              delay: reduce ? 0 : 0.22,
              ease,
            }}
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none lg:pt-1">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/35 via-indigo-400/25 to-violet-500/20 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-accent via-indigo-500 to-violet-600 opacity-75 blur-[2px]"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/90 bg-gradient-to-br from-white to-indigo-50/40 p-1 shadow-[0_24px_56px_-20px_rgba(29,78,216,0.45)] ring-2 ring-white/80">
                <div className="overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src={profile.photoSrc}
                    alt={profile.photoAlt}
                    width={800}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 260px, 340px"
                    className="aspect-square h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-10 hidden max-w-6xl justify-center sm:flex">
        {!reduce ? (
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-accent via-indigo-400/60 to-transparent" />
          </motion.div>
        ) : (
          <div className="h-8 w-px bg-gradient-to-b from-accent/70 to-transparent" aria-hidden />
        )}
      </div>
    </section>
  );
}
