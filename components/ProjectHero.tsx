import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/content/projects";

type ProjectHeroProps = {
  project: Project;
  index: number;
};

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <header className="relative overflow-hidden border-b border-zinc-200 px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_70%_0%,rgb(37_99_235/0.07),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          All projects
        </Link>

        <p className="mt-10 font-display text-8xl font-medium text-zinc-200 sm:text-9xl">
          {num}
        </p>

        <h1 className="font-display text-4xl font-medium uppercase leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
          {project.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          <span>{project.year}</span>
          <span className="text-zinc-300">·</span>
          <span>{project.role}</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-600"
            >
              {s}
            </span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-4">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}

        {project.image ? (
          <figure className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)]">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
            />
          </figure>
        ) : null}
      </div>
    </header>
  );
}
