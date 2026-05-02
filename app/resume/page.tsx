"use client";

import { useEffect } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

export default function ResumePage() {
  useEffect(() => {
    window.location.replace(profile.resumePath);
  }, []);

  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-sm text-zinc-500">Opening resume…</p>
      <p className="mt-4 text-xs text-zinc-600">
        If nothing happens,{" "}
        <Link
          href={profile.resumePath}
          className="text-accent underline-offset-4 hover:underline"
        >
          download the PDF
        </Link>
        .
      </p>
    </div>
  );
}
