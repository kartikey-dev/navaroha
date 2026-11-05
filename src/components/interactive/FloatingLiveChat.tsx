"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function FloatingLiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Connect Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Direct studio quick connect"
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-slate-900 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl text-white animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                  Live Studio Direct
                </span>
              </div>
              <h3 className="text-base font-bold text-white">Speak with an Engineer</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Direct response within minutes. No bots, no call queues.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close live chat"
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {/* WhatsApp Direct Option */}
            <a
              href="https://wa.me/917015520736?text=Hi%20Navaroha%20team,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600/30 text-white transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.949 2.8.949h.005c3.179 0 5.766-2.587 5.767-5.767.002-3.18-2.585-5.735-5.776-5.735zm3.393 8.163c-.144.405-.837.774-1.17.825-.312.046-.715.066-2.251-.571-1.638-.679-2.698-2.345-2.781-2.454-.08-.109-.652-.868-.652-1.657 0-.788.414-1.176.561-1.336.148-.16.323-.2.431-.2.108 0 .216.001.311.006.1.006.234-.038.366.279.135.324.463 1.129.504 1.211.041.082.068.178.014.286-.054.108-.082.176-.162.27-.081.096-.17.214-.243.287-.081.082-.166.171-.072.333.094.161.417.689.897 1.116.618.55 1.139.721 1.301.802.162.081.257.068.352-.041.095-.109.405-.472.513-.634.108-.162.216-.135.364-.081.148.054.945.446 1.107.527.162.081.27.122.311.189.041.068.041.393-.103.798z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs font-semibold text-emerald-300">Quick Chat on WhatsApp</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-200">
                  {siteConfig.contact.whatsappDisplay}
                </div>
              </div>
              <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>

            {/* Direct Strategy Booking */}
            <a
              href="/contact#contact-form"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-white transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs font-semibold text-slate-400">Project Briefing</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-300">
                  Schedule 30-min Strategy Call
                </div>
              </div>
              <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>🛡️ Strict NDA & IP Protection</span>
            <span className="text-emerald-400">● Global Support</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle direct live chat"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-slate-900 border border-slate-700/80 text-white shadow-2xl hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all cursor-pointer backdrop-blur-md"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
          {isOpen ? "Close Chat" : "Live Chat · WhatsApp"}
        </span>
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.949 2.8.949h.005c3.179 0 5.766-2.587 5.767-5.767.002-3.18-2.585-5.735-5.776-5.735zm3.393 8.163c-.144.405-.837.774-1.17.825-.312.046-.715.066-2.251-.571-1.638-.679-2.698-2.345-2.781-2.454-.08-.109-.652-.868-.652-1.657 0-.788.414-1.176.561-1.336.148-.16.323-.2.431-.2.108 0 .216.001.311.006.1.006.234-.038.366.279.135.324.463 1.129.504 1.211.041.082.068.178.014.286-.054.108-.082.176-.162.27-.081.096-.17.214-.243.287-.081.082-.166.171-.072.333.094.161.417.689.897 1.116.618.55 1.139.721 1.301.802.162.081.257.068.352-.041.095-.109.405-.472.513-.634.108-.162.216-.135.364-.081.148.054.945.446 1.107.527.162.081.27.122.311.189.041.068.041.393-.103.798z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
