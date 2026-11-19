export function ToggleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 20"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <circle cx="11" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="11" cy="10" r="3.2" />
      <circle cx="31" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="31" cy="10" r="3.2" />
    </svg>
  );
}

export function SixStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <rect x="47" y="2" width="6" height="96" rx="3" />
      <rect x="47" y="2" width="6" height="96" rx="3" transform="rotate(60 50 50)" />
      <rect x="47" y="2" width="6" height="96" rx="3" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path d="M6 18 18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 6h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path d="M32 8v44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m14 36 18 18 18-18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
