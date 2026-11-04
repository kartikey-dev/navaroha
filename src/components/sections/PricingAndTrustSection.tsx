"use client";

import React, { useState } from "react";
import { pricingTiers, trustSignals } from "@/content/data";
import { useLocalization } from "@/context/LocalizationContext";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BookCallModal } from "@/components/ui/BookCallModal";

export function PricingAndTrustSection() {
  const { currency, formatPrice } = useLocalization();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Full-Stack Web App & SaaS");

  return (
    <>
      <section
        id="pricing-and-trust"
        aria-labelledby="pricing-heading"
        className="section-padding bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800"
      >
        <div className="absolute inset-0 jali-pattern-dark opacity-20 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-main relative z-10">
          {/* Section Header */}
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eyebrow text-amber-400 mb-3 block">
                Radical Transparency
              </span>
              <h2 id="pricing-heading" className="text-h2 text-white mb-4">
                Transparent Pricing.{" "}
                <span className="text-gradient-agency">No Surprise Retainers.</span>
              </h2>
              <p className="text-body-lg text-slate-300">
                We publish our starting rates so you can budget with certainty. Shown in your preferred currency:{" "}
                <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {currency}
                </span>
                . Switch currencies anytime from the top bar.
              </p>
            </div>
          </RevealOnScroll>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {pricingTiers.map((tier) => {
              const inrPrice = tier.prices.INR;
              const formatted = formatPrice(inrPrice);

              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    tier.recommended
                      ? "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-102"
                      : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          tier.recommended
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                      {tier.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="pt-2 pb-4 border-b border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        Starting From
                      </div>
                      <div className="text-3xl font-black font-heading text-white flex items-baseline gap-1">
                        <span>{formatted}</span>
                        <span className="text-xs font-normal text-slate-400 font-sans">/ sprint</span>
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-1">
                        ⏱ {tier.turnaround}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        What&apos;s Included:
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 font-bold shrink-0">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Trigger */}
                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPlan(tier.name);
                        setIsBookModalOpen(true);
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        tier.recommended
                          ? "btn-gradient shadow-md"
                          : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                      }`}
                    >
                      Book Free Discovery Call →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Trust Us / Trust Signals Grid */}
          <div className="pt-12 border-t border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-eyebrow text-emerald-400 mb-2 block">Enterprise Safeguards</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Why global clients choose Navaroha with complete peace of mind
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustSignals.map((signal, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="text-3xl mb-3">{signal.icon}</div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-400 block mb-1">
                    {signal.badge}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-white mb-2">
                    {signal.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Badges / Guarantees Ribbon */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-300 text-center">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 text-lg">🛡️</span>
                <span><strong>Zero Vendor Lock-in:</strong> 100% IP ownership on day one</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-lg">💳</span>
                <span><strong>Secure Payment:</strong> Stripe, Razorpay, Escrow & Wire Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-violet-400 text-lg">⚡</span>
                <span><strong>SLA Backed:</strong> 99.9% uptime architectures on AWS & Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Call Modal */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        defaultTopic={`Consultation: ${selectedPlan}`}
      />
    </>
  );
}
