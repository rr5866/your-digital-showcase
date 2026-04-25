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
      <div className="relative mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT — Get In Touch */}
        <div className="space-y-10">
          <div className="rounded-2xl gradient-card border border-border p-7 md:p-8 glow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-7">Get In Touch</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-card/60 border border-border text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@abhishekganvir.dev"
                    className="font-semibold text-foreground hover:text-primary transition-smooth"
                  >
                    hello@abhishekganvir.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-card/60 border border-border text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-card/60 border border-border text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Response Time
                  </p>
                  <p className="font-semibold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm text-foreground">
                Available for new opportunities
              </span>
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
                    className="h-12 w-12 rounded-full flex items-center justify-center gradient-primary text-primary-foreground hover:opacity-90 transition-smooth glow-sm"
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
