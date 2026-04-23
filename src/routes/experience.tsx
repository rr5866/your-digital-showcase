import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, GraduationCap, Award, Calendar, Building2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abhishek Ganvir" },
      {
        name: "description",
        content:
          "Professional experience, education, and certifications of Abhishek Ganvir — Full Stack Developer.",
      },
      { property: "og:title", content: "Experience — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Roles, internships, education and certifications across my journey as a developer.",
      },
    ],
  }),
  component: ExperiencePage,
});

type Category = "All" | "Work" | "Education" | "Certification";

type Item = {
  icon: typeof Briefcase;
  type: Exclude<Category, "All">;
  title: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

const items: Item[] = [
  {
    icon: Briefcase,
    type: "Work",
    title: "Freelance Full Stack Developer",
    org: "Self-employed",
    period: "2024 — Present",
    description:
      "Designing and shipping responsive web apps for clients — from landing pages to full SaaS dashboards with auth, payments, and APIs.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    icon: Briefcase,
    type: "Work",
    title: "Web Development Intern",
    org: "Tech Startup",
    period: "2023 — 2024",
    description:
      "Built and maintained customer-facing features in a React + Node stack. Improved page performance by 35% and contributed to design-system tokens.",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Tech, Computer Science & Engineering",
    org: "University",
    period: "2023 — 2027",
    description:
      "Pursuing a degree focused on software engineering, data structures, databases, and AI fundamentals.",
  },
  {
    icon: Award,
    type: "Certification",
    title: "Full Stack Web Development",
    org: "Online Bootcamp",
    period: "2024",
    description:
      "Comprehensive program covering MERN stack, REST APIs, authentication, and deployment workflows.",
    tags: ["MERN", "REST", "Auth"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "JavaScript & React Specialization",
    org: "Coursera",
    period: "2024",
    description:
      "Deep dive into modern JavaScript, hooks, state management, and component architecture.",
    tags: ["JavaScript", "React"],
  },
];

const typeStyles: Record<Item["type"], string> = {
  Work: "bg-primary/15 text-primary border-primary/30",
  Education: "bg-accent/15 text-accent border-accent/30",
  Certification: "bg-primary-glow/15 text-primary-glow border-primary-glow/30",
};

const categories: { key: Category; icon: typeof Briefcase }[] = [
  { key: "All", icon: Calendar },
  { key: "Work", icon: Briefcase },
  { key: "Education", icon: GraduationCap },
  { key: "Certification", icon: Award },
];

function ExperiencePage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.type === active);

  const stats = [
    { label: "Years Coding", value: "3+", icon: Calendar },
    { label: "Roles", value: items.filter((i) => i.type === "Work").length.toString(), icon: Briefcase },
    { label: "Certifications", value: items.filter((i) => i.type === "Certification").length.toString(), icon: Award },
    { label: "Degrees", value: items.filter((i) => i.type === "Education").length.toString(), icon: GraduationCap },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="A snapshot of roles, learning milestones and certifications that shaped my path as a developer."
      />

      {/* Stats row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="gradient-card border border-border rounded-2xl p-5 transition-smooth hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground" />
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Category filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {categories.map((c) => {
          const Icon = c.icon;
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary glow-sm"
                  : "bg-secondary/40 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <Icon size={14} />
              {c.key}
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {filtered.map((item, idx) => {
          const Icon = item.icon;
          return (
            <article
              key={`${item.title}-${idx}`}
              className="group relative gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* decorative gradient blob */}
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary glow-sm flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${typeStyles[item.type]}`}
                    >
                      {item.type}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={12} className="text-primary" />
                  {item.org}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary" />
                  {item.period}
                </span>
              </div>

              <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {item.tags && (
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
