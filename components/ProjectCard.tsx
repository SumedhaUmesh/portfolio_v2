import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group relative block overflow-hidden rounded-2xl border border-zinc-800/90 bg-panel/30 transition-colors hover:border-zinc-700"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-canvas to-zinc-900">
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(229,162,74,0.08) 0%, transparent 45%),
              radial-gradient(circle at 80% 20%, rgba(229,162,74,0.15), transparent 50%)
            `,
          }}
        />
        <span className="absolute left-5 top-5 font-display text-5xl font-medium text-zinc-800 transition-colors group-hover:text-zinc-700">
          {num}
        </span>
      </div>

      <div className="border-t border-zinc-800/80 p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium uppercase tracking-tight text-zinc-100 transition-colors group-hover:text-accent sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          {project.tagline}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-800 bg-canvas/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 5 ? (
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-[11px] text-zinc-600">
              +{project.stack.length - 5}
            </span>
          ) : null}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-zinc-300">
          View project →
        </p>
      </div>
    </Link>
  );
}
