import { describe, it, expect } from "vitest";
import {
  calculateEstimate,
  formatCurrency,
  convertCurrency,
  type EstimatorParams,
} from "../estimator";

describe("Project Cost Estimator", () => {
  it("calculates minimum base estimate for MVP website in USD", () => {
    const params: EstimatorParams = {
      projectType: "website",
      scope: "mvp",
      timeline: "standard",
      addons: [],
      currency: "USD",
    };

    const result = calculateEstimate(params);
    expect(result.baseCostUSD).toBe(1500);
    expect(result.addonsCostUSD).toBe(0);
    expect(result.totalCostUSD).toBe(1500);
    expect(result.totalInCurrency).toBe(1500);
    expect(result.currency).toBe("USD");
    expect(result.formattedTotal).toBe("$1,500");
    expect(result.estimatedWeeksMin).toBeGreaterThan(0);
    expect(result.estimatedWeeksMax).toBeGreaterThanOrEqual(result.estimatedWeeksMin);
  });

  it("calculates estimate with addons and accelerated timeline", () => {
    const params: EstimatorParams = {
      projectType: "web-app",
      scope: "standard",
      timeline: "accelerated", // 1.25x multiplier
      addons: ["design-system", "security-hardening"], // 1200 + 1000 = 2200
      currency: "USD",
    };

    const result = calculateEstimate(params);
    // Base standard web-app = 9500
    // Multiplied by 1.25 = 11875
    // Addons = 2200
    // Total = 14075
    expect(result.baseCostUSD).toBe(9500);
    expect(result.addonsCostUSD).toBe(2200);
    expect(result.totalCostUSD).toBe(14075);
    expect(result.formattedTotal).toBe("$14,075");
  });

  it("converts estimate correctly to EUR, GBP, and INR", () => {
    const paramsUSD: EstimatorParams = {
      projectType: "mobile-app",
      scope: "enterprise",
      timeline: "standard",
      addons: [],
      currency: "USD",
    };
    const usdResult = calculateEstimate(paramsUSD);
    expect(usdResult.totalCostUSD).toBe(24000);

    const eurResult = calculateEstimate({ ...paramsUSD, currency: "EUR" });
    expect(eurResult.currency).toBe("EUR");
    expect(eurResult.formattedTotal).toContain("€");
    expect(eurResult.totalInCurrency).toBe(Math.round(24000 * 0.92));

    const gbpResult = calculateEstimate({ ...paramsUSD, currency: "GBP" });
    expect(gbpResult.currency).toBe("GBP");
    expect(gbpResult.formattedTotal).toContain("£");
    expect(gbpResult.totalInCurrency).toBe(Math.round(24000 * 0.79));

    const inrResult = calculateEstimate({ ...paramsUSD, currency: "INR" });
    expect(inrResult.currency).toBe("INR");
    expect(inrResult.formattedTotal).toContain("₹");
    expect(inrResult.totalInCurrency).toBe(Math.round(24000 * 86.5));
  });

  it("handles unknown addons gracefully without crashing", () => {
    const params: EstimatorParams = {
      projectType: "website",
      scope: "standard",
      timeline: "standard",
      addons: ["non-existent-addon" as unknown as string],
      currency: "USD",
    };

    const result = calculateEstimate(params);
    expect(result.addonsCostUSD).toBe(0);
    expect(result.totalCostUSD).toBe(3500);
  });

  it("formats currency accurately with commas and symbols", () => {
    expect(formatCurrency(1500, "USD")).toBe("$1,500");
    expect(formatCurrency(25000, "EUR")).toBe("€25,000");
    expect(formatCurrency(500000, "INR")).toBe("₹5,00,000");
    expect(formatCurrency(10000, "GBP")).toBe("£10,000");
  });

  it("calculates rush delivery timelines accurately", () => {
    const rushParams: EstimatorParams = {
      projectType: "ai-automation",
      scope: "enterprise",
      timeline: "rush",
      addons: [],
      currency: "USD",
    };
    const result = calculateEstimate(rushParams);
    expect(result.totalCostUSD).toBe(Math.round(14000 * 1.5));
    expect(result.estimatedWeeksMin).toBeGreaterThanOrEqual(1);
  });

  it("handles fallback defaults for unrecognized parameters safely", () => {
    const fallbackResult = calculateEstimate({
      projectType: "invalid-type" as unknown as "website",
      scope: "invalid-scope" as unknown as "standard",
      timeline: "standard",
      addons: [],
      currency: "UNKNOWN" as unknown as "USD",
    });
    expect(fallbackResult.baseCostUSD).toBeGreaterThan(0);
    expect(fallbackResult.currency).toBe("UNKNOWN");
  });

  it("converts amounts between currencies predictably", () => {
    expect(convertCurrency(1000, "USD")).toBe(1000);
    expect(convertCurrency(1000, "EUR")).toBe(920);
    expect(convertCurrency(1000, "GBP")).toBe(790);
    expect(convertCurrency(1000, "INR")).toBe(86500);
  });
});
