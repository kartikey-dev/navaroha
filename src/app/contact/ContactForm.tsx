"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/content/data";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: initialService,
    message: "",
  });

  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (prevInitialService !== initialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      setFormState((prev) => ({ ...prev, service: initialService }));
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fill in your name, email address, and project overview.");
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission with validation
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-emerald-950/40 border border-emerald-800/60 backdrop-blur-xl text-center shadow-[0_0_40px_rgba(16,185,129,0.2)]">
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
          ✓
        </div>
        <h3 className="text-2xl font-bold font-heading text-white mb-2">
          Enquiry Received Under Mutual NDA
        </h3>
        <p className="text-emerald-200 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-white">{formState.name}</strong>. An engineering lead from Navaroha will review your specification and reply within 24 business hours to coordinate an architecture scoping session.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormState({
              name: "",
              email: "",
              service: "",
              message: "",
            });
          }}
          className="btn btn-secondary text-xs text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-6"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-bold font-heading text-white">
            Direct Project Enquiry
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Handled directly by lead engineers. No spam, ever.
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold uppercase text-[var(--color-cyan)] bg-cyan-950/60 border border-cyan-800/80 px-2.5 py-1 rounded-full">
          Mutual NDA Protected
        </span>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-800/60 text-xs text-rose-300">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            placeholder="e.g. Michael Scott"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Work Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Primary Service / Technical Need
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        >
          <option value="" className="bg-slate-900 text-slate-400">Select a capability (optional)</option>
          {services.map((srv) => (
            <option key={srv.slug} value={srv.slug} className="bg-slate-900 text-white">
              {srv.title}
            </option>
          ))}
          <option value="other" className="bg-slate-900 text-white">Other / Multiple Capabilities</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Project Overview & Timeline <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder="Briefly describe what you're building, key goals, target audience, and any existing tech stack..."
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <p className="text-[11px] text-slate-400">
          🔒 Strict NDA guaranteed. We never disclose client inquiries.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full sm:w-auto px-8 py-3.5 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Transmitting...
            </span>
          ) : (
            <span>Submit Project Enquiry →</span>
          )}
        </button>
      </div>
    </form>
  );
}
