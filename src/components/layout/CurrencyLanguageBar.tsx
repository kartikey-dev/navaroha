"use client";

import React, { useState } from "react";
import { useLocalization } from "@/context/LocalizationContext";
import { currencyRates, CurrencyCode, availableLanguages, LanguageCode } from "@/content/data";

export function CurrencyLanguageBar() {
  const { currency, setCurrency, language, setLanguage } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  const currencyKeys = Object.keys(currencyRates) as CurrencyCode[];

  return (
    <div className="bg-[var(--color-midnight)] text-slate-300 border-b border-slate-800/80 text-xs py-1.5 px-4 sm:px-6 relative z-50">
      <div className="container-main flex flex-wrap items-center justify-between gap-2.5">
        {/* Left: Global agency status */}
        <div className="flex items-center gap-3 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Virtual Office Open
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:inline-block text-slate-400">
            India & Worldwide: <strong className="text-slate-200">IST · GMT · EST · GST</strong> Overlap
          </span>
        </div>

        {/* Right: Currency & Language Switchers */}
        <div className="flex items-center gap-3 text-[11px] sm:text-xs ml-auto">
          {/* Currency Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-0.5">
            <span className="text-slate-400 px-1.5 font-mono text-[10px] hidden sm:inline">CURRENCY:</span>
            {currencyKeys.map((curr) => {
              const active = currency === curr;
              return (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                    active
                      ? "bg-[var(--color-astra-blue)] text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                  aria-pressed={active}
                  aria-label={`Switch currency to ${curr}`}
                >
                  {currencyRates[curr].symbol.trim()} {curr}
                </button>
              );
            })}
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-expanded={isOpen}
              aria-label="Select language"
            >
              <span>🌐</span>
              <span className="font-medium">
                {availableLanguages.find((l) => l.code === language)?.label || "English"}
              </span>
              <svg
                className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="absolute right-0 top-full mt-1.5 w-44 rounded-xl bg-slate-900 border border-slate-700 shadow-xl py-1 z-50 animate-scale-in"
                role="menu"
              >
                <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                  Select Language
                </div>
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                      language === lang.code
                        ? "text-[var(--color-astra-blue)] font-bold bg-slate-800"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    }`}
                    role="menuitem"
                  >
                    <span>{lang.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{lang.region}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
