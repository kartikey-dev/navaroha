"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BookCallModal } from "@/components/ui/BookCallModal";

export function HeroRedesignSection() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        aria-label="Navaroha Virtual Headquarters"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20 pb-16"
      >
        {/* Cinematic Backdrop Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/office/reception.jpg"
            alt="Navaroha Virtual Agency Headquarters Reception"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 filter blur-[1px] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 jali-pattern-dark opacity-35" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-main relative z-10 text-center py-12 sm:py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Eyebrow Badge */}
            <RevealOnScroll delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-dark border border-slate-700/80 shadow-lg mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                  Virtual Office HQ // Welcome To Navaroha
                </span>
                <span className="text-xs text-amber-400 font-semibold hidden sm:inline">
                  · Indian Creativity × Global Engineering
                </span>
              </div>
            </RevealOnScroll>

            {/* Main Headline */}
            <RevealOnScroll delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] text-white">
                World-class digital agency.{" "}
                <span className="text-gradient-agency">Rooted in Indian ingenuity.</span>
              </h1>
            </RevealOnScroll>

            {/* Supporting Pitch */}
            <RevealOnScroll delay={200}>
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                We design and engineer high-performance websites, scalable SaaS web apps, cross-platform mobile apps, and
                custom AI automation systems for ambitious clients across the globe.
              </p>
            </RevealOnScroll>

            {/* Primary Action Buttons */}
            <RevealOnScroll delay={300}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#virtual-office-rooms"
                  className="w-full sm:w-auto btn btn-gradient btn-lg px-8 text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/20"
                >
                  <span>Step Inside Virtual Office</span>
                  <span aria-hidden="true">↓</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto btn btn-secondary btn-lg !border-slate-700 !bg-slate-900/80 !text-white hover:!bg-slate-800 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>📅</span>
                  <span>Book Strategy Call</span>
                </button>

                <Link
                  href="/work"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>View Client Work</span>
                  <span>→</span>
                </Link>
              </div>
            </RevealOnScroll>

            {/* Key Metric Ticker Bar */}
            <RevealOnScroll delay={400}>
              <div className="pt-8 sm:pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
                <div className="p-3.5 rounded-2xl glass-panel-dark border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                    Execution Speed
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">2–4 Week Sprints</div>
                  <div className="text-[11px] text-slate-400">Direct senior team</div>
                </div>

                <div className="p-3.5 rounded-2xl glass-panel-dark border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    Core Security
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">Mutual NDA Signed</div>
                  <div className="text-[11px] text-slate-400">100% IP ownership</div>
                </div>

                <div className="p-3.5 rounded-2xl glass-panel-dark border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Global Reach
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">8+ Countries</div>
                  <div className="text-[11px] text-slate-400">IST · GMT · EST · GST</div>
                </div>

                <div className="p-3.5 rounded-2xl glass-panel-dark border border-slate-800">
                  <div className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    Guarantee
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">14-Day Warranty</div>
                  <div className="text-[11px] text-slate-400">Zero-defect launch</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Book Call Modal */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        defaultTopic="Discovery: Virtual Office Introduction"
      />
    </>
  );
}
