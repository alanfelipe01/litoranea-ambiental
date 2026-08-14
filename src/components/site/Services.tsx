import { useState } from "react";
import {
  Search,
  FileCheck,
  Recycle,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { DecorRings, DecorHills } from "./Decor";

const CATEGORIES = [
  {
    id: "estudos",
    title: "Estudos e Diagnósticos",
    Icon: Search,
    services: [
      {
        code: "EAS",
        title: "Estudo Ambiental Simplificado",
        text: "Documento técnico simplificado que avalia o impacto ambiental de atividades de menor complexidade, agilizando o processo de licenciamento.",
      },
      {
        code: "EIA",
        title: "Estudo de Impacto Ambiental",
        text: "Estudo aprofundado que identifica, avalia e propõe medidas mitigadoras para os impactos ambientais de empreendimentos de significativo potencial poluidor.",
        indication: "grandes empreendimentos sujeitos a licenciamento ambiental federal ou estadual.",
      },
      {
        code: "EIV",
        title: "Estudo de Impacto de Vizinhança",
        text: "Análise dos efeitos positivos e negativos de um empreendimento sobre a qualidade de vida da população do entorno, exigido pelo Estatuto da Cidade para obras de maior porte urbano.",
      },
      {
        code: "EVA",
        title: "Estudo de Viabilidade Ambiental",
        text: "Antes de investir em um projeto, avaliamos sua compatibilidade com a legislação e o meio ambiente local, evitando retrabalho, multas e atrasos no licenciamento futuro.",
        indication: "quem está planejando um novo empreendimento ou expansão.",
      },
      {
        title: "Laudo de Caracterização Ambiental",
        text: "Relatório técnico que descreve as condições ambientais de uma área — vegetação, solo, recursos hídricos — servindo de base para outros estudos e processos de licenciamento.",
      },
      {
        code: "RAS",
        title: "Relatório Ambiental Simplificado",
        text: "Documento técnico exigido no licenciamento de atividades de pequeno porte e baixo impacto ambiental.",
        indication: "pequenos empreendimentos, comércios e propriedades rurais.",
      },
      {
        title: "Teste de Absorção de Solo",
        text: "Ensaio técnico que determina a capacidade de infiltração do solo, essencial para o dimensionamento de sistemas de saneamento individual, como fossas e sumidouros.",
      },
    ],
  },
  {
    id: "planos",
    title: "Planos e Programas Ambientais",
    Icon: FileCheck,
    services: [
      {
        code: "PBA",
        title: "Plano Básico Ambiental",
        text: "Detalha os programas ambientais definidos no processo de licenciamento, traduzindo o EIA/RIMA em ações práticas de execução, monitoramento e controle.",
      },
      {
        code: "PCA",
        title: "Plano de Controle Ambiental",
        text: "Conjunto de medidas e programas voltados a prevenir, controlar e monitorar os impactos ambientais durante a implantação e operação de um empreendimento.",
      },
      {
        code: "PDR",
        title: "Plano de Desmatamento Racional",
        text: "Planejamento técnico para supressão de vegetação de forma controlada e dentro dos limites legais, minimizando o impacto ambiental da atividade.",
      },
      {
        code: "PRAD",
        title: "Plano de Recuperação de Áreas Degradadas",
        text: "Elaboramos o diagnóstico da área afetada e definimos as ações técnicas necessárias para restaurar o equilíbrio ambiental do local — desde o levantamento de campo até o cronograma de execução.",
        indication: "produtores rurais e empresas que precisam regularizar áreas degradadas junto a órgãos ambientais.",
      },
      {
        code: "RAMA",
        title: "Relatório de Acompanhamento e Monitoramento Ambiental",
        text: "Documento periódico que acompanha a evolução das medidas e programas ambientais implementados, verificando sua eficácia ao longo do tempo.",
      },
    ],
  },
  {
    id: "residuos",
    title: "Gestão de Resíduos",
    Icon: Recycle,
    services: [
      {
        code: "PGRS",
        title: "Plano de Gerenciamento de Resíduos Sólidos",
        text: "Estruturamos o manejo correto dos resíduos gerados pela sua atividade — da geração à destinação final — seguindo a Política Nacional de Resíduos Sólidos.",
        indication: "indústrias, comércios e instituições que buscam adequação ambiental.",
      },
      {
        code: "PGRCC",
        title: "Plano de Gerenciamento de Resíduos da Construção Civil",
        text: "Planejamento da destinação correta de entulhos e resíduos gerados em obras, conforme a Resolução CONAMA 307.",
        indication: "construtoras, empreiteiras e obras em geral.",
      },
      {
        code: "PGRSS",
        title: "Plano de Gerenciamento de Resíduos de Serviços de Saúde",
        text: "Gerenciamento adequado de resíduos gerados por unidades de saúde, desde a segregação até a destinação final segura.",
        indication: "clínicas, hospitais, laboratórios e consultórios.",
      },
    ],
  },
  {
    id: "licenciamento",
    title: "Licenciamento e Educação Ambiental",
    Icon: GraduationCap,
    services: [
      {
        code: "ASV",
        title: "Autorização de Supressão Vegetal",
        text: "Processo técnico e documental para obtenção da autorização legal de remoção de vegetação nativa, atendendo às exigências dos órgãos ambientais competentes.",
      },
      {
        title: "Educação Ambiental",
        text: "Programas e ações voltados à sensibilização ambiental de comunidades, empresas e escolas, muitas vezes exigidos como contrapartida em processos de licenciamento.",
      },
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="servicos" className="theme-azul relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Nossos Serviços
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Oferecemos soluções ambientais para diferentes necessidades, desde estudos e diagnósticos até gestão de resíduos, licenciamento e educação ambiental.
          </p>
          <span className="mt-8 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((category, i) => {
            const isOpen = !!open[category.id];
            const count = category.services.length;
            const Icon = category.Icon;

            return (
              <Reveal key={category.id} delay={i * 80}>
                <article className="group h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent/60 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold leading-snug text-forest sm:text-2xl">
                        {category.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-olive">
                        {count} {count === 1 ? "serviço" : "serviços"}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-olive transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggle(category.id)}
                    aria-expanded={isOpen}
                    aria-controls={`services-${category.id}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-forest transition-colors duration-200 hover:border-accent/60 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
                  >
                    {isOpen ? "Recolher serviços" : "Ver serviços"}
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`services-${category.id}`}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-6 space-y-4 border-t border-border pt-6">
                        {category.services.map((service, idx) => (
                          <li
                            key={`${category.id}-${service.code || service.title}-${idx}`}
                            className="rounded-2xl bg-secondary/50 p-4 sm:p-5"
                          >
                            <h4 className="text-base font-semibold leading-snug text-forest sm:text-lg">
                              {service.code && (
                                <span className="mr-2 inline-block text-accent">
                                  {service.code}
                                </span>
                              )}
                              <span className={service.code ? "" : "text-accent"}>
                                {service.title}
                              </span>
                            </h4>
                            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                              {service.text}
                            </p>
                            {service.indication && (
                              <p className="mt-2 text-[0.95rem] leading-relaxed text-forest">
                                <span className="font-semibold">Indicado para:</span>{" "}
                                {service.indication}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
