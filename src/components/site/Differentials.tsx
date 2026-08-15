import { Tag, GraduationCap, HeartHandshake, MessagesSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Preço acessível",
    description:
      "Soluções ambientais com valores acessíveis e adequados à realidade de cada cliente.",
    Icon: Tag,
  },
  {
    title: "Supervisão acadêmica",
    description:
      "Projetos desenvolvidos por estudantes de Ciências Ambientais com supervisão de professores da UFC.",
    Icon: GraduationCap,
  },
  {
    title: "Compromisso social",
    description:
      "Atuação que busca gerar impacto positivo para a sociedade e para o meio ambiente.",
    Icon: HeartHandshake,
  },
  {
    title: "Atendimento próximo",
    description:
      "Comunicação clara e acompanhamento próximo durante todas as etapas do projeto.",
    Icon: MessagesSquare,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="theme-verde py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Por que escolher a Litorânea?
          </h2>
          <span className="mt-8 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="min-w-0">
              <article className="group h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-xl font-semibold leading-snug text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
