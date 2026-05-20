import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Scissors, Fish, Hammer, Construction, Wrench, Sparkles,
  Award, ShieldCheck, BadgeCheck, FileText, Phone, Mail, Facebook, MapPin, ArrowRight, Menu, X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import pPond from "@/assets/portfolio-pond.jpg";
import pLawn from "@/assets/portfolio-lawn.jpg";
import pPavers from "@/assets/portfolio-pavers.jpg";
import pGarden from "@/assets/portfolio-garden.jpg";
import pHardscape from "@/assets/portfolio-hardscape.jpg";
import pPatio from "@/assets/portfolio-patio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beautiful Landscapes LLC — Virginia Fine Garden Specialists" },
      { name: "description", content: "25 years transforming Virginia outdoor spaces. Fine garden design, ponds, hardscaping & maintenance. Free estimates — (434) 953-1814." },
      { property: "og:title", content: "Beautiful Landscapes LLC" },
      { property: "og:description", content: "Residential Fine Garden Specialists — 25 Years of Experience in Virginia." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Leaf, title: "Fine Garden Design", desc: "Custom garden designs crafted to elevate your home's natural character." },
  { icon: Scissors, title: "Garden Maintenance", desc: "Year-round care that keeps your landscape thriving in every season." },
  { icon: Fish, title: "Fish Pond Installation", desc: "Tranquil water features and koi ponds built with lasting craftsmanship." },
  { icon: Construction, title: "Outdoor Construction", desc: "Patios, pergolas, and outdoor living spaces built to enjoy for decades." },
  { icon: Hammer, title: "Hardscaping & Pavers", desc: "Stone walkways, retaining walls, and pavers that anchor your landscape." },
  { icon: Wrench, title: "Handyman Services", desc: "Reliable property fixes and upgrades from a team you can trust." },
  { icon: Sparkles, title: "Special Projects", desc: "From unique installations to one-of-a-kind features — we bring it to life." },
];

const portfolio = [
  { src: pPond, label: "Fish Pond Installation", span: "tall" },
  { src: pLawn, label: "Lawn & Maintenance", span: "wide" },
  { src: pPavers, label: "Paver Walkway", span: "tall" },
  { src: pGarden, label: "Garden Beds", span: "wide" },
  { src: pHardscape, label: "Hardscaping", span: "normal" },
  { src: pPatio, label: "Outdoor Construction", span: "tall" },
];

const trust = [
  { icon: Award, stat: "25 Years", label: "Of Experience" },
  { icon: ShieldCheck, stat: "Licensed", label: "& Insured" },
  { icon: BadgeCheck, stat: "Guaranteed", label: "Satisfaction" },
  { icon: FileText, stat: "Free", label: "Estimates" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  const nav = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-primary">
            <Leaf className="w-5 h-5" />
            <span className="text-base tracking-tight">Beautiful Landscapes</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{n.label}</a>
            ))}
            <a href="tel:+14349531814" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-dark transition-colors">
              <Phone className="w-4 h-4" /> (434) 953-1814
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-5 py-4 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/80">{n.label}</a>
              ))}
              <a href="tel:+14349531814" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold">
                <Phone className="w-4 h-4" /> Call (434) 953-1814
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-16">
        <img src={hero} alt="Beautifully landscaped Virginia residential garden at golden hour" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Serving Virginia for 25 Years
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
              Transforming Outdoor Spaces for <span className="text-gold">25 Years</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              Residential fine garden specialists creating timeless landscapes, ponds, and outdoor living spaces across Virginia — with craftsmanship that lasts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-105 transition shadow-soft">
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition">
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Premium services for your outdoor sanctuary</h2>
            <p className="mt-5 text-lg text-muted-foreground">From the first design sketch to seasonal upkeep, we handle every detail of your landscape.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group p-7 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">A showcase of craftsmanship</h2>
              <p className="mt-5 text-lg text-muted-foreground">Every project is built to be durable and beautiful — guaranteed.</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] gap-4">
            {portfolio.map((p, i) => {
              const span =
                p.span === "tall" ? "row-span-2"
                : p.span === "wide" ? "col-span-2"
                : "";
              return (
                <figure key={i} className={`group relative overflow-hidden rounded-xl bg-card ${span}`}>
                  <img src={p.src} alt={p.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 text-primary text-xs font-semibold backdrop-blur">
                      {p.label}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">A quarter century of trust</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((t) => (
              <div key={t.label} className="text-center p-8 rounded-xl bg-accent/40 border border-border">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <t.icon className="w-7 h-7" />
                </div>
                <div className="mt-5 text-2xl font-bold font-display text-primary">{t.stat}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="px-5 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 lg:p-14 shadow-soft">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold text-gold-foreground text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Special Offer
              </span>
              <h3 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight">
                20% Labor Discount for Seniors & Customers with Health Challenges
              </h3>
              <p className="mt-4 text-lg text-primary-foreground/85 max-w-2xl">
                And our promise: <span className="text-gold font-semibold">if it's not durable and beautiful, the labor is free</span> — guaranteed.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-105 transition whitespace-nowrap">
              Claim Your Discount <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Let's design your dream outdoor space</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Free estimates, honest advice, and 25 years of experience. Reach out anytime — we'd love to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+14349531814" className="flex items-center gap-4 p-5 rounded-xl bg-accent/50 border border-border hover:border-primary/40 transition group">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition">(434) 953-1814</div>
                </div>
              </a>
              <a href="mailto:beautifullandscapesllc@gmail.com" className="flex items-center gap-4 p-5 rounded-xl bg-accent/50 border border-border hover:border-primary/40 transition group">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email</div>
                  <div className="text-base font-semibold text-foreground group-hover:text-primary transition truncate">beautifullandscapesllc@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-accent/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Service Area</div>
                  <div className="text-base font-semibold text-foreground">Virginia — Residential</div>
                </div>
              </div>
            </div>

            <a href="tel:+14349531814" className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition shadow-soft">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="text-2xl font-bold">Request a Free Estimate</h3>
            <p className="mt-2 text-muted-foreground text-sm">We'll get back to you within one business day.</p>
            <div className="mt-8 space-y-5">
              <Field label="Name" name="name" type="text" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition">
                {sent ? "Thank you — we'll be in touch!" : "Submit Request"}
                {!sent && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <Leaf className="w-6 h-6 text-gold" />
              Beautiful Landscapes LLC
            </div>
            <p className="mt-4 text-primary-foreground/80 max-w-md leading-relaxed">
              25 Years of Experience — Residential Fine Garden Specialists serving Virginia with craftsmanship, care, and a guarantee.
            </p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 transition text-sm font-medium">
              <Facebook className="w-4 h-4" /> Follow on Facebook
            </a>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
              <li><a href="#services" className="hover:text-gold transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition">Portfolio</a></li>
              <li><a href="#why" className="hover:text-gold transition">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
              <li><a href="tel:+14349531814" className="hover:text-gold transition flex items-center gap-2"><Phone className="w-4 h-4" /> (434) 953-1814</a></li>
              <li><a href="mailto:beautifullandscapesllc@gmail.com" className="hover:text-gold transition flex items-start gap-2 break-all"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> beautifullandscapesllc@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Virginia, USA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 text-xs text-primary-foreground/60 flex flex-col sm:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} Beautiful Landscapes LLC. All rights reserved.</span>
            <span>Licensed & Insured · Free Estimates</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
        placeholder={label}
      />
    </div>
  );
}
