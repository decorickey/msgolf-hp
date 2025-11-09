import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-center text-2xl font-semibold tracking-wide text-stone-900">
      {children}
    </h2>
  );
}
