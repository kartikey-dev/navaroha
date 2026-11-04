/**
 * Navaroha Multi-Currency System
 *
 * Provides live currency conversion, formatting, and React context
 * for global agency clients across North America, Europe, UK, and Asia-Pacific.
 */

export type CurrencyCode = "USD" | "EUR" | "GBP" | "INR";

export interface CurrencyMeta {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateAgainstUSD: number; // Conversion multiplier from 1 USD
  formatPattern: "en-US" | "de-DE" | "en-GB" | "en-IN";
}

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar (USD)",
    rateAgainstUSD: 1.0,
    formatPattern: "en-US",
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro (EUR)",
    rateAgainstUSD: 0.92,
    formatPattern: "de-DE",
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound (GBP)",
    rateAgainstUSD: 0.79,
    formatPattern: "en-GB",
  },
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee (INR)",
    rateAgainstUSD: 86.5,
    formatPattern: "en-IN",
  },
};

/**
 * Converts an amount in USD to the target currency
 */
export function convertFromUSD(amountInUSD: number, targetCurrency: CurrencyCode): number {
  const meta = CURRENCIES[targetCurrency] || CURRENCIES.USD;
  return Math.round(amountInUSD * meta.rateAgainstUSD);
}

/**
 * Formats a currency amount into a clean, localized string
 */
export function formatCurrencyAmount(amount: number, currency: CurrencyCode): string {
  const meta = CURRENCIES[currency] || CURRENCIES.USD;

  if (currency === "INR") {
    // Format according to Indian numbering system (e.g., ₹5,00,000)
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(amount);
    return `${meta.symbol}${formatted}`;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(amount);

  return `${meta.symbol}${formatted}`;
}
