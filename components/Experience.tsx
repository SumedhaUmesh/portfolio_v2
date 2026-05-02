import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-zinc-900 px-5 py-24 sm:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="02" label="Experience" className="mb-16" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="experience-heading"
            className="font-display text-4xl font-medium uppercase tracking-tight text-zinc-100 sm:text-5xl"
          >
            Professional work
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-0">
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.title}-${role.dates}`} className="relative">
              <div className="grid gap-8 border-t border-zinc-800 py-12 lg:grid-cols-[180px_1fr] lg:gap-12">
                <Reveal delay={0.02 * i}>
                  <div className="lg:sticky lg:top-36 lg:self-start">
                    <p className="font-display text-sm font-medium uppercase tracking-wider text-accent">
                      {role.dates}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-zinc-600">
                      {role.location}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.05 + 0.02 * i}>
                  <div>
                    <h3 className="font-display text-2xl font-medium uppercase tracking-tight text-zinc-100">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{role.company}</p>
                    <ul className="mt-6 space-y-4">
                      {role.highlights.map((h) => (
                        <li
                          key={h.slice(0, 48)}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
