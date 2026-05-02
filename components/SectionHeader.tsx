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
      <span className="text-zinc-400">{index}</span>
      <span
        className="inline-block h-px w-8 shrink-0 bg-zinc-700"
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
}
