import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { skillGroups } from "@/content/skills";
import { Cpu } from "lucide-react";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-zinc-200/80 px-5 py-28 sm:px-8 sm:py-36"
      aria-labelledby="skills-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-accent/[0.07] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl"
          aria-hidden
        />

        <Reveal>
          <SectionHeader index="04" label="Capabilities" className="mb-14 sm:mb-16" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-white via-zinc-50/80 to-indigo-50/40 p-8 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.12)] sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-600 shadow-sm">
                  <Cpu className="h-3.5 w-3.5 text-accent" aria-hidden />
                  Stack depth
                </span>
                <h2
                  id="skills-heading"
                  className="mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.25rem)] font-medium uppercase leading-[1.05] tracking-tight text-zinc-900"
                >
                  Tools that ship.
                  <span className="mt-2 block bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                    Stacks you can rely on.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12 border-t border-zinc-200 sm:mt-14">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={0.04 * i}>
              <div className="grid gap-8 border-b border-zinc-200 py-12 last:border-b-0 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12 md:py-14 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-20">
                <div className="flex items-start gap-4 md:flex-col md:gap-3">
                  <span
                    className="font-display text-4xl font-medium leading-none text-zinc-200 md:text-5xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium uppercase tracking-tight text-zinc-900 md:text-2xl">
                    {g.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5 sm:gap-3">
                  {g.items.map((item) => (
                    <li key={item}>
                      <span className="group inline-flex items-center rounded-xl border border-zinc-200/95 bg-white px-4 py-2.5 text-sm text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-md hover:shadow-accent/5">
                        <span
                          className="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-300 transition-colors group-hover:bg-accent"
                          aria-hidden
                        />
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
