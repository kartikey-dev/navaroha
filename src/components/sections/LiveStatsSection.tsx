"use client";

import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    target: 45,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "From high-converting web flagships to cloud SaaS and mobile applications",
  },
  {
    target: 8,
    suffix: "+",
    label: "Countries Served",
    sublabel: "Clients across US, UK, India, Canada, Germany, Australia, UAE & Singapore",
  },
  {
    target: 35,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Long-term relationships with ambitious founders & growing enterprises",
  },
  {
    target: 7,
    suffix: "+",
    label: "Years Engineering Experience",
    sublabel: "Senior engineering craftsmanship across modern web and cloud architectures",
  },
];

export function LiveStatsSection() {
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setHasStarted(true);
    }, 600);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          clearTimeout(safetyTimer);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1600; // ms
    const frameRate = 30; // updates per sec
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(STATS.map((s) => Math.floor(easedProgress * s.target)));

      if (frame >= totalFrames) {
        clearInterval(interval);
        setCounts(STATS.map((s) => s.target));
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      id="live-stats"
      aria-labelledby="stats-heading"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-950 text-white border-b border-slate-800"
    >
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #8B5CF6 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-500/30 bg-blue-500/10 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Delivery Telemetry
            </span>
            <h2
              id="stats-heading"
              className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
            >
              Proven impact across the globe
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              We stand behind real deliverables and measured outcomes. Every metric represents
              hands-on engineering, long-term partnerships, and high-velocity launches.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <RevealOnScroll key={stat.label} delay={idx * 100}>
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex flex-col justify-between h-full shadow-lg hover:border-slate-700 transition-colors">
                <div>
                  <div className="font-heading text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-2">
                    {counts[idx]}
                    {stat.suffix}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{stat.label}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 pt-3 border-t border-slate-800">
                  {stat.sublabel}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
