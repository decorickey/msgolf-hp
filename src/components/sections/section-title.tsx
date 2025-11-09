import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  eyebrow?: string;
}

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
          {eyebrow}
        </span>
      ) : (
        <span className="h-px w-12 bg-stone-300" aria-hidden />
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-[34px]">
        {children}
      </h2>
    </div>
  );
}
