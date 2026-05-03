import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";
import { Layers } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-zinc-200/80 px-5 py-24 sm:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="03" label="Selected projects" className="mb-16" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2
              id="projects-heading"
              className="max-w-3xl font-display text-4xl font-medium uppercase leading-tight tracking-tight text-zinc-900 sm:text-5xl"
            >
              From autonomous stacks to on-device intelligence.
            </h2>
            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-4 shadow-sm ring-1 ring-zinc-900/[0.03]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-indigo-400/10">
                <Layers className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Featured
                </p>
                <p className="font-display text-lg font-medium text-zinc-900">
                  {projects.length} builds
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 * (i % 3)}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
