import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";
import { education } from "@/content/education";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-zinc-900 px-5 py-24 sm:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="01" label="About" className="mb-12" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal delay={0.05}>
            <div>
              <h2
                id="about-heading"
                className="font-display text-4xl font-medium uppercase tracking-tight text-zinc-100 sm:text-5xl"
              >
                Building reliable systems
                <br />
                <span className="text-zinc-600">from metal to model.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                {profile.summary}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 text-sm">
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-zinc-700">·</span>
                <a
                  href={profile.portfolioUrl}
                  className="text-zinc-500 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 rounded-2xl border border-zinc-800/80 bg-panel/40 p-8 backdrop-blur-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Education
              </h3>
              <ul className="space-y-8">
                {education.map((d) => (
                  <li key={d.school + d.dates} className="hairline border-0 border-t border-zinc-800 pt-8 first:border-t-0 first:pt-0">
                    <p className="font-display text-xl font-medium text-zinc-100">
                      {d.school}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">{d.location}</p>
                    <p className="mt-3 text-sm font-medium text-zinc-300">
                      {d.degree}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
                      {d.dates}
                      {d.detail ? ` · ${d.detail}` : ""}
                    </p>
                    {d.bullets?.map((b) => (
                      <p key={b} className="mt-4 text-sm leading-relaxed text-zinc-400">
                        {b}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
