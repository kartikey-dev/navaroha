"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CurrencyCode, CURRENCIES } from "@/lib/currency";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      id="site-header"
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        backgroundColor: "#040916", // Exact color matching the Navaroha brand logo background
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: isScrolled ? "0 4px 24px -2px rgba(0, 0, 0, 0.4)" : "none",
      }}
    >
      <div className="container-main">
        <nav
          className="flex items-center justify-between"
          style={{
            height: isScrolled ? "64px" : "80px",
            transition: "height var(--duration-base) var(--ease-out)",
          }}
          aria-label="Main navigation"
        >
          {/* Official Brand Logo — Perfect match with header background */}
          <Link
            href="/"
            className="relative z-50 flex items-center no-underline group"
            aria-label={`${siteConfig.name} — Home`}
            onClick={closeMenu}
          >
            <Image
              src="/brand/navaroha-logo-dark.png"
              alt={`${siteConfig.name} — ${siteConfig.tagline}`}
              width={180}
              height={48}
              priority
              className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium no-underline text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Selector Pill */}
            <div className="relative inline-flex items-center">
              <label htmlFor="header-language-select" className="sr-only">
                Select Language
              </label>
              <select
                id="header-language-select"
                aria-label="Select Language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="appearance-none bg-slate-900/90 text-xs font-semibold text-slate-200 border border-slate-700/80 rounded-lg py-1.5 pl-2.5 pr-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="EN">EN (English)</option>
                <option value="ES">ES (Español)</option>
                <option value="DE">DE (Deutsch)</option>
                <option value="HI">HI (हिंदी)</option>
              </select>
              <span className="pointer-events-none absolute right-2 text-slate-400 text-[10px]">
                ▼
              </span>
            </div>

            {/* Currency Selector Pill */}
            <div className="relative inline-flex items-center">
              <label htmlFor="header-currency-select" className="sr-only">
                Select Currency
              </label>
              <select
                id="header-currency-select"
                aria-label="Select Currency"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
                className="appearance-none bg-slate-900/90 text-xs font-semibold text-slate-200 border border-slate-700/80 rounded-lg py-1.5 pl-2.5 pr-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
              <span className="pointer-events-none absolute right-2 text-slate-400 text-[10px]">
                ▼
              </span>
            </div>

            <Link href={siteConfig.navigation.cta.href} className="btn btn-primary btn-sm">
              {siteConfig.navigation.cta.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative z-50 p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div className="flex flex-col gap-1.5" style={{ width: "22px" }}>
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "#FFFFFF",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  transform: isMenuOpen ? "rotate(45deg) translateY(5px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "#FFFFFF",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "#FFFFFF",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  transform: isMenuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
                }}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "#040916", // Perfectly matching header and brand
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.75rem",
          transition: "all var(--duration-slow) var(--ease-out)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transform: isMenuOpen ? "none" : "translateY(-10px)",
        }}
      >
        {siteConfig.navigation.main.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="text-2xl font-bold no-underline text-white hover:text-blue-400 transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* Language Switcher in Mobile Drawer */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-xs text-slate-400">Language:</span>
          <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-0.5">
            {["EN", "ES", "DE", "HI"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 text-xs font-semibold rounded ${
                  selectedLanguage === lang
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Currency Switcher in Mobile Drawer */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs text-slate-400">Currency:</span>
          <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-0.5">
            {(["USD", "EUR", "GBP", "INR"] as CurrencyCode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCurrency(c)}
                className={`px-2.5 py-1 text-xs font-semibold rounded ${
                  selectedCurrency === c
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {c} ({CURRENCIES[c].symbol})
              </button>
            ))}
          </div>
        </div>

        <Link
          href={siteConfig.navigation.cta.href}
          onClick={closeMenu}
          className="btn btn-primary btn-lg"
          style={{ marginTop: "1rem" }}
        >
          {siteConfig.navigation.cta.label}
        </Link>
      </div>
    </header>
  );
}
