"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        backdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
        backgroundColor: isScrolled
          ? "rgba(248, 250, 252, 0.85)"
          : "transparent",
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <div className="container-main">
        <nav
          className="flex items-center justify-between"
          style={{ height: isScrolled ? "64px" : "80px", transition: "height var(--duration-base) var(--ease-out)" }}
          aria-label="Main navigation"
        >
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 no-underline"
            aria-label={`${siteConfig.name} — Home`}
            onClick={closeMenu}
          >
            {/* Gradient N Icon */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-lg)",
                background: "var(--gradient-brand)",
                color: "white",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.25rem",
                lineHeight: 1,
              }}
            >
              N
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "var(--color-text)",
                letterSpacing: "-0.01em",
              }}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium no-underline text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
                  background: "var(--color-text)",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  transform: isMenuOpen
                    ? "rotate(45deg) translateY(5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--color-text)",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--color-text)",
                  borderRadius: "1px",
                  transition: "all var(--duration-base) var(--ease-out)",
                  transform: isMenuOpen
                    ? "rotate(-45deg) translateY(-5px)"
                    : "none",
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
          background: "rgba(248, 250, 252, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
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
            className="text-h3 font-semibold no-underline"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            {item.label}
          </Link>
        ))}
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
