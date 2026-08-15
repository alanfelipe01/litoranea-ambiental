import logoUrl from "@/assets/logo-litoranea-full.png";

export function LogoFull({ className = "h-20 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Logo Litorânea Ambiental — Empresa Júnior de Ciências Ambientais da UFC"
      className={className}
    />
  );
}
