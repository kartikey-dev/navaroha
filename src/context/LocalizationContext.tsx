"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { currencyRates, CurrencyCode, LanguageCode, availableLanguages } from "@/content/data";

interface LocalizationContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  formatPrice: (inrAmount: number) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("navaroha:currency-change", callback);
  window.addEventListener("navaroha:lang-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("navaroha:currency-change", callback);
    window.removeEventListener("navaroha:lang-change", callback);
  };
}

function getCurrencySnapshot(): CurrencyCode {
  if (typeof window === "undefined") return "INR";
  try {
    const saved = localStorage.getItem("navaroha_currency") as CurrencyCode | null;
    if (saved && currencyRates[saved]) return saved;
  } catch {}
  return "INR";
}

function getCurrencyServerSnapshot(): CurrencyCode {
  return "INR";
}

function getLanguageSnapshot(): LanguageCode {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("navaroha_lang") as LanguageCode | null;
    if (saved && availableLanguages.some((l) => l.code === saved)) return saved;
  } catch {}
  return "en";
}

function getLanguageServerSnapshot(): LanguageCode {
  return "en";
}

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const currency = useSyncExternalStore(subscribe, getCurrencySnapshot, getCurrencyServerSnapshot);
  const language = useSyncExternalStore(subscribe, getLanguageSnapshot, getLanguageServerSnapshot);

  const setCurrency = (c: CurrencyCode) => {
    try {
      localStorage.setItem("navaroha_currency", c);
      window.dispatchEvent(new Event("navaroha:currency-change"));
    } catch {}
  };

  const setLanguage = (l: LanguageCode) => {
    try {
      localStorage.setItem("navaroha_lang", l);
      window.dispatchEvent(new Event("navaroha:lang-change"));
    } catch {}
  };

  const formatPrice = (inrAmount: number): string => {
    const rateConfig = currencyRates[currency];
    const converted = Math.round(inrAmount * rateConfig.rate);

    if (currency === "INR") {
      return `₹${inrAmount.toLocaleString("en-IN")}`;
    }
    if (currency === "USD") {
      return `$${converted.toLocaleString("en-US")}`;
    }
    if (currency === "EUR") {
      return `€${converted.toLocaleString("de-DE")}`;
    }
    if (currency === "GBP") {
      return `£${converted.toLocaleString("en-GB")}`;
    }
    if (currency === "AED") {
      return `AED ${converted.toLocaleString("en-US")}`;
    }
    return `${rateConfig.symbol}${converted.toLocaleString()}`;
  };

  return (
    <LocalizationContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        formatPrice,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) {
    return {
      currency: "INR" as CurrencyCode,
      setCurrency: () => {},
      language: "en" as LanguageCode,
      setLanguage: () => {},
      formatPrice: (amount: number) => `₹${amount.toLocaleString("en-IN")}`,
    };
  }
  return context;
}
