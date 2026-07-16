/**
 * Single source of truth for every word and link on the site.
 * Edit this file to update content — components read from it, never hardcode.
 */
import incitaVoxLogo from "../assets/incita-vox-logo.png";
import inconfidentesFightLogo from "../assets/inconfidentes-fight-logo.png";
import johnsHopkinsLogo from "../assets/johns-hopkins-logo.png";
import rlAssociadosLogo from "../assets/rl-associados-logo.png";

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly handle: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface TechGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export interface ExperienceEntry {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly stack: readonly string[];
  /** Where it was built, e.g. "Built at Tekna.Rocks". Use for private/proprietary work. */
  readonly context?: string;
  /** Optional logo/brand image. Shown on a dark banner at the top of the card. */
  readonly logo?: string;
  readonly repo?: string;
  readonly live?: string;
}

export interface EducationEntry {
  readonly school: string;
  readonly credential: string;
  readonly period: string;
}

export interface Certification {
  readonly name: string;
  readonly issuer?: string;
  readonly year?: string;
  /** Optional issuer logo. Falls back to an initials/award badge when absent. */
  readonly logo?: string;
  /** Featured certs render as rich cards; the rest as a compact list. */
  readonly featured?: boolean;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly resumeUrl?: string;
  readonly hero: {
    readonly lead: string;
    readonly headline: string;
    readonly highlight: string;
    readonly headlineTail: string;
    readonly subhead: string;
  };
  readonly stats: readonly { readonly value: string; readonly label: string }[];
  readonly about: readonly string[];
  readonly socials: readonly SocialLink[];
  readonly nav: readonly NavItem[];
  readonly techGroups: readonly TechGroup[];
  readonly experience: readonly ExperienceEntry[];
  readonly projects: readonly Project[];
  readonly education: readonly EducationEntry[];
  readonly certifications: readonly Certification[];
}

