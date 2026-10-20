"use client";

import { useState, useCallback, useId } from "react";
import type { FAQItem } from "@/content/data";

interface AccordionProps {
  items: FAQItem[];
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

function AccordionItem({ item, isOpen, onToggle, id }: AccordionItemProps) {
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full text-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem 0",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-heading)",
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: "var(--color-text)",
            lineHeight: 1.4,
          }}
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: "28px",
              height: "28px",
              borderRadius: "var(--radius-full)",
              background: isOpen
                ? "rgba(59, 130, 246, 0.1)"
                : "rgba(148, 163, 184, 0.1)",
              color: isOpen ? "var(--color-primary)" : "var(--color-muted)",
              fontSize: "1.25rem",
              lineHeight: 1,
              transition: "all var(--duration-base) var(--ease-out)",
              transform: isOpen ? "rotate(45deg)" : "none",
            }}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height var(--duration-slow) var(--ease-out)",
        }}
      >
        <p
          style={{
            padding: "0 0 1.25rem 0",
            margin: 0,
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "var(--color-text-secondary)",
            maxWidth: "65ch",
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div role="list">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          id={`${baseId}-${index}`}
        />
      ))}
    </div>
  );
}
