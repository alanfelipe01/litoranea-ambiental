type DecorProps = { className?: string };

/** Decorative organic shapes — same visual language as the Hero (rings, leaves, contour lines). */

export function DecorRings({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" className={`pointer-events-none absolute ${className}`}>
      <circle cx="200" cy="200" r="180" fill="none" stroke="var(--olive)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
      <circle cx="200" cy="200" r="78" fill="var(--olive)" opacity="0.12" />
    </svg>
  );
}

export function DecorLeaf({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M170 30C90 30 30 80 30 150c0 8 1 15 3 22 70 8 137-45 137-142Z"
        fill="var(--olive)"
        opacity="0.14"
      />
      <path d="M170 30C120 70 80 120 33 172" fill="none" stroke="var(--olive)" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

export function DecorHills({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 300" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M20 220C80 150 120 120 150 60c40 70 90 100 130 160-70 30-190 30-260 0Z"
        fill="var(--olive)"
        opacity="0.14"
      />
    </svg>
  );
}

export function DecorContours({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 200" className={`pointer-events-none absolute ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 22}C70 ${20 + i * 22} 140 ${100 + i * 18} 210 ${60 + i * 20}S340 ${20 + i * 22} 400 ${70 + i * 18}`}
          fill="none"
          stroke={i % 2 === 0 ? "var(--olive)" : "var(--accent)"}
          strokeWidth="1.2"
          opacity={0.22 - i * 0.02}
        />
      ))}
    </svg>
  );
}

export function DecorDots({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className={`pointer-events-none absolute ${className}`}>
      {Array.from({ length: 5 }).flatMap((_, r) =>
        Array.from({ length: 5 }).map((__, c) => (
          <circle key={`${r}-${c}`} cx={10 + c * 25} cy={10 + r * 25} r="2" fill="var(--olive)" opacity="0.3" />
        ))
      )}
    </svg>
  );
}
