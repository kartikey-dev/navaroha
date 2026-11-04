"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { virtualOfficeRooms } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function VirtualOfficeRoomsSection() {
  const [activeRoomId, setActiveRoomId] = useState<string>("reception");

  const activeRoom =
    virtualOfficeRooms.find((r) => r.id === activeRoomId) || virtualOfficeRooms[0];

  return (
    <section
      id="virtual-office-rooms"
      aria-labelledby="office-tour-heading"
      className="section-padding bg-slate-950 text-slate-100 relative overflow-hidden border-t border-b border-slate-800"
    >
      {/* Background ambient lighting & Indian jali lattice */}
      <div className="absolute inset-0 jali-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-4 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Interactive Agency Walkthrough
              </span>
            </div>
            <h2 id="office-tour-heading" className="text-h2 text-white mb-4">
              Step Inside Our{" "}
              <span className="text-gradient-agency">Virtual Office</span>
            </h2>
            <p className="text-body-lg text-slate-300">
              Walk through the creative and engineering rooms of Navaroha. Explore how our multidisciplinary teams
              collaborate seamlessly from India with client partners across the globe.
            </p>
          </div>
        </RevealOnScroll>

        {/* Room Switcher HUD */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {virtualOfficeRooms.map((room) => {
            const isActive = activeRoom.id === room.id;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomId(room.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/80 shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80"
                }`}
                aria-pressed={isActive}
              >
                <span className="font-mono text-[11px] opacity-75">{room.roomNumber}</span>
                <span>{room.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Room Showcase Frame */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Room Render */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] w-full overflow-hidden bg-slate-950">
              <Image
                src={activeRoom.image}
                alt={`${activeRoom.name} - Navaroha Digital Agency Virtual Headquarters`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90 pointer-events-none" />

              {/* Room Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="glass-panel-dark px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  {activeRoom.badge}
                </span>
              </div>
            </div>

            {/* Room Briefing & Teleport Controls */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  {activeRoom.subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {activeRoom.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-200 italic">
                  &ldquo;{activeRoom.tagline}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeRoom.description}
                </p>

                {/* Key Room Features */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Room Capabilities & Atmosphere:
                  </div>
                  <ul className="space-y-2">
                    {activeRoom.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-amber-400 font-bold mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={activeRoom.keyActionHref}
                  className="w-full sm:w-auto btn btn-gradient btn-md flex items-center justify-center gap-2 text-sm"
                >
                  <span>{activeRoom.keyActionText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="text-xs text-slate-400 font-mono">
                  Room Status: Active & Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
