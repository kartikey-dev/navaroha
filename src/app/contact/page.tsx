import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site-config";
import { faqItems } from "@/content/data";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact & Book a Call — Executive Boardroom — Navaroha",
  description:
    "Direct technical consultation with senior architects and engineers at Navaroha. Protected under Mutual NDA with 24-hour turnaround.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen">
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden jali-pattern-dark border-b border-white/10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.2), transparent 70%)",
          }}
        />
        <div className="container-main text-center relative z-10">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-semibold text-[var(--color-cyan)] mb-4">
              <span>🤝 Virtual Office Room 04 — Executive Boardroom</span>
              <span>•</span>
              <span>24/7 Global Response</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto mb-6 tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Exceptional Together</span>
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Whether you have a fully scoped specification or an ambitious early concept, you will speak directly with seasoned product engineers. No aggressive salespeople or scripted discovery calls.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-slate-400 bg-slate-900/60 rounded-3xl border border-white/10">
                    Loading Executive Boardroom intake...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>

              {/* Quick FAQ in Dark Theme */}
              <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] mt-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
                  Immediate Answers
                </span>
                <h3 className="text-xl font-bold text-white mb-4 font-heading mt-1">
                  Frequently Asked Questions
                </h3>
                <Accordion items={faqItems.slice(0, 4)} />
              </div>
            </div>

            {/* Sidebar Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct channel monitored by engineering leads 24/7.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Direct Phone Lines
                  </span>
                  <div className="space-y-2">
                    <div>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                      >
                        <span>📞</span> {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`tel:${siteConfig.contact.alternatePhoneRaw}`}
                        className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                      >
                        <span>📞</span> {siteConfig.contact.alternatePhoneDisplay}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    All-time available (24/7 direct response)
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    WhatsApp Quick Desk
                  </span>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-sm font-semibold hover:bg-emerald-900/60 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Official Social Channels
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-800/80 text-xs font-medium text-slate-300 hover:border-pink-500 hover:text-white transition-colors"
                    >
                      <span>📸</span> Instagram
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-800/80 text-xs font-medium text-slate-300 hover:border-blue-500 hover:text-white transition-colors"
                    >
                      <span>👥</span> Facebook
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    What Happens Next?
                  </span>
                  <ol className="space-y-3 text-xs text-slate-300 list-decimal list-inside">
                    <li>
                      <strong className="text-white">Mutual NDA & Intake:</strong>{" "}
                      Initial review by lead engineers within 24 business hours.
                    </li>
                    <li>
                      <strong className="text-white">Architecture Scoping:</strong>{" "}
                      A 30-minute deep-dive call with milestone breakdown & fixed pricing.
                    </li>
                    <li>
                      <strong className="text-white">Sprint Kickoff:</strong>{" "}
                      Design & coding begin with live continuous preview environments.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
