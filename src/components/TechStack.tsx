import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";

export function TechStack() {
  return (
    <Section
      id="stack"
      tag="stack"
      title="The tools I reach for"
      intro="Grouped by where each piece sits in the system."
    >
      <dl className="border-t border-line">
        {profile.techGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05}>
            <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-7">
              <dt className="pt-1 font-mono text-sm font-medium text-accent">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
