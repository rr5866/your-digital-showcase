import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FolderGit2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

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

function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="About Me"
        title="Building smart, scalable products"
        description="Hello, I'm Abhishek Ganvir — passionate about building smart and scalable web & mobile applications. I've completed a full-stack development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry by 2027 and eventually move toward AI and data science."
      />

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <a
          href="https://drive.google.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm"
        >
          Download CV <Download size={16} />
        </a>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-6 py-3 rounded-xl font-medium transition-smooth hover:border-primary/50 hover:text-primary"
        >
          View Projects <FolderGit2 size={16} />
        </Link>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {[
          {
            title: "Frontend",
            items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
          },
          {
            title: "Backend",
            items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
          },
          {
            title: "Tools",
            items: ["Git & GitHub", "Vercel", "Figma", "Postman"],
          },
        ].map((g) => (
          <div
            key={g.title}
            className="gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/40"
          >
            <h3 className="text-lg font-semibold gradient-text mb-4">{g.title}</h3>
            <ul className="space-y-2">
              {g.items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
