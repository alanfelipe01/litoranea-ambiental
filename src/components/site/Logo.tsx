export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Logo Litôranea Ambiental" className={className}>
      <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.12" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 47c0-11 6-19 15-21-1 12-6 19-15 21Z"
        fill="var(--olive)"
      />
      <path d="M32 47c0-11-6-19-15-21 1 12 6 19 15 21Z" fill="currentColor" />
      <path
        d="M12 50c8-4 14-5 20-5s12 1 20 5"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="18" r="4" fill="var(--accent)" />
    </svg>
  );
}