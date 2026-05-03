import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-display text-8xl font-medium text-zinc-200">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium uppercase tracking-tight text-zinc-900">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-10 rounded-full border border-zinc-300 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-800 transition-colors hover:border-accent hover:text-accent"
      >
        Home
      </Link>
    </div>
  );
}
