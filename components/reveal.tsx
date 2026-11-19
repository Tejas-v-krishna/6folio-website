import type { ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      data-delay={delay}
      className={className}
      style={{ opacity: 0, transform: "translateY(26px)" }}
    >
      {children}
    </div>
  );
}
