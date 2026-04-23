import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
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

const highlights = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@abhishekganvir.dev",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "India · Remote friendly",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Usually within 24 hours",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Page header */}
      <div className="relative text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground">
          <Sparkles size={14} className="text-primary" />
          Let's collaborate
        </span>
        <h2 className="mt-5 text-5xl md:text-6xl font-bold gradient-text">Contact Me</h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground">
          Got a question or an idea? Send me a message and I'll get back to you soon.
        </p>
      </div>

      {/* Two column layout */}
      <div className="relative mt-14 grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* LEFT — Get in touch */}
        <div className="relative gradient-card border border-border rounded-3xl p-8 md:p-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-3">
              <span className="block w-10 h-1 rounded-full gradient-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Get in Touch
              </span>
            </div>

            <h3 className="mt-5 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Let's build something <span className="gradient-text">great</span> together.
            </h3>

            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Whether you have a project in mind, a role to discuss, or just want to say hi —
              my inbox is always open. I'll reply as soon as I can.
            </p>

            {/* Contact highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:bg-card/70 hover:border-primary/40 transition-smooth"
                  >
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center gradient-primary text-primary-foreground glow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {h.label}
                      </p>
                      <p className="font-semibold text-foreground">{h.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability badge */}
            <div className="mt-auto pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-emerald-300">
                  Available for new opportunities
                </span>
              </div>
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
          className="relative gradient-card border border-border rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-20px_oklch(0.68_0.22_295/0.3)] flex flex-col"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Send a Message</h3>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center gradient-primary text-primary-foreground glow-sm">
              <Send size={18} />
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and I'll get back to you shortly.
          </p>

          <div className="mt-6 space-y-5 flex-1">
            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Your Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Your Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-muted-foreground"
                />
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project, idea, or question..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-smooth hover:opacity-90 glow-sm"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
