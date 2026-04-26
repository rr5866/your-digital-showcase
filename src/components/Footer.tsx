import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/AbhishekGanvir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/alright.abhi", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@abhishekganvir.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Ganvir. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-smooth"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
