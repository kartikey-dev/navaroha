"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScope?: string;
}

const AVAILABLE_SLOTS = ["10:00 AM UTC", "02:00 PM UTC", "05:30 PM UTC", "08:00 PM UTC"];

export function BookingModal({ isOpen, onClose, defaultScope }: BookingModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string>(AVAILABLE_SLOTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState(defaultScope || "Website / Web Application Project");
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-7 md:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
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

        {!isConfirmed ? (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Engineering Schedule
              </span>
              <h2 id="booking-modal-title" className="text-2xl font-bold font-heading text-white">
                Book a 30-Min Strategy Call
              </h2>
              <p className="text-xs md:text-sm text-slate-300 mt-1">
                Speak directly with a Senior Architect. We will review your project scope, technical
                architecture, and timeline without sales pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Slot Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select Preferred Meeting Slot (UTC)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {AVAILABLE_SLOTS.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20"
                            : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700/60"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-semibold text-slate-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="booking-name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-semibold text-slate-300 mb-1"
                  >
                    Work Email
                  </label>
                  <input
                    id="booking-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Scope note */}
              <div>
                <label
                  htmlFor="booking-scope"
                  className="block text-xs font-semibold text-slate-300 mb-1"
                >
                  Project Brief / Topic
                </label>
                <input
                  id="booking-scope"
                  type="text"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  placeholder="e.g. Next.js SaaS MVP or E-Commerce redesign"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 cursor-pointer mt-2"
              >
                Confirm {selectedSlot} Strategy Session
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>🔒 Strict NDA Included</span>
              <span>⚡ Calendar invite sent instantly</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-heading">
              Strategy Session Reserved!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto mb-6">
              A calendar invite for <strong className="text-white">{selectedSlot}</strong> has been
              registered for <strong className="text-white">{email}</strong>. Our Principal
              Architect will be on the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/917015520736?text=Hi%20Navaroha%20team,%20I%20just%20scheduled%20a%20strategy%20call%20for%20${encodeURIComponent(selectedSlot)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm inline-flex items-center justify-center gap-2"
              >
                <span>Notify via WhatsApp</span>
                <span>↗</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary btn-sm !text-white !border-slate-700 hover:!border-slate-500 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
