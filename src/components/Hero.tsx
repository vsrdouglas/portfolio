import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/profile.ts";
import { HeroCanvas } from "./HeroCanvas.tsx";
import { ArrowDownIcon, ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons.tsx";

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Children stagger in after the canvas is already breathing behind them.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
    >
      <HeroCanvas />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pb-20 pt-32"
      >
        <motion.p
          variants={item}
          className="eyebrow flex items-center gap-2"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-warm" />
          {profile.hero.lead}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          {profile.hero.headline}{" "}
          <span className="text-gradient">{profile.hero.highlight}</span>{" "}
          {profile.hero.headlineTail}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.hero.subhead}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--signal)" }}
          >
            Get in touch
            <ArrowUpRightIcon width={16} height={16} />
          </a>
          <a
            href="https://github.com/vsrdouglas"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            <GitHubIcon width={18} height={18} />
            GitHub
          </a>
          <a
            href={profile.socials[1].href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface p-3 text-ink transition-colors hover:border-accent"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface p-3 text-ink transition-colors hover:border-accent"
          >
            <MailIcon width={18} height={18} />
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-5">
              <dt className="font-display text-2xl font-bold text-ink">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDownIcon className="animate-bounce" />
      </a>
    </section>
  );
}
