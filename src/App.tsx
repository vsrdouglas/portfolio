import { Nav } from "./components/Nav.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { TechStack } from "./components/TechStack.tsx";
import { Experience } from "./components/Experience.tsx";
import { Projects } from "./components/Projects.tsx";
import { Education } from "./components/Education.tsx";
import { Contact } from "./components/Contact.tsx";
import { Footer } from "./components/Footer.tsx";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
