import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";

export function Education() {
  return (
    <Section id="education" tag="education" title="Education & certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          {profile.education.map((entry, index) => (
            <Reveal key={entry.school} delay={index * 0.08}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {entry.school}
                  </h3>
                  <span className="shrink-0 font-mono text-sm text-muted">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-2 text-muted">{entry.credential}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div>
            <p className="eyebrow">{"// certifications"}</p>
            <ul className="mt-5 space-y-3">
              {profile.certifications.map((cert) => (
                <li key={cert} className="flex gap-3 text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--signal)" }}
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
