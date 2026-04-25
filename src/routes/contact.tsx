import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

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

const inquiryTypes = [
  "General Inquiries",
  "Project Collaboration",
  "Job Opportunity",
  "Just Saying Hi",
];

const socials = [
  { icon: Github, href: "https://github.com/AbhishekGanvir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/alright.abhi", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Title */}
      <div className="relative text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold gradient-text">Let's Connect</h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Have a project in mind, an opportunity to share, or just want to say hi?
          Drop a message — I usually reply within a day.
        </p>
      </div>

      {/* Two column */}
      <div className="relative mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        {/* LEFT — Get In Touch */}
        <div className="flex flex-col gap-8 h-full">
          <div className="relative rounded-3xl gradient-card border border-border p-8 md:p-10 glow-sm overflow-hidden flex-1 flex flex-col">
            {/* Decorative blobs */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

            {/* Status pill — TOP */}
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-xs font-medium text-foreground tracking-wide">
                Available for new opportunities
              </span>
            </div>

            <h3 className="relative text-4xl md:text-5xl font-bold gradient-text mb-3 leading-tight">
              Get In Touch
            </h3>
            <p className="relative text-muted-foreground mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="relative space-y-3">
              <a
                href="mailto:hello@abhishekganvir.dev"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:border-primary/50 hover:bg-card/60 transition-smooth group"
              >
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:scale-105 transition-smooth shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-smooth truncate">
                    hello@abhishekganvir.dev
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card/40 hover:border-primary/50 transition-smooth group">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-smooth shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="font-semibold text-foreground text-sm truncate">
                      Maharashtra, IN
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card/40 hover:border-primary/50 transition-smooth group">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-smooth shrink-0">
                    <Clock size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Replies in
                    </p>
                    <p className="font-semibold text-foreground text-sm truncate">
                      ~24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Find me on</h3>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-12 w-12 rounded-full flex items-center justify-center gradient-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 transition-smooth glow-sm"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-2xl gradient-card border border-border p-7 md:p-8 glow-sm space-y-5"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Send a Message
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                required
                type="text"
                placeholder="Your Name"
                maxLength={100}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-card/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
              />
            </div>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                maxLength={255}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-card/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <select
            required
            defaultValue=""
            className="w-full px-4 py-3.5 rounded-xl bg-card/40 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
          >
            <option value="" disabled className="bg-background">
              Select a topic
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t} className="bg-background">
                {t}
              </option>
            ))}
          </select>

          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-3.5 top-4 text-muted-foreground"
            />
            <textarea
              required
              rows={6}
              placeholder="Your Message"
              maxLength={1000}
              className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-card/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-smooth hover:opacity-90 glow-sm"
          >
            <Send size={16} />
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
