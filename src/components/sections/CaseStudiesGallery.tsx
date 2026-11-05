"use client";

import { useState, useMemo } from "react";
import { CaseStudy } from "@/content/data";

interface CaseStudiesGalleryProps {
  studies: CaseStudy[];
}

type FilterCategory = "all" | "websites" | "mobile" | "ai" | "interactive";

const FILTERS: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "websites", label: "Websites & Flagships" },
  { id: "mobile", label: "Mobile & Desktop" },
  { id: "ai", label: "AI & Workflow Systems" },
  { id: "interactive", label: "Interactive 3D" },
];

export function CaseStudiesGallery({ studies }: CaseStudiesGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return studies;

    return studies.filter((study) => {
      const cat = study.category.toLowerCase();
      const tech = study.technologies.join(" ").toLowerCase();

      if (activeFilter === "websites") {
        return (
          cat.includes("flagship") ||
          cat.includes("e-commerce") ||
          cat.includes("website") ||
          cat.includes("industrial")
        );
      }
      if (activeFilter === "mobile") {
        return (
          cat.includes("mobile") ||
          tech.includes("react native") ||
          tech.includes("swiftui") ||
          tech.includes("expo")
        );
      }
      if (activeFilter === "ai") {
        return (
          cat.includes("ai") || cat.includes("nlp") || tech.includes("ai") || tech.includes("llm")
        );
      }
      if (activeFilter === "interactive") {
        return cat.includes("interactive") || cat.includes("3d") || tech.includes("canvas");
      }
      return true;
    });
  }, [activeFilter, studies]);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
        role="tablist"
        aria-label="Filter case studies"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 border border-slate-900"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {filter.label}
              {filter.id === "all" && (
                <span className="ml-1.5 opacity-70 font-mono text-[11px]">({studies.length})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grid of Filtered Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {filteredStudies.map((study, index) => (
          <div
            key={study.slug}
            className="group flex flex-col rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 md:p-10 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {study.category}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
              {study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-2 group/title"
                >
                  <span>{study.title}</span>
                  <svg
                    className="w-4 h-4 opacity-70 group-hover/title:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                study.title
              )}
            </h2>

            <p className="text-sm font-medium text-slate-700 mb-4">{study.tagline}</p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{study.overview}</p>

            <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Key Highlights
              </h3>
              <ul className="space-y-1.5">
                {study.architectureHighlights.slice(0, 3).map((hl, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-[var(--color-primary)] font-bold">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {study.liveUrl && (
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline group-hover:gap-2.5 transition-all"
                  aria-label={`Visit live site for ${study.title}`}
                >
                  <span>Visit Live Website</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <span className="text-xs font-mono text-slate-400">Live ↗</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
