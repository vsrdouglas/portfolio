import { profile, type Certification } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";
import { AwardIcon } from "./icons.tsx";

/** Up to three letters for the fallback badge, from the issuer (or the name). */
function badgeInitials(cert: Certification): string {
  const source = cert.issuer ?? cert.name;
  return source
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function Education() {
  const featured = profile.certifications.filter((cert) => cert.featured);
  const others = profile.certifications.filter((cert) => !cert.featured);

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
            <p className="eyebrow">{"// featured certifications"}</p>

            <ul className="mt-5 space-y-3">
              {featured.map((cert) => (
                <li key={cert.name}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer ?? cert.name}
                        loading="lazy"
                        decoding="async"
                        className="h-12 w-12 shrink-0 rounded-lg border border-line object-contain"
                      />
                    ) : (
                      <span
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-sm font-bold text-white"
                        style={{ background: "var(--signal)" }}
                        aria-hidden="true"
                      >
                        {cert.issuer ? (
                          badgeInitials(cert)
                        ) : (
                          <AwardIcon width={22} height={22} />
                        )}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-medium leading-snug text-ink">
                        {cert.name}
                      </p>
                      {cert.issuer || cert.year ? (
                        <p className="mt-0.5 text-sm text-muted">
                          {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {others.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {others.map((cert) => (
                  <li key={cert.name} className="flex gap-3 text-muted">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--signal)" }}
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{cert.name}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
