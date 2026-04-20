import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Award } from "lucide-react";
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

type Item = {
  icon: typeof Briefcase;
  type: "Work" | "Education" | "Certification";
  title: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

const timeline: Item[] = [
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

function ExperiencePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="A timeline of roles, learning milestones and certifications that shaped my path as a developer."
      />

      <div className="relative mt-16">
        {/* vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative grid md:grid-cols-2 gap-8 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                {/* dot */}
                <div className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full gradient-primary glow-sm ring-4 ring-background" />
                </div>

                <div className={`pl-14 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${typeStyles[item.type]}`}
                  >
                    <Icon size={12} />
                    {item.type}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.period}</p>
                </div>

                <div className={`pl-14 md:pl-0 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary mt-1">{item.org}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
