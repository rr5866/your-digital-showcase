import { createFileRoute } from "@tanstack/react-router";
import { Download, Code2, ArrowUpRight, Award, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhishek Ganvir" },
      {
        name: "description",
        content:
          "Hello, I'm Abhishek Ganvir — passionate about building smart and scalable web & mobile applications.",
      },
      { property: "og:title", content: "About — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Passionate full stack developer focused on continuous learning and clean, scalable products.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Code2, value: 4, label: "Total Projects", desc: "Innovative web & mobile solutions crafted" },
  { icon: Award, value: 3, label: "Certificates", desc: "Professional skills validated" },
  { icon: Globe, value: 3, label: "Years of Experience", desc: "Continuous learning journey" },
];

function AboutPage() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text">About Me</h2>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Hello, I'm <span className="text-foreground font-semibold">Abhishek Ganvir</span> passionate
          about building smart and scalable web &amp; mobile applications. I've completed a full-stack
          development course and constantly explore new technologies to refine my skills. Focused on
          continuous learning, I aim to transition into the IT industry by 2027 and eventually move
          towards AI and data science.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="https://drive.google.com/file/d/1gCEEULSWp7hVe70KH7m_IkQzKjB1tK0Y/view"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-primary/40 bg-primary/5 backdrop-blur px-7 py-3 rounded-xl font-medium text-foreground transition-smooth hover:border-primary hover:bg-primary/10"
          >
            <Code2 size={16} /> View Projects
          </a>
        </div>
      </div>

      <div className="relative mt-16 grid sm:grid-cols-3 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="group relative overflow-hidden gradient-card border border-border rounded-2xl p-6 backdrop-blur transition-smooth hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                  <Icon size={22} />
                </div>
                <span className="text-5xl font-bold text-foreground">{s.value}</span>
              </div>
              <div className="mt-6">
                <p className="text-base font-semibold tracking-wider text-foreground uppercase">
                  {s.label}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <ArrowUpRight
                    size={16}
                    className="text-primary opacity-0 group-hover:opacity-100 transition-smooth"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
