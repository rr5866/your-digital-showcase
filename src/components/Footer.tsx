import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/AbhishekGanvir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/alright.abhi", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@abhishekganvir.dev", label: "Email" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const scrollTop = () =>
    typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 border-t border-border/40 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">Abhishek Ganvir</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Full Stack Developer crafting smooth, scalable web & mobile experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-foreground">
                Available for work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Let's Connect
            </h4>
            <a
              href="mailto:hello@abhishekganvir.dev"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth block mb-4"
            >
              hello@abhishekganvir.dev
            </a>
            <div className="flex flex-wrap items-center gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-10 w-10 rounded-full flex items-center justify-center border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-smooth"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Abhishek Ganvir. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Built with <span className="text-primary">♥</span> using React & TanStack
            </p>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="h-9 w-9 rounded-full flex items-center justify-center border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-smooth"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
