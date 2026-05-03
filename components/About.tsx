import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";
import { education } from "@/content/education";
import { Heart } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-zinc-200/80 px-5 py-28 sm:px-8 sm:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="01" label="About" className="mb-14 sm:mb-16" />
        </Reveal>

        <div className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:items-start">
          <Reveal delay={0.05}>
            <div className="relative lg:sticky lg:top-32">
              <div
                className="pointer-events-none absolute -left-4 top-0 hidden h-24 w-1 rounded-full bg-gradient-to-b from-accent to-indigo-400 lg:block"
                aria-hidden
              />
              <h2
                id="about-heading"
                className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase leading-[1.05] tracking-tight text-zinc-900 lg:pl-6"
              >
                Building reliable systems
                <br />
                <span className="bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent">
                  from metal to model.
                </span>
              </h2>

              <div className="mt-10 space-y-8 lg:pl-6">
                <figure className="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-indigo-50/40 p-6 shadow-[0_16px_40px_-28px_rgba(37,99,235,0.12)] sm:p-8">
                  <figcaption className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                    <Heart className="h-4 w-4" aria-hidden />
                    In my own words
                  </figcaption>
                  <blockquote className="mt-4 border-l-2 border-accent/35 pl-5">
                    <p className="font-serif text-lg leading-[1.8] text-zinc-800 sm:text-[1.15rem] sm:leading-[1.75]">
                      {profile.voiceNote}
                    </p>
                  </blockquote>
                </figure>

                <div className="rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/80 px-6 py-5 sm:px-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Right now
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    {profile.rightNow}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 lg:pl-6">
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition-[border-color,color,box-shadow] hover:border-accent/40 hover:text-accent hover:shadow-md"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.portfolioUrl}
                  className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition-[border-color,color,box-shadow] hover:border-accent/40 hover:text-accent hover:shadow-md"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="gradient-border-wrap shadow-[0_24px_60px_-28px_rgba(37,99,235,0.15)]">
              <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-[1px] shadow-inner">
                <div className="rounded-[calc(1.5rem-2px)] bg-gradient-to-br from-white via-zinc-50/50 to-indigo-50/30 px-8 py-10 sm:px-10 sm:py-12">
                  <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-zinc-600">
                    <span className="h-px w-6 bg-accent" aria-hidden />
                    Education
                  </h3>

                  <div className="mt-10 flex flex-col gap-10">
                    {education.map((d, i) => (
                      <article
                        key={d.school + d.dates}
                        className={
                          i > 0 ? "border-t border-zinc-200/90 pt-10" : undefined
                        }
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <p className="font-display text-2xl font-medium uppercase leading-tight tracking-tight text-zinc-900 sm:text-[1.65rem]">
                            {d.school}
                          </p>
                          <p className="shrink-0 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                            {d.location}
                          </p>
                        </div>
                        <p className="mt-5 text-base font-medium leading-snug text-zinc-800">
                          {d.degree}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {d.dates}
                          {d.detail ? ` · ${d.detail}` : ""}
                        </p>
                        {d.bullets?.map((b) => (
                          <p
                            key={b}
                            className="mt-5 max-w-prose text-sm leading-relaxed text-zinc-600"
                          >
                            {b}
                          </p>
                        ))}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
