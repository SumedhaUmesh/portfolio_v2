import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-zinc-200/80 px-5 py-24 sm:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="05" label="Contact" className="mb-16" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal delay={0.05}>
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                aria-hidden
              />
              <div className="relative rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-white via-zinc-50/50 to-indigo-50/30 p-8 shadow-[0_24px_60px_-28px_rgba(37,99,235,0.12)] sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-lg">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <h2
                  id="contact-heading"
                  className="mt-8 font-display text-3xl font-medium uppercase leading-tight tracking-tight text-zinc-900 sm:text-[2.35rem]"
                >
                  {profile.contactTitle}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
                  {profile.contactInvite}
                </p>
                <dl className="mt-10 space-y-5 text-sm">
                  <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-medium text-zinc-900 transition-colors hover:text-accent"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={profile.phoneHref}
                        className="font-medium text-zinc-900 transition-colors hover:text-accent"
                      >
                        {profile.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Location
                    </dt>
                    <dd className="mt-1 font-medium text-zinc-900">{profile.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thanks/"
              className="card-elevated rounded-3xl border-zinc-200/95 p-6 sm:p-9"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Send a message
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 shadow-inner placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 shadow-inner placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 shadow-inner placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-zinc-300 bg-white text-accent focus:ring-accent"
                  />
                  <label
                    htmlFor="contact-consent"
                    className="text-xs leading-relaxed text-zinc-600"
                  >
                    I consent to having this website store my submitted information
                    so you can respond to my inquiry.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-zinc-900/20 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:from-accent hover:to-indigo-600 hover:shadow-accent/25 sm:w-auto sm:px-14"
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
