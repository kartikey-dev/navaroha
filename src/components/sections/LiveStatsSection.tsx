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
      className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
    >
      <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
      <div className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight flex items-center justify-center gap-0.5">
        <span>{hasAnimated ? count : 0}</span>
        <span className="text-[var(--color-primary)]">{stat.suffix}</span>
      </div>
      <div className="font-bold text-sm sm:text-base text-slate-800 mt-2 mb-1">
        {stat.label}
      </div>
      <p className="text-xs text-slate-500 max-w-[220px] mx-auto leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export function LiveStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-eyebrow mb-2 block">Proven Scale & Craft</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
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
