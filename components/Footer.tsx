import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            {profile.shortName}
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            © {year} · Software Engineer · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
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
