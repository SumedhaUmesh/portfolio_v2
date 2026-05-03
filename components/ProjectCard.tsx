"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}/`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/95 bg-white/95 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)] ring-1 ring-zinc-900/[0.04] transition-[border-color,box-shadow] duration-300 hover:border-accent/25 hover:shadow-[0_28px_60px_-28px_rgba(37,99,235,0.18)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-indigo-50/40">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
          <div
            className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
            style={{
              backgroundImage: `
              linear-gradient(135deg, rgb(37 99 235 / 0.07) 0%, transparent 46%),
              radial-gradient(circle at 85% 18%, rgb(99 102 241 / 0.12), transparent 52%)
            `,
            }}
          />
          <span className="absolute left-6 top-6 font-display text-6xl font-medium text-zinc-900/[0.07] transition-all duration-500 group-hover:translate-x-1 group-hover:text-zinc-900/[0.11]">
            {num}
          </span>
          <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-zinc-900 shadow-lg opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:rotate-[-8deg]">
            <ArrowUpRight className="h-5 w-5 text-accent" aria-hidden />
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-zinc-100 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            {project.year} · {project.role}
          </p>
          <h3 className="mt-3 font-display text-2xl font-medium uppercase tracking-tight text-zinc-900 transition-colors group-hover:text-accent sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
            {project.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((s) => (
              <span
                key={s}
                className="rounded-lg border border-zinc-200/90 bg-zinc-50/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-600"
              >
                {s}
              </span>
            ))}
            {project.stack.length > 5 ? (
              <span className="rounded-lg border border-dashed border-zinc-300 px-2.5 py-1 text-[11px] text-zinc-500">
                +{project.stack.length - 5}
              </span>
            ) : null}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-colors group-hover:gap-3">
            View project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
