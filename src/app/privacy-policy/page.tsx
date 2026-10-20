import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — Navaroha",
  description: "Navaroha's privacy policy and data governance practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[var(--color-midnight)] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last updated: October 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-sm md:text-base text-slate-700 leading-relaxed font-sans">
          <p>
            At {siteConfig.name}, we are committed to safeguarding the privacy
            of our visitors, clients, and partners. This policy outlines how
            we handle personal information collected via our website (
            {siteConfig.url}) and client communications.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p>
            We only collect personal information that you voluntarily provide to
            us when requesting an enquiry, scheduling a consultation, or
            contacting us directly via email. This typically includes your name,
            work email, company name, and project scope details.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect strictly to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Evaluate project fit and deliver technical proposals</li>
            <li>Respond to direct enquiries and schedule discovery calls</li>
            <li>Execute agreed software engineering services</li>
            <li>Fulfill legal and contractual obligations</li>
          </ul>
          <p>
            We never sell, rent, or trade your contact information to third parties
            or marketing data brokers.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            3. Data Retention and Security
          </h2>
          <p>
            We implement modern technical safeguards to protect your personal
            information against unauthorized access, loss, or disclosure. We
            retain communications only as long as necessary to support project
            delivery and maintain historical records.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            4. Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy or wish to request
            the removal of your data, please contact us at:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[var(--color-primary)] font-medium hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <Link href="/" className="btn-secondary text-xs">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
