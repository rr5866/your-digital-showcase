import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ExternalLink, Mail, Github, Linkedin, Instagram } from "lucide-react";
import heroImg from "../assets/hero-dev.png";

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

const techs = ["React", "JavaScript", "Node.js", "PostgreSQL"];

function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
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

          <p className="text-lg text-foreground/90 font-medium">Computer Science &amp; Engineering</p>

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
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
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
          <img
            src={heroImg}
            alt="Developer workstation illustration"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg animate-float drop-shadow-[0_20px_50px_oklch(0.68_0.22_295/0.4)]"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { value: "4", label: "Total Projects", desc: "Innovative web & mobile solutions crafted" },
            { value: "3", label: "Certificates", desc: "Professional skills validated" },
            { value: "3", label: "Years of Experience", desc: "Continuous learning journey" },
          ].map((s) => (
            <div
              key={s.label}
              className="gradient-card border border-border rounded-2xl p-6 backdrop-blur transition-smooth hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-2 font-semibold text-foreground">{s.label}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
