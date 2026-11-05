"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  funFact: string;
  avatarColor: string;
  skills: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aarav S.",
    role: "Principal Frontend Architect",
    specialty: "Next.js Server Components, CSS Tokens, Micro-Interactions",
    funFact: "Obsessed with 100/100 Lighthouse audits and mechanical keyboards.",
    avatarColor: "from-blue-600 to-indigo-600",
    skills: ["Next.js 16", "TypeScript", "Performance", "A11y"],
  },
  {
    name: "Pooja V.",
    role: "Senior Product & UI/UX Designer",
    specialty: "Figma Design Systems, Design Tokens, Motion Choreography",
    funFact: "Collects vintage typography specimens and hand-printed letterpress posters.",
    avatarColor: "from-purple-600 to-rose-600",
    skills: ["Figma Systems", "Interaction Design", "WCAG 2.2", "Tokens"],
  },
  {
    name: "Rohan D.",
    role: "Cloud Infrastructure & DevOps Lead",
    specialty: "Zero-Downtime CI/CD, Container Orchestration, Database Indexing",
    funFact: "Runs an air-gapped home lab with self-hosted AI models.",
    avatarColor: "from-emerald-600 to-teal-600",
    skills: ["Docker", "Kubernetes", "PostgreSQL", "CI/CD"],
  },
  {
    name: "Vikram N.",
    role: "AI & Workflow Systems Engineer",
    specialty: "Private On-Premises LLMs, LangGraph Reasoning, RAG Pipelines",
    funFact: "Trained an autonomous AI agent to calculate optimal espresso extraction ratios.",
    avatarColor: "from-cyan-600 to-blue-600",
    skills: ["vLLM / Ollama", "LangGraph", "Python", "Vector DBs"],
  },
  {
    name: "Ananya M.",
    role: "Technical Delivery Director",
    specialty: "Agile Sprints, Requirement Engineering, Milestone Quality Gates",
    funFact: "Certified high-altitude Himalayan trekker and endurance marathon runner.",
    avatarColor: "from-amber-600 to-orange-600",
    skills: ["Agile Architecture", "Sprint QA", "Client Strategy", "SLA"],
  },
  {
    name: "Specialist Network",
    role: "QA & Security Specialists",
    specialty: "OWASP Audits, Penetration Testing, Native Mobile & Accessibility",
    funFact: "A vetted on-demand guild of senior specialists activated for enterprise audits.",
    avatarColor: "from-teal-600 via-blue-600 to-indigo-600",
    skills: ["OWASP Top 10", "Swift", "Kotlin", "WCAG 2.2"],
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, #3B82F6 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-500/30 bg-blue-500/10 text-blue-400">
              The Engineering Collective
            </span>
            <h2
              id="team-heading"
              className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
            >
              Practitioners, not account managers
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              When you partner with Navaroha, you collaborate directly with senior architects and
              designers who write production code every single day.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 80}>
              <div className="group relative rounded-2xl bg-slate-800/70 border border-slate-700/80 p-7 flex flex-col justify-between h-full hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                <div>
                  {/* Avatar & Role Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center font-heading font-black text-xl text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform`}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white font-heading">{member.name}</h3>
                      <div className="text-xs font-semibold text-blue-400">{member.role}</div>
                    </div>
                  </div>

                  {/* Core Specialty */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    <strong className="text-white">Focus:</strong> {member.specialty}
                  </p>

                  {/* Fun Fact Badge */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50 mb-5">
                    <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>💡</span> Fun Fact
                    </div>
                    <div className="text-xs text-slate-300 italic">
                      &ldquo;{member.funFact}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="pt-4 border-t border-slate-700/60 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
