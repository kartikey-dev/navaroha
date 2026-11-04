"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-200"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block">The Craftsmen</span>
            <h2 id="team-heading" className="text-h2 text-slate-900 mb-4">
              Meet the minds behind{" "}
              <span className="text-gradient">the code and canvas</span>
            </h2>
            <p className="text-body-lg text-slate-600">
              No junior bait-and-switch. When you partner with Navaroha, you work directly with seasoned designers and
              engineers who take personal pride in every system we launch.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Member Image with Hover Glow */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at Navaroha`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Focus Tag Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700">
                    {member.badge}
                  </span>
                </div>

                {/* Name & Role Overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold mb-0.5">
                    {member.focus}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio & Fun Fact */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Fun Fact Callout */}
                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-900 leading-snug">
                  <span className="font-bold text-amber-800 block mb-0.5">✦ Fun Fact:</span>
                  <span>{member.funFact}</span>
                </div>

                {/* Skill Badges */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
