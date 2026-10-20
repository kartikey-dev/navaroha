"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: isScrolled
          ? "0 4px 20px -2px rgba(15, 23, 42, 0.06)"
          : "none",
      }}
    >
      <div className="container-main">
        <nav
          className="flex items-center justify-between"
          style={{ height: isScrolled ? "64px" : "80px", transition: "height var(--duration-base) var(--ease-out)" }}
          aria-label="Main navigation"
        >
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center no-underline group"
            aria-label={`${siteConfig.name} — Home`}
            onClick={closeMenu}
          >
            <Image
              src="/brand/navaroha-logo-light.png"
              alt={`${siteConfig.name} — ${siteConfig.tagline}`}
              width={180}
              height={43}
              priority
              className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
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
          background: "#FFFFFF",
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
