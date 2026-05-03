type SectionHeaderProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionHeader({ index, label, className = "" }: SectionHeaderProps) {
  return (
    <div
      className={`flex items-baseline gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500 ${className}`}
    >
      <span className="flex items-center gap-3 text-zinc-400">
        <span
          className="h-2 w-2 rotate-45 rounded-sm bg-gradient-to-br from-accent to-indigo-500 shadow-sm shadow-accent/30"
          aria-hidden
        />
        {index}
      </span>
      <span
        className="inline-block h-px w-8 shrink-0 bg-gradient-to-r from-zinc-300 to-transparent"
        aria-hidden
      />
      <span className="font-display tracking-[0.28em] text-zinc-700">{label}</span>
    </div>
  );
}
