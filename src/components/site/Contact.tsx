import { Instagram, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { DecorRings, DecorContours } from "./Decor";

export function Contact() {
  return (
    <section id="contato" className="theme-verde relative overflow-hidden py-24 sm:py-32">
      <DecorRings className="-right-28 -top-28 h-80 w-80 opacity-60 sm:h-[26rem] sm:w-[26rem]" />
      <DecorContours className="bottom-0 left-0 h-40 w-full opacity-70" />
      <div className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Entre em contato
          </h2>
          <span className="mt-6 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal className="min-w-0">
            <a
              href="mailto:litoraneaambiental.ej@gmail.com?subject=Orçamento - Litorânea Ambiental"
              aria-label="Solicitar orçamento por e-mail"
              className="group flex h-full min-w-0 flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm tracking-wide text-muted-foreground">E-mail</span>
                <span className="mt-1 block font-display text-xl font-semibold text-forest">
                  Quer fazer um orçamento?
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Clique aqui e faça seu orçamento
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-3 block truncate text-sm text-muted-foreground">
                  litoraneaambiental.ej@gmail.com
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <a
              href="https://instagram.com/litoraneaambiental"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visitar perfil do Instagram da Litorânea Ambiental"
              className="group flex h-full min-w-0 flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Instagram size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm tracking-wide text-muted-foreground">Instagram</span>
                <span className="mt-1 block font-display text-xl font-semibold text-forest">
                  @litoraneaambiental
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Acompanhe nossos projetos
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={180} className="min-w-0">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+da+Abolição,+3207+-+Meireles,+Fortaleza+-+CE,+60165-081"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Ver endereço no Google Maps"
              className="group flex h-full min-w-0 flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm tracking-wide text-muted-foreground">Endereço</span>
                <span className="mt-1 block font-display text-lg font-semibold leading-snug text-forest">
                  Av. da Abolição, 3207 - Meireles, Fortaleza - CE, 60165-081
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Ver no mapa
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
