"use client";

import { useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  meta?: string;
  content: React.ReactNode;
};

export default function Accordion({
  items,
  defaultOpen = null,
  className = "",
}: {
  items: AccordionItem[];
  defaultOpen?: string | null;
  className?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen);

  return (
    <div className={`border-t border-rule ${className}`}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="border-b border-rule">
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left md:py-7"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                id={`${item.id}-button`}
                onClick={() => setOpen((current) => (current === item.id ? null : item.id))}
              >
                <span className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  {item.meta && <span className="mono shrink-0 md:w-24">{item.meta}</span>}
                  <span className="type-h3">{item.title}</span>
                </span>
                <span
                  className={`relative mt-1 h-6 w-6 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-ink" />
                </span>
              </button>
            </h3>

            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-button`}
              className={`answer ${isOpen ? "open" : ""}`}
            >
              <div>
                <div className="pb-8 md:pl-[8.5rem] md:pr-16">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
