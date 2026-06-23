import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";

export function About() {
  return (
    <Section id="about" tag="about" title="Backend depth, full-stack range">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <aside className="rounded-2xl border border-line bg-surface p-6">
            <p className="eyebrow">{"// currently"}</p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-muted">Role</dt>
                <dd className="mt-1 font-medium text-ink">{profile.role}</dd>
              </div>
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="mt-1 font-medium text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="mt-1 font-medium text-ink">
                  Scalable, cloud-native backend systems
                </dd>
              </div>
              <div>
                <dt className="text-muted">Open to</dt>
                <dd className="mt-1 font-medium text-ink">
                  Backend &amp; tech leadership roles
                </dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
