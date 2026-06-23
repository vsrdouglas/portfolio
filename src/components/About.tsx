import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";
import portrait from "../assets/portrait.jpg";

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

        <div className="space-y-5">
          <Reveal delay={0.05}>
            <figure
              className="rounded-2xl p-[3px] shadow-xl shadow-accent/10"
              style={{ background: "var(--signal)" }}
            >
              <img
                src={portrait}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                alt="Douglas Rodrigues in front of the San Francisco skyline"
                className="aspect-square w-full rounded-[14px] object-cover"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.12}>
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
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
