import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ProjectHero } from "@/components/ProjectHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  getAllSlugs,
  getProjectBySlug,
  projects,
} from "@/content/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                alt: project.imageAlt,
              },
            ],
          }
        : {}),
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === params.slug);

  return (
    <>
      <ProjectHero project={project} index={index} />

      <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
            >
              Overview
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
              {project.overview}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="mt-16" aria-labelledby="highlights-heading">
            <h2
              id="highlights-heading"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
            >
              Highlights
            </h2>
            <ul className="mt-8 space-y-5">
              {project.highlights.map((h) => (
                <li
                  key={h.slice(0, 40)}
                  className="flex gap-4 border-l-2 border-accent/50 pl-6 text-sm leading-relaxed text-zinc-800"
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.12}>
          <section className="mt-16" aria-labelledby="architecture-heading">
            <h2
              id="architecture-heading"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
            >
              Architecture &amp; notes
            </h2>
            <ul className="mt-8 space-y-4">
              {project.architectureNotes.map((note) => (
                <li
                  key={note.slice(0, 40)}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-20 flex flex-wrap gap-4 border-t border-zinc-200 pt-12">
            <Link
              href="/#projects"
              className="rounded-full bg-zinc-900 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent"
            >
              More projects
            </Link>
          </div>
        </Reveal>
      </article>

      <Footer />
    </>
  );
}
