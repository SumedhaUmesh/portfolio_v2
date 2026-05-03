import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-200/90 px-5 py-14 sm:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-800">
            {profile.shortName}
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            © {year} · Software Engineer · {profile.location}
          </p>
          <p className="mt-4 max-w-sm font-serif text-sm italic leading-relaxed text-zinc-600">
            {profile.signOff}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs font-medium uppercase tracking-wider text-zinc-600">
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <Link href={profile.resumePath} className="transition-colors hover:text-accent">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
