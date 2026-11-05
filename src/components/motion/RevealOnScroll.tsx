"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

/**
 * Reveals children with a subtle entrance animation when they enter the viewport.
 * Respects prefers-reduced-motion by rendering children immediately.
 */
export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    // Safety fallback: if IntersectionObserver delays or is off-screen, auto-reveal after 400ms
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(safetyTimer);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [once, prefersReduced]);

  const transforms: Record<string, string> = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(24px)",
    right: "translateX(-24px)",
    none: "none",
  };

  const shouldShow = isVisible || prefersReduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? "none" : transforms[direction],
        transition: prefersReduced
          ? "none"
          : `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`,
        willChange: shouldShow ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
