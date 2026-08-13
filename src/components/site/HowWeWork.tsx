import { Search, FileText, Users, FileCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos sua necessidade, a situação da área ou atividade e o que precisa ser regularizado.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Proposta técnica",
    description:
      "Apresentamos escopo, prazo e valor, sem burocracia, com linguagem clara.",
    Icon: FileText,
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Nossa equipe, supervisionada por professores do curso de Ciências Ambientais da UFC, desenvolve o estudo com rigor técnico.",
    Icon: Users,
  },
  {
    number: "04",
    title: "Entrega e suporte",
    description:
      "Entregamos o documento pronto para protocolo e acompanhamos possíveis ajustes solicitados pelo órgão ambiental.",
    Icon: FileCheck,
  },
];

export function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Processo</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Como Trabalhamos
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Um fluxo simples e transparente, do primeiro contato até a entrega do documento ambiental.
          </p>
          <span className="mt-8 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <article className="relative h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <step.Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-semibold leading-none text-accent/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
