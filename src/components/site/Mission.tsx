import { Leaf, Scale, Award, Lightbulb } from "lucide-react";
import { Reveal } from "./Reveal";

const VALUES = [
  { name: "Sustentabilidade", Icon: Leaf },
  { name: "Ética", Icon: Scale },
  { name: "Excelência", Icon: Award },
  { name: "Inovação", Icon: Lightbulb },
];

export function Mission() {
  return (
    <section id="missao-valores" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 opacity-30"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="var(--cream)" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="var(--accent)" strokeWidth="0.7" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Missão</p>
            <span className="mt-5 block h-px w-24 bg-accent" />
          </Reveal>
          <Reveal delay={90}>
            <p className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.2] font-semibold text-on-forest">
              Valorizar os alunos e profissionais da área de Ciências Ambientais no mercado de
              trabalho.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="eyebrow mt-20">Valores</p>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.name} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-on-forest/15 bg-cream/[0.05] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/70 hover:bg-cream/[0.1]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <v.Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-on-forest">{v.name}</h3>
                <span className="mt-4 block h-0.5 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}