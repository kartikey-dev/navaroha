"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function BookCallModal({ isOpen, onClose, defaultTopic = "Virtual Office Strategy Session" }: BookCallModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata (IST)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/10 via-violet-600/10 to-transparent blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Call Scheduled!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Our architecture lead will send an invite
              to <strong className="text-white">{email}</strong> along with a calendar link and our standard mutual NDA.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${siteConfig.contact.whatsapp}?text=Hello%20Navaroha,%20I%20just%20scheduled%20a%20call%20for%20${encodeURIComponent(name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !border-emerald-500/40 !text-emerald-400 hover:!bg-emerald-500/10 text-sm"
              >
                Confirm on WhatsApp Instantly ↗
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn btn-primary text-sm"
              >
                Back to Virtual Office
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
                <span>📅</span> 30-Min Virtual Strategy Session
              </div>
              <h2 id="modal-title" className="text-2xl font-bold font-heading text-white">
                Step into the Executive Boardroom
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Book a direct, no-sales-pitch technical consultation with our engineering and design leads.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Miller or Vikram Patel"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Work Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Timezone
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Asia/Kolkata (IST)">Asia/Kolkata (IST · UTC+5:30)</option>
                    <option value="America/New_York (EST)">America/New York (EST · UTC-5)</option>
                    <option value="America/Los_Angeles (PST)">America/Los Angeles (PST · UTC-8)</option>
                    <option value="Europe/London (GMT/BST)">Europe/London (GMT · UTC+0)</option>
                    <option value="Europe/Berlin (CET)">Europe/Berlin (CET · UTC+1)</option>
                    <option value="Asia/Dubai (GST)">Asia/Dubai (GST · UTC+4)</option>
                    <option value="Australia/Sydney (AEST)">Australia/Sydney (AEST · UTC+10)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Topic / Scope
                  </label>
                  <input
                    type="text"
                    value={defaultTopic}
                    readOnly
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Brief Project Overview / Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your timeline, tech stack ideas, or specific goals..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="text-emerald-400">🔒</span> Mutual NDA signed automatically upon invite
                </span>
                <button type="submit" className="w-full sm:w-auto btn btn-gradient btn-md px-6">
                  Confirm & Schedule Meeting →
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
