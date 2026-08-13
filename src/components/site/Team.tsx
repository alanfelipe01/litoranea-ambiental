import { Reveal } from "./Reveal";
import foto1 from "@/assets/foto1.jpeg.asset.json";
import foto2 from "@/assets/foto2.jpeg.asset.json";
import foto3 from "@/assets/foto3.jpeg.asset.json";

const MEMBERS = [
  { name: "Laiz dos Reis", role: "Presidente" },
  { name: "Lara Filios", role: "Vice-presidente" },
  { name: "Eysler Mara", role: "Diretora de Projetos" },
  { name: "Ana Vitória", role: "Assessora de Projetos" },
  { name: "Gabriel Lemos", role: "Diretor Financeiro" },
  { name: "Gustavo Miller", role: "Diretor Administrativo" },
  { name: "Renan Monteiro", role: "Diretor Comercial" },
  { name: "Amanda Thaís", role: "Assessora Comercial" },
];

export function Team() {
  return (
    <section id="equipe" className="theme-verde py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Equipe</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-forest">
            Nossa Equipe
          </h2>
          <span className="mt-8 block h-px w-24 bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <div className="grid gap-4">
              <img
                src={foto1.url}
                alt="Equipe da Litorânea Ambiental em atividade de campo"
                loading="lazy"
                className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-80 lg:h-[22rem]"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={foto2.url}
                  alt="Integrante da equipe operando drone em campo"
                  loading="lazy"
                  className="h-36 w-full rounded-2xl object-cover shadow-[var(--shadow-card)] sm:h-44"
                />
                <img
                  src={foto3.url}
                  alt="Equipe realizando levantamento com drone em área arborizada"
                  loading="lazy"
                  className="h-36 w-full rounded-2xl object-cover shadow-[var(--shadow-card)] sm:h-44"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <ul className="grid gap-3 sm:grid-cols-2">
              {MEMBERS.map((m) => (
                <li
                  key={m.name}
                  className="min-w-0 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]"
                >
                  <p className="text-base font-semibold leading-snug text-forest">{m.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{m.role}</p>
                </li>
              ))}
            </ul>

            <div className="mt-4 min-w-0 rounded-2xl border border-accent/50 bg-secondary px-4 py-3">
              <p className="text-base font-semibold leading-snug text-forest">Marcus Vinícius</p>
              <p className="mt-0.5 text-sm text-olive">Professor responsável</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}