"use client";

import { useState, useRef, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export type RoomId = "reception" | "design" | "lab" | "meeting";

interface RoomMeta {
  id: RoomId;
  name: string;
  shortLabel: string;
  tagline: string;
  badge: string;
}

const ROOMS: RoomMeta[] = [
  {
    id: "reception",
    name: "Virtual Reception",
    shortLabel: "Reception",
    tagline: "Navaroha Digital Studio Reception & Welcome Lounge",
    badge: "Studio Open · Global Client Ops",
  },
  {
    id: "design",
    name: "Design Studio",
    shortLabel: "Design Studio",
    tagline: "UI/UX Design Studio & Creative Systems",
    badge: "Figma Tokens · Design Systems",
  },
  {
    id: "lab",
    name: "Development Lab",
    shortLabel: "Development Lab",
    tagline: "Engineering & Cloud Lab for production-grade development",
    badge: "Next.js · TypeScript · CI/CD",
  },
  {
    id: "meeting",
    name: "Meeting Room",
    shortLabel: "Meeting Room",
    tagline: "Executive Meeting & Strategy Suite",
    badge: "Discovery · Architecture · SLA",
  },
];

export function VirtualOffice() {
  const [activeRoom, setActiveRoom] = useState<RoomId>("reception");
  const [activeCodeFile, setActiveCodeFile] = useState<"engine" | "pipeline" | "tests">("engine");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM UTC");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % ROOMS.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + ROOMS.length) % ROOMS.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = ROOMS.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveRoom(ROOMS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const currentRoom = ROOMS.find((r) => r.id === activeRoom) || ROOMS[0];

  return (
    <section
      id="virtual-office"
      aria-labelledby="virtual-office-title"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #040916 0%, #0B0F1A 50%, #0F172A 100%)",
        color: "#F8FAFC",
      }}
    >
      {/* Ambient background glow & architectural lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 pointer-events-none opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #8B5CF6 35%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-500/30 bg-blue-500/10 text-blue-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive Studio Experience
          </div>
          <h2
            id="virtual-office-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Navaroha’s Digital Studio
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Step inside our collaborative workspaces. From concept wireframing to high-velocity code
            pipelines and executive strategy, experience how we engineer digital impact.
          </p>
        </div>

        {/* Room Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Studio environments"
          className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-8 overflow-x-auto no-scrollbar"
        >
          {ROOMS.map((room, idx) => {
            const isSelected = activeRoom === room.id;
            return (
              <button
                key={room.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                role="tab"
                id={`tab-${room.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${room.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveRoom(room.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex-1 min-w-[130px] md:min-w-0 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <span>{room.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Room Environment Panels */}
        <div
          role="tabpanel"
          id={`panel-${currentRoom.id}`}
          aria-labelledby={`tab-${currentRoom.id}`}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 backdrop-blur-xl shadow-2xl relative"
        >
          {/* Room Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">
                {currentRoom.badge}
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mt-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {currentRoom.tagline}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● Live Environment
              </span>
            </div>
          </div>

          {/* ROOM 1: VIRTUAL RECEPTION */}
          {activeRoom === "reception" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Architectural Reception Wall Rendering */}
              <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#040916] to-[#0B0F1A] border border-slate-800 p-8 relative overflow-hidden shadow-inner">
                {/* Architectural Wall Slat Texture */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #3B82F6 0, #3B82F6 1px, transparent 0, transparent 40px)",
                  }}
                  aria-hidden="true"
                />

                {/* Overhead Lighting Effect */}
                <div
                  className="w-56 h-3 bg-blue-400/50 rounded-full mx-auto mb-6 blur-[8px]"
                  aria-hidden="true"
                />

                {/* Branded Reception Wall Display with Real Navaroha Logo */}
                <div className="relative z-10 text-center py-6 px-4 rounded-xl bg-[#040916] border border-slate-700/60 shadow-2xl max-w-md mx-auto">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/brand/navaroha-logo-dark.png"
                      alt={`${siteConfig.name} — Brand Wall`}
                      width={220}
                      height={58}
                      className="h-11 w-auto object-contain drop-shadow"
                    />
                  </div>
                  <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                    Digital Solutions & Creative Technology
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-center items-center gap-4 text-xs text-slate-300">
                    <span>Build</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Manage</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>Grow</span>
                  </div>
                </div>

                {/* Receptionist Desk / Touchpoint Display */}
                <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 mb-1">Global Studio Availability</div>
                    <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      24/7 Worldwide Client Ops
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 mb-1">Direct Line & WhatsApp</div>
                    <div className="font-semibold text-slate-200">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reception Highlights & Global Studio Times */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Welcome to Navaroha Digital Studio
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We partner with ambitious startups and enterprises across the globe. Our virtual
                    doors are always open to discuss custom digital architectures, web platforms,
                    and intelligent software workflows.
                  </p>
                </div>

                {/* Global Timezones Widget */}
                <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Active Client Timezones
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-300">San Francisco</span>
                      <span className="font-mono text-blue-400">PST (UTC-8)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-300">New York</span>
                      <span className="font-mono text-blue-400">EST (UTC-5)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-300">London</span>
                      <span className="font-mono text-blue-400">GMT (UTC+0)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-300">Singapore</span>
                      <span className="font-mono text-blue-400">SGT (UTC+8)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 no-underline"
                  >
                    Start a Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors no-underline"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ROOM 2: DESIGN STUDIO */}
          {activeRoom === "design" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Figma Board / Design System Canvas Rendering */}
              <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">
                      Navaroha Design System v2.0.fig
                    </span>
                  </div>
                  <span className="font-mono text-indigo-400">100% Zoom · Tokens</span>
                </div>

                {/* Design Tokens Color Palette Grid */}
                <div className="mt-6">
                  <div className="text-xs font-mono text-slate-400 mb-2">Brand Palette Tokens</div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="rounded-lg p-2.5 bg-slate-900 border border-slate-800">
                      <div className="w-full h-8 rounded bg-[#3B82F6] mb-1.5 shadow" />
                      <div className="text-[11px] font-mono text-slate-200">Astra Blue</div>
                      <div className="text-[10px] text-slate-400 font-mono">#3B82F6</div>
                    </div>
                    <div className="rounded-lg p-2.5 bg-slate-900 border border-slate-800">
                      <div className="w-full h-8 rounded bg-[#8B5CF6] mb-1.5 shadow" />
                      <div className="text-[11px] font-mono text-slate-200">Violet</div>
                      <div className="text-[10px] text-slate-400 font-mono">#8B5CF6</div>
                    </div>
                    <div className="rounded-lg p-2.5 bg-slate-900 border border-slate-800">
                      <div className="w-full h-8 rounded bg-[#06B6D4] mb-1.5 shadow" />
                      <div className="text-[11px] font-mono text-slate-200">Cyan</div>
                      <div className="text-[10px] text-slate-400 font-mono">#06B6D4</div>
                    </div>
                    <div className="rounded-lg p-2.5 bg-slate-900 border border-slate-800">
                      <div className="w-full h-8 rounded bg-[#040916] border border-slate-700 mb-1.5 shadow" />
                      <div className="text-[11px] font-mono text-slate-200">Midnight</div>
                      <div className="text-[10px] text-slate-400 font-mono">#040916</div>
                    </div>
                  </div>
                </div>

                {/* Typography & Component Hierarchy Mockup */}
                <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 mb-2">
                    Typography & Scale Standards
                  </div>
                  <div className="space-y-1.5">
                    <div
                      className="text-lg font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Display Heading 1 — Space Grotesk Bold
                    </div>
                    <div
                      className="text-xs text-slate-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Body Text — Inter Regular · 16px / 1.65 line height with WCAG AA 4.5:1
                      contrast
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Studio Narrative */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Human-Centered UI/UX & Design Systems
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our design studio bridges intuitive user journeys with razor-sharp brand
                    aesthetics. Every component is crafted in Figma with semantic tokens,
                    interactive prototypes, and accessible contrast ratios.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5" />
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block mb-0.5">
                        Figma Component Architecture:
                      </strong>
                      Reusable auto-layout libraries with complete states (hover, focus, active,
                      disabled).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block mb-0.5">
                        WCAG 2.2 Level AA Accessible:
                      </strong>
                      Color-blind testing, accessible tap targets, and keyboard navigability baked
                      in.
                    </div>
                  </div>
                </div>

                <Link
                  href="/services/website-development"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 no-underline"
                >
                  Explore Web & Design Systems →
                </Link>
              </div>
            </div>
          )}

          {/* ROOM 3: DEVELOPMENT LAB */}
          {activeRoom === "lab" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Studio Code Editor & Terminal Rendering with Interactive File Tabs */}
              <div className="lg:col-span-7 rounded-2xl bg-[#040916] border border-slate-800 p-6 relative overflow-hidden font-mono text-xs shadow-2xl">
                {/* Editor File Selector Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveCodeFile("engine")}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        activeCodeFile === "engine"
                          ? "bg-slate-800 text-slate-200 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      digital-platform.ts
                    </button>
                    <button
                      type="button"
                      aria-label="ci-cd-pipeline.yml"
                      onClick={() => setActiveCodeFile("pipeline")}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        activeCodeFile === "pipeline"
                          ? "bg-slate-800 text-slate-200 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      ci-cd-pipeline.yml
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeFile("tests")}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        activeCodeFile === "tests"
                          ? "bg-slate-800 text-slate-200 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      vitest.report.json
                    </button>
                  </div>
                  <span className="text-emerald-400 text-[11px]">TypeScript 5 Strict</span>
                </div>

                {/* Code Body Dynamic Display */}
                <div className="py-4 space-y-1 text-slate-300 overflow-x-auto leading-relaxed">
                  {activeCodeFile === "engine" && (
                    <>
                      <div>
                        <span className="text-purple-400">export class</span>{" "}
                        <span className="text-yellow-300">DigitalProductEngine</span> {"{"}
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">public readonly</span> brand:{" "}
                        <span className="text-green-300">&quot;Navaroha&quot;</span> ={" "}
                        <span className="text-green-300">&quot;Navaroha&quot;</span>;
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-400">async executeDeployment</span>(config:{" "}
                        <span className="text-cyan-300">ReleaseConfig</span>):{" "}
                        <span className="text-purple-400">Promise</span>&lt;
                        <span className="text-cyan-300">DeploymentStatus</span>&gt; {"{"}
                      </div>
                      <div className="pl-8 text-slate-400">
                        {"// Run 11-stage automated quality gates"}
                      </div>
                      <div className="pl-8">
                        <span className="text-purple-400">await</span> this.
                        <span className="text-blue-300">verifyQualityGates</span>({"{ "}
                        coverage: <span className="text-orange-400">96.4</span>, a11y:{" "}
                        <span className="text-green-300">&quot;WCAG_AA&quot;</span> {"}"});
                      </div>
                      <div className="pl-8">
                        <span className="text-purple-400">return</span> {"{ status: "}
                        <span className="text-green-300">&quot;PRODUCTION_READY&quot;</span>
                        {", uptime: "}
                        <span className="text-orange-400">99.98</span> {"};"}
                      </div>
                      <div className="pl-4">{"}"}</div>
                      <div>{"}"}</div>
                    </>
                  )}

                  {activeCodeFile === "pipeline" && (
                    <>
                      <div>
                        <span className="text-cyan-400">name</span>:{" "}
                        <span className="text-green-300">quality-gates-stage-11</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">on</span>: [
                        <span className="text-yellow-300">push</span>,{" "}
                        <span className="text-yellow-300">pull_request</span>]
                      </div>
                      <div>
                        <span className="text-cyan-400">jobs</span>:
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-400">pipeline-verification</span>:
                      </div>
                      <div className="pl-8">
                        <span className="text-purple-400">runs-on</span>:{" "}
                        <span className="text-green-300">ubuntu-latest</span>
                      </div>
                      <div className="pl-8">
                        <span className="text-purple-400">steps</span>:
                      </div>
                      <div className="pl-12 text-slate-400">
                        - run: npm run typecheck && npm run lint
                      </div>
                      <div className="pl-12 text-slate-400">
                        - run: npm run test:coverage -- --threshold=80
                      </div>
                      <div className="pl-12 text-slate-400">
                        - run: npm run test:e2e && npx lhci autorun
                      </div>
                    </>
                  )}

                  {activeCodeFile === "tests" && (
                    <>
                      <div>{"{"}</div>
                      <div className="pl-4">
                        <span className="text-cyan-400">&quot;suitesTotal&quot;</span>:{" "}
                        <span className="text-orange-400">6</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">&quot;testsPassed&quot;</span>:{" "}
                        <span className="text-orange-400">35</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">&quot;coverageSummary&quot;</span>: {"{"}
                      </div>
                      <div className="pl-8">
                        <span className="text-green-300">&quot;statements&quot;</span>:{" "}
                        <span className="text-orange-400">96.4</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-green-300">&quot;branches&quot;</span>:{" "}
                        <span className="text-orange-400">92.8</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-green-300">&quot;lines&quot;</span>:{" "}
                        <span className="text-orange-400">98.7</span>
                      </div>
                      <div className="pl-4">{"}"}</div>
                      <div>{"}"}</div>
                    </>
                  )}
                </div>

                {/* Live Terminal Output Mockup */}
                <div className="mt-4 pt-3 border-t border-slate-800 bg-slate-950/80 p-3 rounded-lg text-[11px] text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 mb-1">
                    <span>Terminal — npm run test:coverage</span>
                    <span className="text-emerald-400 font-semibold">● PASS</span>
                  </div>
                  <div className="text-emerald-400">
                    ✓ 35 tests passed (6 suites) · Statements 96.4% · Lines 98.7%
                  </div>
                  <div className="text-slate-400 text-[10px] mt-0.5">
                    Production build optimized with Next.js Turbopack
                  </div>
                </div>
              </div>

              {/* Development Lab Narrative */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Production-Grade Engineering
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We engineer resilient software architectures using Next.js, React, Node.js, and
                    cloud-native DevOps. Every release is gated with automated unit, E2E, and
                    accessibility tests.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-400 mb-0.5">Architecture</div>
                    <div className="font-semibold text-white">Clean & Modular</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-400 mb-0.5">Testing Stack</div>
                    <div className="font-semibold text-white">Vitest + Playwright</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-400 mb-0.5">CI/CD Engine</div>
                    <div className="font-semibold text-white">11 Quality Stages</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-400 mb-0.5">Security</div>
                    <div className="font-semibold text-white">OWASP ASVS Standard</div>
                  </div>
                </div>

                <Link
                  href="/services/web-applications"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 no-underline"
                >
                  Explore Web Applications & SaaS →
                </Link>
              </div>
            </div>
          )}

          {/* ROOM 4: MEETING ROOM */}
          {activeRoom === "meeting" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Executive Boardroom Presentation Display & Instant Calendar Booking Modal */}
              <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-8 relative overflow-hidden text-center shadow-2xl">
                <div className="max-w-md mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                    Navaroha Executive Strategy Suite
                  </div>
                  <h4
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Turn Your Vision Into a Scalable Reality
                  </h4>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    Collaborate directly with our Creative Director and Frontend Architects to scope
                    deliverables, determine project timelines, and validate architecture before
                    writing code.
                  </p>

                  {/* Interactive Discovery Agenda Card */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6 text-left">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Discovery Call Agenda (30 Mins)
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 list-none p-0 m-0">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        1. Business objectives, target audience & user journeys
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        2. Technology stack selection & cloud infrastructure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        3. Detailed roadmap, milestones, and fixed pricing estimate
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons: Direct Contact and Instant Booking Scheduler */}
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-600/30 no-underline"
                    >
                      Schedule a Project Discovery Call
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setIsBookingOpen(!isBookingOpen)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <span>📅</span> Instant Calendar Booking
                    </button>
                  </div>

                  {/* Booking Drawer / Slot Selector */}
                  {isBookingOpen && (
                    <div className="mt-5 p-5 rounded-xl bg-slate-900 border border-blue-500/40 text-left animate-fadeIn">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                        Select Meeting Time Slot
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {["10:00 AM UTC", "02:00 PM UTC", "05:30 PM UTC"].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-2 text-[11px] font-semibold rounded-lg text-center transition-colors ${
                              selectedSlot === slot
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {bookingConfirmed ? (
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                          ✓ Time reserved for {selectedSlot}! Calendar invite generated.
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setBookingConfirmed(true)}
                          className="w-full py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                        >
                          Confirm {selectedSlot} Strategy Slot
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Meeting Room Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Transparent, Agile Partnership
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We maintain clear communication cadences. You receive direct access to our core
                    engineering leads, weekly staging demos, and transparent milestone tracking.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="font-semibold text-white mb-1">
                      Direct Slack & Meeting Access
                    </div>
                    <div className="text-slate-400">
                      Synchronous communication throughout your sprint cycle.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="font-semibold text-white mb-1">
                      Guaranteed Delivery Milestones
                    </div>
                    <div className="text-slate-400">
                      Strict scope protection with agreed timelines and staging reviews.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="font-semibold text-white mb-1">
                      Post-Launch Support & Warranty
                    </div>
                    <div className="text-slate-400">
                      Continuous monitoring, bug resolution, and SLA maintenance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
