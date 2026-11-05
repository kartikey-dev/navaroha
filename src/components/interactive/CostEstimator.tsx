"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ProjectType,
  ProjectScope,
  TimelinePace,
  AddonKey,
  calculateEstimate,
  ADDON_PRICING_USD,
} from "@/lib/estimator";
import { CurrencyCode, CURRENCIES } from "@/lib/currency";

const SERVICE_OPTIONS: { id: ProjectType; label: string; desc: string }[] = [
  {
    id: "website",
    label: "Website Development",
    desc: "Digital flagships, headless CMS, marketing platforms",
  },
  {
    id: "web-app",
    label: "Web Applications & SaaS",
    desc: "Full-stack cloud platforms, dashboards, user portals",
  },
  {
    id: "mobile-app",
    label: "Mobile & Desktop Apps",
    desc: "Cross-platform iOS, Android, and Desktop apps",
  },
  {
    id: "ai-automation",
    label: "AI & Workflow Automation",
    desc: "Private on-prem LLMs, agentic workflows, pipelines",
  },
  {
    id: "advisory",
    label: "Technical Advisory & Architecture",
    desc: "Architecture audits, performance tuning, fractional CTO",
  },
];

const SCOPE_OPTIONS: { id: ProjectScope; label: string; desc: string }[] = [
  { id: "mvp", label: "MVP / Prototype", desc: "Fast-to-market initial launch for early traction" },
  {
    id: "standard",
    label: "Standard Production",
    desc: "Robust, feature-complete product with full QA",
  },
  {
    id: "enterprise",
    label: "Enterprise Scale",
    desc: "High concurrency, compliance, SLA & scale",
  },
];

const TIMELINE_OPTIONS: { id: TimelinePace; label: string; desc: string }[] = [
  { id: "standard", label: "Standard Pace", desc: "Balanced agile sprints" },
  { id: "accelerated", label: "Accelerated", desc: "+25% velocity multiplier" },
  { id: "rush", label: "Rush Sprint", desc: "+50% dedicated burst capacity" },
];

const CURRENCY_LIST: CurrencyCode[] = ["USD", "EUR", "GBP", "INR"];

export function CostEstimator() {
  const [projectType, setProjectType] = useState<ProjectType>("website");
  const [scope, setScope] = useState<ProjectScope>("standard");
  const [timeline, setTimeline] = useState<TimelinePace>("standard");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const toggleAddon = (addonKey: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonKey) ? prev.filter((k) => k !== addonKey) : [...prev, addonKey]
    );
  };

  const estimate = useMemo(() => {
    return calculateEstimate({
      projectType,
      scope,
      timeline,
      addons: selectedAddons,
      currency,
    });
  }, [projectType, scope, timeline, selectedAddons, currency]);

  return (
    <section
      id="cost-estimator"
      aria-labelledby="estimator-title"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container-main">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-500/20 bg-blue-50 text-blue-700">
            Transparent Pricing
          </div>
          <h2
            id="estimator-title"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            Project Cost & Timeline Estimator
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Configure your project parameters for an instant, real-time estimate. We believe in
            complete transparency with predictable timelines and milestone-driven delivery.
          </p>
        </div>

        {/* Currency Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-10">
          <span className="text-sm font-semibold text-slate-700">Display Currency:</span>
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-sm">
            {CURRENCY_LIST.map((code) => {
              const meta = CURRENCIES[code];
              const isSelected = currency === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {code} ({meta.symbol})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Project Type */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Select Solution Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICE_OPTIONS.map((item) => {
                  const isSelected = projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="font-semibold text-sm text-slate-900 mb-1">{item.label}</div>
                      <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Project Scope */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                2. Project Scope & Architecture Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCOPE_OPTIONS.map((item) => {
                  const isSelected = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="font-semibold text-sm text-slate-900 mb-1">{item.label}</div>
                      <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Pace */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                3. Delivery Timeline & Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_OPTIONS.map((item) => {
                  const isSelected = timeline === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeline(item.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="font-semibold text-sm text-slate-900 mb-1">{item.label}</div>
                      <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Strategic Addons */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                4. Strategic Add-ons & Engineering Enhancements
              </label>
              <div className="space-y-2.5">
                {(Object.keys(ADDON_PRICING_USD) as AddonKey[]).map((key) => {
                  const addon = ADDON_PRICING_USD[key];
                  const isChecked = selectedAddons.includes(key);
                  return (
                    <label
                      key={key}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? "border-blue-600 bg-blue-50/40"
                          : "border-slate-200 bg-white hover:bg-slate-50/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(key)}
                        className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                        aria-label={addon.label}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900">
                            {addon.label}
                          </span>
                          <span className="text-xs font-mono font-medium text-slate-500">
                            +${addon.priceUSD} USD
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{addon.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Estimate Summary Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Estimated Investment
              </span>
              <div
                data-testid="estimator-total"
                className="text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {estimate.formattedTotal}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Calculated in {CURRENCIES[currency].name}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Estimated Delivery:</span>
                  <span className="font-semibold text-slate-200">
                    {estimate.estimatedWeeksMin}–{estimate.estimatedWeeksMax} Weeks
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Quality Standard:</span>
                  <span className="font-semibold text-emerald-400">WCAG AA & 11 Quality Gates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Warranty Support:</span>
                  <span className="font-semibold text-slate-200">30 Days Included</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href={`/contact?type=${encodeURIComponent(projectType)}&scope=${encodeURIComponent(
                    scope
                  )}&estimate=${encodeURIComponent(estimate.formattedTotal)}`}
                  className="block w-full py-3.5 px-4 text-center rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 no-underline"
                >
                  Start Project With This Estimate
                </Link>
                <div className="text-[11px] text-center text-slate-400">
                  Fixed-price contract · No hidden fees · Dedicated PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
