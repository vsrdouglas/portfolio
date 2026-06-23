import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";

export function Experience() {
  return (
    <Section
      id="experience"
      tag="experience"
      title="Where I've shipped"
    >
      <ol className="relative space-y-12 border-l border-line pl-8">
        {profile.experience.map((entry, index) => (
          <li key={`${entry.company}-${entry.period}`} className="relative">
            {/* Timeline node */}
            <span
              className="absolute -left-[2.45rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-ground"
              style={{ background: "var(--signal)" }}
              aria-hidden="true"
            />
            <Reveal delay={index === 0 ? 0 : 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-ink">
                  {entry.role}
                </h3>
                <span className="font-mono text-sm text-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {entry.company}
                <span className="text-muted"> · {entry.location}</span>
              </p>
              <p className="mt-4 leading-relaxed text-muted">{entry.summary}</p>

              {entry.highlights.length > 0 ? (
                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((highlight, hi) => (
                    <li key={hi} className="flex gap-3 text-muted">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-warm"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <ul className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-ground px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
