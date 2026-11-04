"use client";

import React, { useEffect, useState, useRef } from "react";
import { liveStats, StatCounter } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

function CounterItem({ stat }: { stat: StatCounter }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800;
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, stat.value]);

  return (
    <div
      ref={elementRef}
      className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300 text-center group hover:-translate-y-1.5"
    >
      <div className="text-3xl sm:text-4xl mb-3 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">{stat.icon}</div>
      <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight flex items-center justify-center gap-0.5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">{hasAnimated ? count : 0}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{stat.suffix}</span>
      </div>
      <div className="font-bold text-sm sm:text-base text-slate-200 mt-2 mb-1">
        {stat.label}
      </div>
      <p className="text-xs text-slate-400 max-w-[220px] mx-auto leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export function LiveStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#070A12] border-b border-white/10 relative overflow-hidden jali-pattern-dark">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
        }}
      />
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-eyebrow mb-2 block !text-[var(--color-cyan)]">Proven Scale & Craft</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Numbers that reflect disciplined delivery
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveStats.map((stat, idx) => (
            <CounterItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
