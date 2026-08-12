import logoUrl from "@/assets/logo-litoranea.jpg";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Logo Litôranea Ambiental — Empresa Júnior"
      loading="lazy"
      className={className}
    />
  );
}