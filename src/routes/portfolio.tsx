import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Abhishek Ganvir" },
      {
        name: "description",
        content: "Selected projects by Abhishek Ganvir — IntervueAI, Blendy, WATCHit and more.",
      },
      { property: "og:title", content: "Portfolio — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Selected web & mobile projects showcasing full-stack craft.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    name: "IntervueAI",
    description:
      "Real-time mock interviews with AI — no forms, no clicks, just natural and personalized conversations.",
    tags: ["Next.js", "AI", "Realtime"],
    demo: "https://intervueai-io.vercel.app/",
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    name: "Blendy",
    description:
      "A social app where you can connect in real-time, log in with one click, and share moments instantly.",
    tags: ["React", "Realtime", "Auth"],
    demo: "https://blendy-download.vercel.app/",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    name: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment — and everything you love to binge.",
    tags: ["Streaming", "Node.js", "Express"],
    demo: "https://watchit-1.onrender.com/",
    gradient: "from-fuchsia-500/30 to-amber-500/30",
  },
  {
    name: "Devfolio",
    description:
      "Personal portfolio template with smooth animations, dark theme and a clean design system.",
    tags: ["React", "Tailwind", "TS"],
    demo: "#",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
];

function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Portfolio Showcase"
        title="Selected projects"
        description="Explore my journey through projects, certifications, and technical expertise. Each project represents a milestone in my continuous learning path."
      />

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group gradient-card border border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary/50 hover:-translate-y-1"
          >
            <div
              className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <span className="relative text-3xl font-bold gradient-text">{p.name}</span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transition-smooth hover:opacity-90"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
