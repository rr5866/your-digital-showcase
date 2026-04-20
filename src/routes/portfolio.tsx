import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Code2, Award, Boxes, ExternalLink, ArrowRight } from "lucide-react";
import intervueImg from "../assets/projects/intervueai.png";
import blendyImg from "../assets/projects/blendy.png";
import watchitImg from "../assets/projects/watchit.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portofolio — Abhishek Ganvir" },
      {
        name: "description",
        content: "Selected projects, certificates and tech stack by Abhishek Ganvir.",
      },
      { property: "og:title", content: "Portofolio — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Projects, certifications and the tech I build with.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    name: "IntervueAI",
    img: intervueImg,
    description:
      "Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.",
    demo: "https://intervueai-io.vercel.app/",
  },
  {
    name: "Blendy",
    img: blendyImg,
    description:
      "A social app where you can connect in real-time, log in with one click, share moments, posts instantly.",
    demo: "https://blendy-download.vercel.app/",
  },
  {
    name: "WATCHit",
    img: watchitImg,
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    demo: "https://watchit-1.onrender.com/",
  },
];

const certificates = [
  { name: "React Native — Infosys Springboard", year: "2024" },
  { name: "Complete 2024 Web Development Bootcamp — Udemy", year: "2024" },
  { name: "Soft Skill Development — UNNATI Foundation", year: "2024" },
];

const techStack = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Express JS", color: "#A855F7" },
  { name: "Node JS", color: "#339933" },
  { name: "React + Native", color: "#61DAFB" },
  { name: "MongoDB", color: "#47A248" },
  { name: "JWT", color: "#D63AFF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Docker", color: "#2496ED" },
];

type Tab = "projects" | "certificates" | "tech";

const tabs: { id: Tab; label: string; icon: typeof Code2 }[] = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "tech", label: "Tech Stack", icon: Boxes },
];

function PortfolioPage() {
  const [active, setActive] = useState<Tab>("projects");

  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text">Portfolio Showcase</h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise. Each section
          represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Tabs */}
      <div className="relative mt-12 mx-auto max-w-4xl gradient-card border border-border rounded-2xl p-2 grid grid-cols-3 gap-2">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl transition-smooth ${
                isActive
                  ? "bg-primary/15 border border-primary/30 text-foreground glow-sm"
                  : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <Icon size={20} className={isActive ? "text-primary" : ""} />
              <span className="font-medium text-sm">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative mt-12">
        {active === "projects" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group gradient-card border border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow transition-smooth font-medium"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <button className="inline-flex items-center gap-1.5 text-sm bg-secondary hover:bg-primary/20 text-secondary-foreground px-3 py-1.5 rounded-lg transition-smooth">
                      Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {active === "certificates" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((c) => (
              <div
                key={c.name}
                className="gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 via-primary-glow/10 to-accent/20 border border-border flex items-center justify-center">
                  <Award size={48} className="text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.year}</p>
              </div>
            ))}
          </div>
        )}

        {active === "tech" && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="aspect-square gradient-card border border-border rounded-2xl flex flex-col items-center justify-center gap-3 p-4 transition-smooth hover:border-primary/50 hover:-translate-y-1"
              >
                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}33, ${t.color}11)`,
                    color: t.color,
                    border: `1px solid ${t.color}44`,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-foreground text-center leading-tight">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
