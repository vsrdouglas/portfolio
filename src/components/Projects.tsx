import { profile } from "../data/profile.ts";
import { Section } from "./Section.tsx";
import { Reveal } from "./Reveal.tsx";
import { ArrowUpRightIcon, GitHubIcon } from "./icons.tsx";

export function Projects() {
  const hasProjects = profile.projects.length > 0;

  return (
    <Section
      id="projects"
      tag="projects"
      title="Selected work"
      intro={
        hasProjects
          ? "Things I've built and shipped."
          : undefined
      }
    >
      {hasProjects ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="font-display text-lg font-bold text-ink">
                  {project.name}
                </h3>
                {project.context ? (
                  <p className="mt-1 font-mono text-xs text-accent">
                    {project.context}
                  </p>
                ) : null}
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-ground px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm font-medium">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
                    >
                      <GitHubIcon width={16} height={16} /> Code
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
                    >
                      Live <ArrowUpRightIcon width={16} height={16} />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="rounded-2xl border border-dashed border-line bg-surface p-10 text-center">
            <p className="font-display text-xl font-bold text-ink">
              Case studies are on the way.
            </p>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
              I'm writing up a few of the systems I've built. In the meantime, my
              day-to-day work and side projects live on GitHub.
            </p>
            <a
              href="https://github.com/vsrdouglas"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--signal)" }}
            >
              <GitHubIcon width={18} height={18} />
              Browse my GitHub
            </a>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
