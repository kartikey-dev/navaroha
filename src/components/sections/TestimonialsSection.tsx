"use client";

import React, { useState } from "react";
import { testimonials, TestimonialItem } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialItem>(testimonials[0]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-slate-900 text-slate-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 jali-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow text-blue-400 mb-3 block">Client Voices</span>
            <h2 id="testimonials-heading" className="text-h2 text-white mb-4">
              Endorsed by leaders who{" "}
              <span className="text-gradient">demand excellence</span>
            </h2>
            <p className="text-body-lg text-slate-300">
              Read how organizations across education, luxury fashion, heavy manufacturing, and consumer beverages
              partner with Navaroha to build their critical digital infrastructure.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Testimonial Hero Card */}
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-8 sm:p-12 mb-12 shadow-2xl relative">
          <div className="text-5xl text-blue-500/30 font-serif absolute top-6 left-8 select-none">
            &ldquo;
          </div>
          <div className="relative z-10 space-y-6">
            <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed max-w-4xl italic">
              {activeTestimonial.quote}
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {activeTestimonial.avatarText}
                </div>
                <div>
                  <div className="font-bold text-white text-base">
                    {activeTestimonial.clientName}
                  </div>
                  <div className="text-xs text-slate-400">
                    {activeTestimonial.role} · <strong className="text-slate-300">{activeTestimonial.company}</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {activeTestimonial.location}
                  </div>
                </div>
              </div>

              {/* Verified Result Badge */}
              {activeTestimonial.metric && (
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Result: {activeTestimonial.metric}</span>
                  </div>

                  {/* Video Endorsement Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>▶ Watch Reel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials Switcher Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => {
            const isSelected = activeTestimonial.id === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTestimonial(t)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-slate-800/90 border-blue-500/80 shadow-lg"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-slate-800 text-blue-400 font-bold flex items-center justify-center text-xs">
                    {t.avatarText}
                  </span>
                  <div>
                    <div className="font-bold text-xs text-white leading-tight">
                      {t.clientName}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate max-w-[150px]">
                      {t.company}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {t.metric && (
                  <div className="mt-2 text-[10px] font-mono text-emerald-400 font-bold">
                    ✓ {t.metric}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Reel Modal Mockup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="font-bold text-sm">
                Client Review Reel — {activeTestimonial.company}
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="relative h-64 sm:h-80 w-full rounded-xl bg-slate-950 flex flex-col items-center justify-center p-6 text-center border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-xl mb-3 animate-pulse">
                ▶
              </div>
              <div className="font-bold text-base text-white">
                Recorded Case Debrief with {activeTestimonial.clientName}
              </div>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Full video walkthrough of project milestones, architecture review, and launch metrics available during
                our 1-on-1 strategy calls.
              </p>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="btn btn-secondary text-xs"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
