"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { BookCallModal } from "@/components/ui/BookCallModal";

export function FloatingLeadWidget() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Floating Action HUD Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
        {/* Expanded Quick Options Menu */}
        {isExpanded && (
          <div className="rounded-2xl glass-panel-dark p-4 shadow-2xl border border-slate-700/80 w-72 sm:w-80 space-y-3 animate-scale-in text-slate-100 mb-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">Live Virtual Desk</span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white text-xs"
                aria-label="Close desk menu"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Connect with our technology architects directly. No gatekeepers or sales queues.
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                  setIsBookModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Book 30-Min Strategy Call</span>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href={`${siteConfig.contact.whatsapp}?text=Hello%20Navaroha,%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>WhatsApp Quick Chat</span>
                </div>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                  Online
                </span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>Direct Call: {siteConfig.contact.phoneDisplay}</span>
                </div>
              </a>
            </div>

            <div className="text-[10px] text-slate-400 text-center pt-1 border-t border-slate-800">
              Response Commitment: Under 2 business hours
            </div>
          </div>
        )}

        {/* Floating Trigger Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Schedule Button */}
          <button
            type="button"
            onClick={() => setIsBookModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel-dark text-xs font-bold text-white shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all border border-slate-700/80 group"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            <span>Book a Call</span>
            <span className="group-hover:translate-x-0.5 transition-transform text-blue-400">📅</span>
          </button>

          {/* Quick WhatsApp Action Button */}
          <a
            href={`${siteConfig.contact.whatsapp}?text=Hello%20Navaroha,%20I'm%20visiting%20your%20website%20and%20want%20to%20discuss%20a%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Navaroha"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-slate-900"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
          </a>

          {/* Toggle Menu Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 rounded-full glass-panel-dark text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border border-slate-700/80"
            aria-label="Open communication hub"
            aria-expanded={isExpanded}
          >
            <span className="text-lg">{isExpanded ? "✕" : "⚡"}</span>
          </button>
        </div>
      </div>

      {/* Book Call Modal */}
      <BookCallModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </>
  );
}
