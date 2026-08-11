import { Sprout, FileText, Compass, Recycle } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    sigla: "PRAD",
    title: "Plano de Recuperação de Áreas Degradadas ou Alteradas",
    text: "Documento técnico voltado ao planejamento e à execução de ações para recuperação de áreas que sofreram degradação ou alteração ambiental.",
    Icon: Sprout,
  },
  {
    sigla: "RAS",
    title: "Relatório Ambiental Simplificado",
    text: "Estudo técnico utilizado no processo de licenciamento ambiental de atividades de pequeno porte e baixo potencial de impacto.",
    Icon: FileText,
  },
  {
    sigla: "EVA",
    title: "Estudo de Viabilidade Ambiental",
    text: "Análise técnica preliminar que avalia a compatibilidade de um novo projeto com o meio ambiente e a legislação ambiental aplicável.",
    Icon: Compass,
  },
  {
    sigla: "PGRS",
    title: "Plano de Gerenciamento de Resíduos Sólidos",
    text: "Plano voltado ao gerenciamento adequado dos resíduos sólidos, contemplando ações de planejamento, manejo e destinação ambientalmente adequada.",
    Icon: Recycle,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Estudos e planos técnicos ambientais
          </h2>
          <span className="mt-6 block h-px w-24 bg-accent" />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.sigla} delay={i * 80}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <p className="font-display text-4xl leading-none font-semibold tracking-tight text-forest">
                    {s.sigla}
                  </p>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.Icon size={22} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg leading-snug font-semibold text-forest">{s.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}