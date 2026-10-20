import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service — Navaroha",
  description: "Navaroha's terms of service and engagement guidelines.",
};

export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[var(--color-midnight)] mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last updated: October 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-sm md:text-base text-slate-700 leading-relaxed font-sans">
          <p>
            Welcome to {siteConfig.name}. By accessing our website (
            {siteConfig.url}) or engaging our engineering and design services,
            you agree to be bound by the terms described herein.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            1. Services and Statements of Work
          </h2>
          <p>
            All custom software development, design, and consulting services are
            governed by individual Statements of Work (SOW) or Master Services
            Agreements (MSA) executed between {siteConfig.name} and the client.
            Such agreements supersede these general terms in case of conflict.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            2. Intellectual Property
          </h2>
          <p>
            Upon full payment for completed milestones as specified in the
            relevant SOW, all deliverables, custom source code, documentation,
            and design files are transferred to the client. {siteConfig.name}{" "}
            retains rights to general reusable libraries, pre-existing tools,
            and foundational framework utilities.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            3. Accuracy of Website Information
          </h2>
          <p>
            While we strive for accurate, up-to-date descriptions of our
            capabilities, project methodologies, and technical stack, material on
            this website is provided for informational purposes and does not
            constitute a binding warranty of specific system performance.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law,{" "}
            {siteConfig.name} shall not be liable for indirect, incidental, or
            consequential damages arising from the use of this website or
            reliance on any content published herein.
          </p>

          <h2 className="text-xl font-bold font-heading text-slate-900 mt-8 mb-3">
            5. Inquiries
          </h2>
          <p>
            For questions regarding these terms, please contact us at:{" "}
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
