import { Reveal } from "./Reveal";

const FACTS = [
  { value: "2026", label: "Ano de fundação" },
  { value: "UFC", label: "Universidade Federal do Ceará" },
  { value: "Ciências Ambientais", label: "Área de atuação" },
];

export function About() {
  return (
    <section id="quem-somos" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Quem Somos</p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
                Conheça a Litorânea
              </h2>
              <span className="mt-6 block h-px w-24 bg-accent" />
            </Reveal>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <Reveal delay={80}>
              <p>
                A Litorânea Ambiental é a nova Empresa Júnior do curso de Ciências Ambientais da
                UFC.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Nascemos em 2026 com o propósito de aproximar a universidade do mercado de trabalho,
                oferecendo aos estudantes uma experiência prática por meio do desenvolvimento de
                soluções ambientais para empresas, produtores rurais e órgãos públicos.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal as="li" key={f.value} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]">
                <span className="block h-1 w-10 rounded-full bg-accent" />
                <p className="mt-5 font-display text-2xl leading-tight font-semibold text-forest sm:text-3xl">
                  {f.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}