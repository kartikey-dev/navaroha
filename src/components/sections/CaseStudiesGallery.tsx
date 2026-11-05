"use client";

import { useState, useMemo } from "react";
import { CaseStudy } from "@/content/data";

interface CaseStudiesGalleryProps {
  studies: CaseStudy[];
}

type FilterCategory =
  "all" | "ecommerce" | "fashion" | "travel" | "industrial" | "mobile-ai" | "interactive";

const FILTERS: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ecommerce", label: "Gourmet & E-Commerce" },
  { id: "fashion", label: "Artisan & Fashion" },
  { id: "travel", label: "Travel & Booking" },
  { id: "industrial", label: "Industrial & B2B" },
  { id: "mobile-ai", label: "Mobile & AI Systems" },
  { id: "interactive", label: "Interactive 3D" },
];

export function CaseStudiesGallery({ studies }: CaseStudiesGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return studies;

    return studies.filter((study) => {
      const cat = study.category.toLowerCase();
      const tech = study.technologies.join(" ").toLowerCase();
      const title = study.title.toLowerCase();

      if (activeFilter === "ecommerce") {
        return (
          cat.includes("food") ||
          cat.includes("gourmet") ||
          cat.includes("e-commerce") ||
          title.includes("devavo")
        );
      }
      if (activeFilter === "fashion") {
        return (
          cat.includes("fashion") ||
          cat.includes("textile") ||
          cat.includes("handloom") ||
          title.includes("bunavat") ||
          title.includes("armaan")
        );
      }
      if (activeFilter === "travel") {
        return (
          cat.includes("travel") ||
          cat.includes("adventure") ||
          cat.includes("tour") ||
          title.includes("full moon")
        );
      }
      if (activeFilter === "industrial") {
        return cat.includes("industrial") || title.includes("thermal energy");
      }
      if (activeFilter === "mobile-ai") {
        return (
          cat.includes("mobile") ||
          cat.includes("ai") ||
          cat.includes("healthcare") ||
          tech.includes("react native") ||
          tech.includes("swiftui")
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
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-500"
                  : "bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {filter.label}
              {filter.id === "all" && (
                <span className="ml-1.5 opacity-80 font-mono text-[11px]">({studies.length})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grid of Filtered Studies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {filteredStudies.map((study, index) => (
          <div
            key={study.slug}
            className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-7 md:p-9 shadow-xl hover:border-blue-500/40 hover:bg-slate-850 hover:shadow-blue-500/5 transition-all duration-300 text-white"
          >
            <div>
              {/* Header / Badges */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {study.category}
                </span>
                <span className="font-mono text-xs text-slate-400 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title with optional live link */}
              <h2 className="text-xl md:text-2xl font-bold font-heading text-white mb-2 group-hover:text-blue-300 transition-colors">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-2 group/title"
                  >
                    <span>{study.title}</span>
                    <svg
                      className="w-4 h-4 opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-blue-400 shrink-0"
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

              <p className="text-sm font-semibold text-slate-300 mb-3">{study.tagline}</p>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                {study.overview}
              </p>

              {/* Structured 3-Part Engineering Framework: Problem -> What We Did -> Measurable Results */}
              <div className="space-y-4 mb-6 pt-5 border-t border-slate-800 flex-1">
                {/* 1. Problem */}
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                    <span>🔴</span> The Problem
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {study.problem || study.challenge}
                  </p>
                </div>

                {/* 2. What We Did */}
                <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                    <span>🔵</span> What We Did
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{study.solution}</p>
                </div>

                {/* 3. Measurable Results */}
                {study.measurableResults && study.measurableResults.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      <span>🟢</span> Measurable Results
                    </div>
                    <ul className="space-y-1.5">
                      {study.measurableResults.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                {study.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visit Live Action */}
            {study.liveUrl && (
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-800 mt-auto">
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline group-hover:gap-2.5 transition-all"
                  aria-label={`Visit live verified deployment for ${study.title}`}
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
                <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  ● Verified Live ↗
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
