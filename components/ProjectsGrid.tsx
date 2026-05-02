import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-zinc-900 px-5 py-24 sm:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="03" label="Selected projects" className="mb-16" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="projects-heading"
            className="max-w-3xl font-display text-4xl font-medium uppercase leading-tight tracking-tight text-zinc-100 sm:text-5xl"
          >
            From autonomous stacks to on-device intelligence.
          </h2>
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
