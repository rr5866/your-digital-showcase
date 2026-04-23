import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Award, Calendar, Building2, Sparkles } from "lucide-react";
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
  year: string;
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
    year: "2024",
    description:
      "Designing and shipping responsive web apps for clients — from landing pages to full SaaS dashboards with auth, payments, and APIs.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "JavaScript & React Specialization",
    org: "Coursera",
    period: "2024",
    year: "2024",
    description:
      "Deep dive into modern JavaScript, hooks, state management, and component architecture.",
    tags: ["JavaScript", "React"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "Full Stack Web Development",
    org: "Online Bootcamp",
    period: "2024",
    year: "2024",
    description:
      "Comprehensive program covering MERN stack, REST APIs, authentication, and deployment workflows.",
    tags: ["MERN", "REST", "Auth"],
  },
  {
    icon: Briefcase,
    type: "Work",
    title: "Web Development Intern",
    org: "Tech Startup",
    period: "2023 — 2024",
    year: "2023",
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
    year: "2023",
    description:
      "Pursuing a degree focused on software engineering, data structures, databases, and AI fundamentals.",
  },
];

const typeStyles: Record<Item["type"], string> = {
  Work: "bg-primary/15 text-primary border-primary/30",
  Education: "bg-accent/15 text-accent border-accent/30",
  Certification: "bg-primary-glow/15 text-primary-glow border-primary-glow/30",
};

function ExperiencePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="A timeline of roles, learning milestones and certifications that shaped my path as a developer."
      />

      <div className="relative mt-20">
        {/* vertical line with gradient and pulse */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

        {/* start sparkle */}
        <div className="absolute left-6 md:left-1/2 -top-3 -translate-x-1/2 h-6 w-6 rounded-full gradient-primary glow-md flex items-center justify-center">
          <Sparkles size={12} className="text-primary-foreground" />
        </div>

        <div className="space-y-14">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* dot + connector arm */}
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10 flex items-center">
                  <div className="h-5 w-5 rounded-full gradient-primary glow-sm ring-4 ring-background" />
                </div>
                {/* horizontal connector arm (md+) */}
                <div
                  className={`hidden md:block absolute top-[42px] h-px bg-gradient-to-r ${
                    isLeft
                      ? "right-1/2 mr-3 w-12 from-transparent to-primary/60"
                      : "left-1/2 ml-3 w-12 from-primary/60 to-transparent"
                  }`}
                />

                {/* year badge — opposite side on md+ */}
                <div
                  className={`hidden md:flex items-start ${
                    isLeft ? "md:col-start-2 md:justify-start md:pl-12" : "md:col-start-1 md:row-start-1 md:justify-end md:pr-12"
                  }`}
                >
                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-semibold text-foreground">
                    <Calendar size={12} className="text-primary" />
                    {item.period}
                  </div>
                </div>

                {/* card */}
                <div
                  className={`pl-16 md:pl-0 ${
                    isLeft
                      ? "md:col-start-1 md:row-start-1 md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <article className="group relative gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 overflow-hidden">
                    {/* hover glow blob */}
                    <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />

                    <div className="relative flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl gradient-primary glow-sm flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${typeStyles[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary">
                          <Building2 size={12} />
                          {item.org}
                        </p>
                      </div>
                    </div>

                    {/* mobile period */}
                    <p className="md:hidden relative mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} className="text-primary" />
                      {item.period}
                    </p>

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
                </div>
              </div>
            );
          })}
        </div>

        {/* end cap */}
        <div className="absolute left-6 md:left-1/2 -bottom-3 -translate-x-1/2 h-6 w-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
