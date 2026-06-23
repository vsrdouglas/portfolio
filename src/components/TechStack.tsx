import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";

export function TechStack() {
  return (
    <Section
      id="stack"
      tag="stack"
      title="The tools I reach for"
      intro="Grouped by where they sit in the system, not by logo wall."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.techGroups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm font-medium text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-ground px-3 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
