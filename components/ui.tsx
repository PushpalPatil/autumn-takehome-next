import type { ReactNode } from "react";

// Shared presentational primitives — the repeated patterns of the page,
// expressed once so section components stay readable.

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-page px-gutter ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-accent">
      {children}
    </p>
  );
}

export function Deck({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`mt-6 text-deck text-muted ${className}`}>{children}</p>;
}

const btnBase =
  "inline-block rounded-full border px-7 py-[0.9rem] text-base font-semibold no-underline transition-colors";

const btnVariants = {
  solid: "border-ink bg-ink text-paper hover:border-accent hover:bg-accent",
  ghost: "border-ink text-ink hover:bg-ink hover:text-paper",
  /* for dark grounds (the hero) */
  "ghost-light": "border-paper/60 text-paper hover:bg-paper hover:text-ink",
  /* frosted dark green-black glass — the hero's primary */
  sheer:
    "border-paper/25 bg-[rgba(24,32,22,0.45)] text-paper backdrop-blur-md hover:bg-[rgba(24,32,22,0.68)]",
} as const;

export function Button({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof btnVariants;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`${btnBase} ${btnVariants[variant]} ${className}`}>
      {children}
    </a>
  );
}
