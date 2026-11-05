"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/content/data";
import { validateContactForm } from "@/lib/validation";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams?.get("service") || "";
  const initialEstimate = searchParams?.get("estimate") || "";
  const initialType = searchParams?.get("type") || "";
  const initialScope = searchParams?.get("scope") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    message: initialEstimate
      ? `Estimated Scope: ${initialType} (${initialScope}) with target budget ${initialEstimate}.\n\nProject details: `
      : "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      service: formState.service || "Web Applications & SaaS",
      message: formState.message,
      budget: initialEstimate || undefined,
    });

    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    // Simulate async submission with network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 rounded-[var(--radius-2xl)] bg-emerald-50 border border-emerald-200 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold font-heading text-emerald-950 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-emerald-800 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
          We have received your enquiry. An engineer from Navaroha will review your details and
          reach out within 24 business hours to arrange an initial discovery call.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormState({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          }}
          className="btn-secondary !bg-white text-xs px-5 py-2.5 rounded-xl border border-emerald-300 font-semibold text-emerald-900 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-xl space-y-6 text-white"
    >
      {initialEstimate && (
        <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-300 flex items-center justify-between">
          <span>
            Configured Scope: <strong className="text-white">{initialType}</strong> ({initialScope})
          </span>
          <span className="font-mono font-bold text-blue-400">{initialEstimate}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            value={formState.name}
            onChange={handleChange}
            placeholder="Ada Lovelace"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-slate-950 ${
              fieldErrors.name ? "border-rose-500 bg-rose-950/20" : "border-slate-700"
            }`}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-xs text-rose-400 mt-1.5 font-medium">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            value={formState.email}
            onChange={handleChange}
            placeholder="ada@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-slate-950 ${
              fieldErrors.email ? "border-rose-500 bg-rose-950/20" : "border-slate-700"
            }`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-xs text-rose-400 mt-1.5 font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            value={formState.phone}
            onChange={handleChange}
            placeholder="+1 555-0199 or +91 70155 20736"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-slate-950 ${
              fieldErrors.phone ? "border-rose-500 bg-rose-950/20" : "border-slate-700"
            }`}
          />
          {fieldErrors.phone && (
            <p id="phone-error" className="text-xs text-rose-400 mt-1.5 font-medium">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Primary Interest / Service
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-slate-950"
          >
            <option value="" className="bg-slate-950 text-white">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-slate-950 text-white">
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
        >
          Project Overview <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about what you want to build, current challenges, and desired outcomes..."
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-slate-950 resize-y ${
            fieldErrors.message ? "border-rose-500 bg-rose-950/20" : "border-slate-700"
          }`}
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-xs text-rose-400 mt-1.5 font-medium">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full py-3.5 text-center flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. No spam. You will communicate directly with technical partners.
      </p>
    </form>
  );
}
