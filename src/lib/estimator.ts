/**
 * Navaroha Project Cost & Timeline Estimator
 *
 * Provides accurate, transparent estimation logic for global enterprise and startup projects.
 * Supports Website Development, Web Apps / SaaS, Mobile Apps, AI Workflows, and Advisory.
 */

import { CurrencyCode, convertFromUSD, formatCurrencyAmount } from "./currency";

export type ProjectType = "website" | "web-app" | "mobile-app" | "ai-automation" | "advisory";

export type ProjectScope = "mvp" | "standard" | "enterprise";

export type TimelinePace = "standard" | "accelerated" | "rush";

export type AddonKey =
  "design-system" | "seo-optimization" | "security-hardening" | "cloud-devops" | "maintenance-sla";

export interface EstimatorParams {
  projectType: ProjectType;
  scope: ProjectScope;
  timeline: TimelinePace;
  addons: string[];
  currency: CurrencyCode;
}

export interface EstimateResult {
  baseCostUSD: number;
  addonsCostUSD: number;
  totalCostUSD: number;
  totalInCurrency: number;
  currency: CurrencyCode;
  formattedTotal: string;
  estimatedWeeksMin: number;
  estimatedWeeksMax: number;
}

// Base pricing model in USD
const BASE_COSTS_USD: Record<ProjectType, Record<ProjectScope, number>> = {
  website: {
    mvp: 1500,
    standard: 3500,
    enterprise: 7500,
  },
  "web-app": {
    mvp: 4500,
    standard: 9500,
    enterprise: 20000,
  },
  "mobile-app": {
    mvp: 5000,
    standard: 11000,
    enterprise: 24000,
  },
  "ai-automation": {
    mvp: 3000,
    standard: 6500,
    enterprise: 14000,
  },
  advisory: {
    mvp: 1200,
    standard: 2800,
    enterprise: 6000,
  },
};

// Timeline delivery multipliers
const TIMELINE_MULTIPLIERS: Record<TimelinePace, number> = {
  standard: 1.0,
  accelerated: 1.25,
  rush: 1.5,
};

// Addon pricing in USD
export const ADDON_PRICING_USD: Record<
  AddonKey,
  { label: string; priceUSD: number; description: string }
> = {
  "design-system": {
    label: "Full Design System & Figma Kit",
    priceUSD: 1200,
    description: "Component tokens, accessibility guides, and reusable Figma libraries.",
  },
  "seo-optimization": {
    label: "Enterprise SEO & Schema Markup",
    priceUSD: 800,
    description: "Deep JSON-LD structured data, OpenGraph, sitemaps, and core vitals tuning.",
  },
  "security-hardening": {
    label: "OWASP Security Hardening & CSP",
    priceUSD: 1000,
    description: "Strict Content-Security-Policy, rate limiting, and security headers.",
  },
  "cloud-devops": {
    label: "Automated CI/CD & Cloud Infrastructure",
    priceUSD: 1500,
    description: "Multi-environment pipeline, Terraform/IaC, and automated release gates.",
  },
  "maintenance-sla": {
    label: "99.9% Uptime Support & Maintenance SLA",
    priceUSD: 1200,
    description: "24/7 incident monitoring, security patching, and prioritized ticket queue.",
  },
};

// Base delivery timelines in weeks [min, max]
const BASE_TIMELINES: Record<ProjectType, Record<ProjectScope, [number, number]>> = {
  website: {
    mvp: [2, 3],
    standard: [3, 5],
    enterprise: [6, 10],
  },
  "web-app": {
    mvp: [4, 6],
    standard: [6, 10],
    enterprise: [12, 18],
  },
  "mobile-app": {
    mvp: [5, 8],
    standard: [8, 14],
    enterprise: [16, 24],
  },
  "ai-automation": {
    mvp: [2, 4],
    standard: [4, 8],
    enterprise: [8, 14],
  },
  advisory: {
    mvp: [1, 2],
    standard: [2, 4],
    enterprise: [4, 8],
  },
};

export function convertCurrency(amountInUSD: number, targetCurrency: CurrencyCode): number {
  return convertFromUSD(amountInUSD, targetCurrency);
}

export function formatCurrency(amount: number, currency: CurrencyCode): string {
  return formatCurrencyAmount(amount, currency);
}

export function calculateEstimate(params: EstimatorParams): EstimateResult {
  const { projectType, scope, timeline, addons, currency } = params;

  // Resolve base cost
  const baseTypeConfig = BASE_COSTS_USD[projectType] || BASE_COSTS_USD.website;
  const baseCostUSD = baseTypeConfig[scope] || baseTypeConfig.standard;

  // Apply timeline multiplier to base development
  const multiplier = TIMELINE_MULTIPLIERS[timeline] || 1.0;
  const adjustedBaseUSD = Math.round(baseCostUSD * multiplier);

  // Sum valid addons
  let addonsCostUSD = 0;
  if (Array.isArray(addons)) {
    for (const addon of addons) {
      if (addon in ADDON_PRICING_USD) {
        addonsCostUSD += ADDON_PRICING_USD[addon as AddonKey].priceUSD;
      }
    }
  }

  const totalCostUSD = adjustedBaseUSD + addonsCostUSD;
  const totalInCurrency = convertCurrency(totalCostUSD, currency);
  const formattedTotal = formatCurrency(totalInCurrency, currency);

  // Calculate delivery timeline
  const timelineRange = BASE_TIMELINES[projectType]?.[scope] || [2, 4];
  let [minWeeks, maxWeeks] = timelineRange;
  if (timeline === "accelerated") {
    minWeeks = Math.max(1, Math.round(minWeeks * 0.75));
    maxWeeks = Math.max(2, Math.round(maxWeeks * 0.75));
  } else if (timeline === "rush") {
    minWeeks = Math.max(1, Math.round(minWeeks * 0.5));
    maxWeeks = Math.max(1, Math.round(maxWeeks * 0.5));
  }

  return {
    baseCostUSD,
    addonsCostUSD,
    totalCostUSD,
    totalInCurrency,
    currency,
    formattedTotal,
    estimatedWeeksMin: minWeeks,
    estimatedWeeksMax: maxWeeks,
  };
}
