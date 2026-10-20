"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormState((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

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
      <div className="p-8 md:p-12 rounded-[var(--radius-2xl)] bg-emerald-50 border border-emerald-200 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold font-heading text-emerald-950 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-emerald-800 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
          We have received your enquiry. An engineer from Navaroha will review
          your details and reach out within 24 business hours to arrange an initial
          discovery call.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormState({
              name: "",
              email: "",
              company: "",
              service: "",
              budget: "",
              timeline: "",
              message: "",
            });
          }}
          className="btn-secondary !bg-white text-xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] space-y-6"
    >
      {errorMessage && (
        <div className="p-4 rounded-[var(--radius-md)] bg-rose-50 border border-rose-200 text-xs text-rose-700">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            placeholder="Ada Lovelace"
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            placeholder="ada@example.com"
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formState.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Primary Interest
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          >
            <option value="">Select a service...</option>
            <option value="website-development">Website Development</option>
            <option value="web-applications">Web Applications & SaaS</option>
            <option value="mobile-desktop-apps">Mobile & Desktop Apps</option>
            <option value="ai-automation">AI & Workflow Automation</option>
            <option value="technical-advisory">Technical Advisory & Architecture</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Expected Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          >
            <option value="">Select budget range...</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-30k">$15,000 – $30,000</option>
            <option value="30k-60k">$30,000 – $60,000</option>
            <option value="60k+">$60,000+</option>
            <option value="undecided">Undecided / Scoping phase</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
          >
            Desired Launch Window
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formState.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white"
          >
            <option value="">Select timeline...</option>
            <option value="urgent">Immediate (Under 1 month)</option>
            <option value="standard">1 – 3 months</option>
            <option value="flexible">3 – 6 months</option>
            <option value="exploratory">Exploratory / Planning</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
        >
          Project Overview <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about what you want to build, current challenges, and desired outcomes..."
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-slate-900 bg-white resize-y"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5 text-center flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Transmitting enquiry...
            </>
          ) : (
            <>
              Submit Project Enquiry
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. No spam. You will communicate directly with
        technical partners.
      </p>
    </form>
  );
}
