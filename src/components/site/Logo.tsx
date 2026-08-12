import logoAsset from "@/assets/logo-litoranea.jpg.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Logo Litôranea Ambiental — Empresa Júnior"
      loading="lazy"
      className={className}
    />
  );
}