export const profile: Profile = {
  name: "Douglas Rodrigues",
  role: "Full Stack Developer & Tech Lead",
  location: "Belo Horizonte, Brazil",
  email: "vsrdouglas14@gmail.com",
  // Drop a CV file in /public and set its path here to show the "Download CV" button.
  // resumeUrl: "/douglas-rodrigues-cv.pdf",

  hero: {
    lead: "Full Stack Developer & Tech Lead",
    headline: "I design backend systems",
    highlight: "built to scale",
    headlineTail: "and stay reliable.",
    subhead:
      "Backend developer and tech lead with 5+ years architecting cloud-native services in Node.js, NestJS, TypeScript and PostgreSQL, turning business requirements into systems teams can depend on.",
  },

  stats: [
    { value: "5+", label: "Years building & leading" },
    { value: "Scalable", label: "Cloud-native by design" },
    { value: "T-shaped", label: "Backend deep, full-stack wide" },
  ],

  about: [
    "I'm a backend engineer with 5+ years building scalable, cloud-native systems and high-performance services. I specialize in Node.js, TypeScript, PostgreSQL and Google Cloud, designing architectures that hold up as the business grows.",
    "As a T-shaped engineer, deep backend expertise sits next to a working knowledge of cloud infrastructure, frontend and mobile. That range lets me make sound technical calls and contribute wherever the impact is highest: API design, data migrations, or shipping Angular and Flutter features when the team needs them.",
    "Today I lead backend architecture and a cross-functional team, mentoring engineers and acting as the bridge between the codebase and the people who depend on it.",
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/vsrdouglas",
      handle: "@vsrdouglas",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/douglas-nodejs-nestjs",
      handle: "in/douglas-nodejs-nestjs",
    },
  ],

  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  techGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "SQL", "Dart"],
    },
    {
      label: "Backend",
      items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices"],
    },
    {
      label: "Data",
      items: ["PostgreSQL", "Redis", "NoSQL", "Data modeling", "Query optimization"],
    },
    {
      label: "Cloud & DevOps",
      items: ["Google Cloud", "Firebase", "Docker", "CI/CD", "Serverless"],
    },
    {
      label: "Frontend & Mobile",
      items: ["Angular", "Flutter", "HTML & CSS"],
    },
    {
      label: "Testing",
      items: ["Jest", "Playwright"],
    },
  ],

  experience: [
    {
      company: "Tekna.Rocks",
      role: "Backend Developer",
      period: "Oct 2021 - Present",
      location: "Remote · Mill Valley, CA",
      summary:
        "Leading backend architecture and a cross-functional engineering team building SaaS products for regulated industries.",
      highlights: [
        "Lead the architecture, development and delivery of new features, major integrations and platform improvements, translating business requirements into scalable technical solutions.",
        "Own cloud infrastructure and DevOps on Google Cloud, operating serverless applications, managing cloud costs and maintaining CI/CD pipelines for reliable, high-availability deploys.",
        "Drive PostgreSQL architecture, SQL optimization, data migrations and large-scale refactors across core business systems.",
        "Mentor developers through 1:1s, architecture reviews and feedback cycles, and introduced AI-assisted engineering workflows to the team.",
        "Act as the technical point of contact for third-party vendors during integration and implementation projects.",
      ],
      stack: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "GCP", "Docker", "CI/CD"],
    },
    {
      company: "Universidade Federal de Itajubá",
      role: "Teaching Assistant",
      period: "Apr 2021 - Aug 2021",
      location: "Itabira, Brazil",
      summary:
        "Teaching assistant for Modeling and Analysis of Dynamic Systems, supporting students through theory and applied problem sets.",
      highlights: [],
      stack: ["Systems modeling", "Control theory"],
    },
    {
      company: "Universidade Federal de Itajubá",
      role: "Undergraduate Researcher (PIVIC)",
      period: "Aug 2020 - Aug 2021",
      location: "Itabira, Brazil",
      summary:
        "Scientific initiation research project in control and automation engineering.",
      highlights: [],
      stack: ["Research", "Automation"],
    },
  ],

  // Add projects here as you build them. Each object becomes a card automatically.
  // repo, live and context are all optional, so private/proprietary work fits too:
  //
  // Public side project:
  // {
  //   name: "Service name",
  //   description: "One or two sentences on what it does and the impact.",
  //   stack: ["NestJS", "PostgreSQL", "GCP"],
  //   repo: "https://github.com/vsrdouglas/...",
  //   live: "https://...",
  // },
  //
  // Private / proprietary work (no links, show where it was built instead):
  // {
  //   name: "Billing platform",
  //   context: "Built at Tekna.Rocks",
  //   description: "What it does and the business impact, without exposing internals.",
  //   stack: ["NestJS", "PostgreSQL", "GCP"],
  // },
  projects: [
    {
      name: "IncitaVox",
      context: "AI voice-to-prompt web app · Personal project",
      logo: incitaVoxLogo,
      description:
        "A web app that turns a spoken prompt into an enriched one. It records your voice, transcribes it with Whisper and reads your vocal tone (energy, valence and assertiveness) with a wav2vec2 model, then folds that emotional context back into the prompt. I built the full stack: a React single-page app and a containerized Python service on Cloud Run that processes audio in memory and discards it immediately, so nothing is ever stored.",
      stack: ["React", "TypeScript", "Vite", "Python", "Cloud Run", "Docker", "faster-whisper", "wav2vec2", "Cloudflare"],
      live: "https://incitavox.com",
    },
    {
      name: "Inconfidentes Fight",
      context: "Muay Thai & Boxing event · Ouro Preto, MG",
      logo: inconfidentesFightLogo,
      description:
        "End-to-end platform for one of the largest combat-sports events in the Inconfidentes region. I built the full stack: an animated public site with online athlete registrations, plus a secure admin dashboard backed by a serverless API on Firebase, with JWT auth, rate limiting, analytics and end-to-end tests.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Cloud Functions", "NoSQL", "Express"],
      live: "https://inconfidentesfight.com.br/",
    },
  ],

  education: [
    {
      school: "Universidade Federal de Itajubá",
      credential: "B.Eng. in Control and Automation Engineering",
      period: "2018 - 2022",
    },
    {
      school: "Instituto Federal de Minas Gerais (IFMG)",
      credential: "Technical Course in Industrial Automation",
      period: "2015 - 2017",
    },
  ],

  certifications: [
    {
      name: "HTML, CSS & JavaScript for Web Developers",
      issuer: "Johns Hopkins University",
      year: "2021",
      logo: johnsHopkinsLogo,
      featured: true,
    },
    {
      name: "Six Sigma Green Belt",
      issuer: "RL & Associados",
      year: "2021",
      logo: rlAssociadosLogo,
      featured: true,
    },
    { name: "NodeJS: The Complete Guide (MVC, REST, GraphQL, Deno)" },
    { name: "Flutter & Dart: The Complete Guide" },
  ],
};
