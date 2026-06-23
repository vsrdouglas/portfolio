import { profile } from "../data/profile.ts";
import { Reveal } from "./Reveal.tsx";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons.tsx";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
          {/* Soft signal glow behind the call to action. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 opacity-20 blur-3xl"
            style={{ background: "var(--signal)" }}
          />
          <p className="eyebrow relative">{"// contact"}</p>
          <h2 className="relative mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Let's build something <span className="text-gradient">reliable</span>.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Got a backend challenge, an architecture to untangle, or a role in
            mind? I'd be glad to talk it through.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--signal)" }}
            >
              <MailIcon width={18} height={18} />
              {profile.email}
            </a>
            <a
              href="https://github.com/vsrdouglas"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full border border-line p-3 text-ink transition-colors hover:border-accent"
            >
              <GitHubIcon width={18} height={18} />
            </a>
            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full border border-line p-3 text-ink transition-colors hover:border-accent"
            >
              <LinkedInIcon width={18} height={18} />
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Download CV
                <ArrowUpRightIcon width={16} height={16} />
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
