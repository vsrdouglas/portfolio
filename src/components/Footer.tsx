import { profile } from "../data/profile.ts";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with React, TypeScript &amp; Tailwind
        </p>
        <div className="flex gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
