import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-zinc-900 px-5 py-24 sm:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="05" label="Contact" className="mb-16" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal delay={0.05}>
            <div>
              <h2
                id="contact-heading"
                className="font-display text-4xl font-medium uppercase tracking-tight text-zinc-100 sm:text-5xl"
              >
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
                I&apos;m looking for roles where embedded rigor meets modern ML and
                full-stack delivery. Reach out with opportunities or questions.
              </p>
              <dl className="mt-10 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-600">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-zinc-300 transition-colors hover:text-accent"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-600">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={profile.phoneHref}
                      className="text-zinc-300 transition-colors hover:text-accent"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-600">
                    Location
                  </dt>
                  <dd className="mt-1 text-zinc-300">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thanks/"
              className="rounded-2xl border border-zinc-800/80 bg-panel/30 p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-canvas px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-canvas px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-lg border border-zinc-800 bg-canvas px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-zinc-700 bg-canvas text-accent focus:ring-accent"
                  />
                  <label
                    htmlFor="contact-consent"
                    className="text-xs leading-relaxed text-zinc-500"
                  >
                    I consent to having this website store my submitted information
                    so you can respond to my inquiry.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-zinc-100 py-3.5 text-xs font-semibold uppercase tracking-wider text-canvas transition-colors hover:bg-accent sm:w-auto sm:px-12"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
