import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="inicio" className="theme-bege relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.5]"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--olive)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
        <circle cx="200" cy="200" r="78" fill="var(--olive)" opacity="0.22" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-[-120px] h-[420px] w-[420px] opacity-40"
        viewBox="0 0 300 300"
      >
        <path
          d="M20 220C80 150 120 120 150 60c40 70 90 100 130 160-70 30-190 30-260 0Z"
          fill="var(--olive)"
          opacity="0.25"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">Empresa Júnior de Ciências Ambientais — UFC</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-5 text-[clamp(2.6rem,8vw,5rem)] leading-[0.95] font-semibold tracking-tight text-on-forest">
              Litorânea
              <span className="block text-olive">Ambiental</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <span className="mt-7 block h-px w-40 bg-accent" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-forest/80 sm:text-xl">
              Soluções ambientais desenvolvidas com conhecimento, inovação e compromisso com a
              sustentabilidade.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-on-forest/70">
              <li>PRAD</li>
              <li className="text-accent">·</li>
              <li>RAS</li>
              <li className="text-accent">·</li>
              <li>EVA</li>
              <li className="text-accent">·</li>
              <li>PGRS</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-sm rounded-[2rem] border border-border bg-card p-6">
            <Logo className="h-full w-full rounded-[1.4rem] object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}