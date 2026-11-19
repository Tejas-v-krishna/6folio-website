export type MethodIconName = "listen" | "focus" | "shape";

export default function MethodIcon({
  name,
  className = "h-6 w-6",
}: {
  name: MethodIconName;
  className?: string;
}) {
  if (name === "listen") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M3 12h2.2l2-5 3 10 3.5-13 3 8 2-2H21" />
      </svg>
    );
  }

  if (name === "focus") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 19l-6 2 2-6 8.5-8.5a2.1 2.1 0 0 1 3 3L11 18Z" />
      <path d="M14.5 6.5l3 3" />
      <circle cx="10" cy="14" r="1" />
    </svg>
  );
}
