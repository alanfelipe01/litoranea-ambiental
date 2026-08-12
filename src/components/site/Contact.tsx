import { Instagram, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Entre em contato
          </h2>
          <span className="mt-6 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="min-w-0">
            <a
              href="https://instagram.com/litoraneaambiental"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full min-w-0 items-start gap-5 rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Instagram size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm tracking-wide text-muted-foreground">Instagram</span>
                <span className="mt-1 block truncate font-display text-xl font-semibold text-forest">
                  @litoraneaambiental
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <a
              href="mailto:litoraneaambiental.ej@gmail.com"
              className="group flex h-full min-w-0 items-start gap-5 rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm tracking-wide text-muted-foreground">E-mail</span>
                <span className="mt-1 block truncate font-display text-xl font-semibold text-forest">
                  litoraneaambiental.ej@gmail.com
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}