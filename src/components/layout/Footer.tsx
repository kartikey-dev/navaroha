"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {/* Brand & Connect Column */}
          <div style={{ maxWidth: "340px" }}>
            <Link
              href="/"
              className="inline-block no-underline mb-4 group"
              aria-label={`${siteConfig.name} — Home`}
            >
              <Image
                src="/brand/navaroha-logo-dark.png"
                alt={`${siteConfig.name} — ${siteConfig.tagline}`}
                width={170}
                height={45}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
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

            {/* Direct Contact & Social — Single Unified Placement */}
            <div className="space-y-2 mb-4 text-sm">
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.949 2.8.949h.005c3.179 0 5.766-2.587 5.767-5.767.002-3.18-2.585-5.735-5.776-5.735zm3.393 8.163c-.144.405-.837.774-1.17.825-.312.046-.715.066-2.251-.571-1.638-.679-2.698-2.345-2.781-2.454-.08-.109-.652-.868-.652-1.657 0-.788.414-1.176.561-1.336.148-.16.323-.2.431-.2.108 0 .216.001.311.006.1.006.234-.038.366.279.135.324.463 1.129.504 1.211.041.082.068.178.014.286-.054.108-.082.176-.162.27-.081.096-.17.214-.243.287-.081.082-.166.171-.072.333.094.161.417.689.897 1.116.618.55 1.139.721 1.301.802.162.081.257.068.352-.041.095-.109.405-.472.513-.634.108-.162.216-.135.364-.081.148.054.945.446 1.107.527.162.081.27.122.311.189.041.068.041.393-.103.798z"/>
                  </svg>
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
            </div>

            {/* Social Links — Sole Dedicated Placement in Footer */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Navaroha on Instagram (@navaroha)"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Navaroha on Facebook (@navaroha)"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1877F2] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <span className="text-xs text-slate-400">@navaroha</span>
            </div>
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
