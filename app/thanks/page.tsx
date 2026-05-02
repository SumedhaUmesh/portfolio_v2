import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message was sent.",
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-medium uppercase tracking-tight text-zinc-100 sm:text-4xl">
        Message received
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-500">
        Thanks for reaching out. I&apos;ll get back to you as soon as I can.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-zinc-100 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-canvas transition-colors hover:bg-accent"
      >
        Back home
      </Link>
    </div>
  );
}
