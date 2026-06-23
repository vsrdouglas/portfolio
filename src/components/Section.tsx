import type { ReactNode } from "react";
import { Reveal } from "./Reveal.tsx";

interface SectionProps {
  readonly id: string;
  /** The short token shown in the mono "code comment" label, e.g. "about". */
  readonly tag: string;
  readonly title: string;
  readonly intro?: string;
  readonly children: ReactNode;
}

/**
 * Shared section frame: a consistent vertical rhythm, a mono `// tag` eyebrow
 * that nods to a code comment, and a display heading. Keeps every section
 * visually aligned without each one re-implementing the header.
 */
export function Section({ id, tag, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <Reveal>
        <header className="max-w-2xl">
          <p className="eyebrow">
            <span className="text-muted">{"// "}</span>
            {tag}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          ) : null}
        </header>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
