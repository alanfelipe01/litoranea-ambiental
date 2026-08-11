import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest-deep py-16 text-on-forest">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex min-w-0 items-start gap-4">
            <Logo className="h-12 w-12 shrink-0 text-on-forest" />
            <div className="min-w-0">
              <p className="font-display text-xl font-semibold">Litôranea Ambiental</p>
              <p className="mt-1 text-sm text-on-forest/70">
                Empresa Júnior de Ciências Ambientais — UFC
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-on-forest/60">Instagram</p>
              <a
                href="https://instagram.com/litoraneaambiental"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-block font-medium transition-colors hover:text-accent"
              >
                @litoraneaambiental
              </a>
            </div>
            <div>
              <p className="text-on-forest/60">E-mail</p>
              <p className="mt-1 font-medium text-on-forest/70">[inserir e-mail posteriormente]</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-on-forest/15 pt-6">
          <p className="text-xs text-on-forest/60">
            © 2026 Litôranea Ambiental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}