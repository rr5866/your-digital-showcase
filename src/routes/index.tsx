import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, ExternalLink, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { InteractiveTerminal } from "../components/InteractiveTerminal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Ganvir — Full Stack Developer" },
      {
        name: "description",
        content:
          "Full Stack Developer crafting smooth, scalable web & mobile experiences. Explore projects, experience, and skills.",
      },
      { property: "og:title", content: "Abhishek Ganvir — Full Stack Developer" },
      {
        property: "og:description",
        content: "Full Stack Developer crafting smooth, scalable web & mobile experiences.",
      },
    ],
  }),
  component: HomePage,
});

const techs = ["React", "Javascript", "Node.js", "PostgreSQL"];
const roles = ["Computer Science", "Engineering Student", "Tech Enthusiast"];

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < word.length) {
            setText(word.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (text.length > 0) {
            setText(word.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

function HomePage() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
            <Sparkles size={14} />
            Ready to Innovate
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-foreground">Full Stack</span>
            <br />
            <span className="gradient-text">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 font-medium h-8">
            <span>{typed}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-pulse" />
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-lg">
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </p>

          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm text-foreground/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm"
            >
              Projects <ExternalLink size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-6 py-3 rounded-xl font-medium transition-smooth hover:border-primary/50 hover:text-primary"
            >
              Contact <Mail size={16} />
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com/AbhishekGanvir", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/alright.abhi", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-11 w-11 rounded-xl border border-border bg-card/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
