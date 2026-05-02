import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-zinc-900 px-5 py-24 sm:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="04" label="Skills" className="mb-16" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="skills-heading"
            className="font-display text-4xl font-medium uppercase tracking-tight text-zinc-100 sm:text-5xl"
          >
            Technical breadth
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={0.05 * i}>
              <div className="rounded-2xl border border-zinc-800/80 bg-panel/30 p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  {g.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-md border border-zinc-800 bg-canvas/60 px-2.5 py-1 text-xs text-zinc-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
