import logoAsset from "@/assets/logo-litoranea-full.png.asset.json";

export function LogoFull({ className = "h-20 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Logo Litorânea Ambiental — Empresa Júnior de Ciências Ambientais da UFC"
      className={className}
    />
  );
}
