import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, MessageSquare, Send, Share2, Linkedin, Instagram, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhishek Ganvir" },
      {
        name: "description",
        content: "Get in touch with Abhishek Ganvir — let's build something great together.",
      },
      { property: "og:title", content: "Contact — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Have something to discuss? Send me a message and let's talk.",
      },
    ],
  }),
  component: ContactPage,
});

const socials = [
  {
    icon: Linkedin,
    name: "Let's Connect",
    handle: "on LinkedIn",
    href: "https://linkedin.com/",
    color: "#0A66C2",
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@alright.abhi",
    href: "https://instagram.com/alright.abhi",
    color: "#E4405F",
  },
  {
    icon: Github,
    name: "Github",
    handle: "@AbhishekGanvir",
    href: "https://github.com/AbhishekGanvir",
    color: "#9CA3AF",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text">Contact Me</h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          (e.target as HTMLFormElement).reset();
        }}
        className="relative mt-12 gradient-card border border-border rounded-3xl p-6 md:p-8 space-y-5 shadow-[0_20px_60px_-20px_oklch(0.68_0.22_295/0.3)]"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text">Get in Touch</h3>
          <Share2 size={22} className="text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          Have something to discuss? Send me a message and let's talk.
        </p>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
          />
        </div>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
          />
        </div>

        <div className="relative">
          <MessageSquare size={18} className="absolute left-4 top-4 text-muted-foreground" />
          <textarea
            required
            rows={6}
            placeholder="Your Message"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-smooth hover:opacity-90 glow-sm"
        >
          <Send size={16} />
          {sent ? "Message Sent ✓" : "Send Message"}
        </button>

        <hr className="border-border/60" />

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-1 rounded-full gradient-primary" />
            <h4 className="text-lg font-bold text-foreground">Connect With Me</h4>
          </div>
          <div className="space-y-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-smooth"
                >
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}33, ${s.color}11)`,
                      border: `1px solid ${s.color}44`,
                      color: s.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </form>
    </section>
  );
}
