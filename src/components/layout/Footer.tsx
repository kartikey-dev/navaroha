"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-midnight)",
        color: "#CBD5E1",
      }}
    >
      <div className="container-main" style={{ paddingBlock: "4rem 2rem" }}>
        {/* Top section */}
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "320px" }}>
            <Link
              href="/"
              className="flex items-center gap-2 no-underline"
              style={{ marginBottom: "1rem" }}
              aria-label={`${siteConfig.name} — Home`}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--gradient-brand)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                }}
              >
                N
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#F1F5F9",
                }}
              >
                {siteConfig.name}
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "#94A3B8",
                marginBottom: "1.25rem",
              }}
            >
              {siteConfig.supportingMessage}
            </p>
            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-astra-blue)",
                  textDecoration: "none",
                }}
              >
                {siteConfig.contact.email}
              </a>
            )}
          </div>

          {/* Services Column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748B",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {siteConfig.footer.services.map((item) => (
                <li key={item.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-slate-100 no-underline transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748B",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {siteConfig.footer.company.map((item) => (
                <li key={item.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-slate-100 no-underline transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748B",
                marginBottom: "1.25rem",
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {siteConfig.footer.legal.map((item) => (
                <li key={item.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-slate-100 no-underline transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "#1E293B",
            marginBlock: "2.5rem 1.5rem",
          }}
        />

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ fontSize: "0.8125rem", color: "#64748B" }}
        >
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
