import { describe, it, expect } from "vitest";
import { validateContactForm, sanitizeInput, type ContactFormData } from "../validation";

describe("Contact Form Validation & Security Sanitization", () => {
  const validData: ContactFormData = {
    name: "Alex Vance",
    email: "alex@example.com",
    service: "Web Applications & SaaS",
    message: "We need a scalable enterprise web portal built with Next.js and secure APIs.",
    phone: "+1 555-0199",
    timeline: "1-3 months",
    budget: "$10k-$25k",
  };

  it("passes validation for complete valid submission", () => {
    const result = validateContactForm(validData);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.sanitizedData?.name).toBe("Alex Vance");
    expect(result.sanitizedData?.email).toBe("alex@example.com");
  });

  it("fails when name is missing or too short", () => {
    const resultEmpty = validateContactForm({ ...validData, name: "" });
    expect(resultEmpty.isValid).toBe(false);
    expect(resultEmpty.errors.name).toBeDefined();

    const resultShort = validateContactForm({ ...validData, name: "A" });
    expect(resultShort.isValid).toBe(false);
    expect(resultShort.errors.name).toBeDefined();
  });

  it("fails when email is invalid or contains malicious header injections", () => {
    const resultInvalid = validateContactForm({ ...validData, email: "invalid-email" });
    expect(resultInvalid.isValid).toBe(false);
    expect(resultInvalid.errors.email).toBeDefined();

    const resultInjection = validateContactForm({
      ...validData,
      email: "user@example.com\r\nBcc: victim@example.com",
    });
    expect(resultInjection.isValid).toBe(false);
    expect(resultInjection.errors.email).toBeDefined();
  });

  it("fails when message is shorter than 10 characters", () => {
    const result = validateContactForm({ ...validData, message: "Too short" });
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it("sanitizes dangerous XSS payload from name and message", () => {
    const maliciousPayload = "<script>alert('xss')</script>Hello <b>World</b>";
    const sanitized = sanitizeInput(maliciousPayload);
    expect(sanitized).not.toContain("<script>");
    expect(sanitized).not.toContain("</script>");
    expect(sanitized).toBe("Hello World");
  });

  it("strips harmful script tags and keeps text safe", () => {
    const result = validateContactForm({
      ...validData,
      name: "<script>hack()</script>Sarah Connor",
      message: "<img src=x onerror=alert(1)>Looking to build an autonomous pipeline.",
    });

    expect(result.isValid).toBe(true);
    expect(result.sanitizedData?.name).toBe("Sarah Connor");
    expect(result.sanitizedData?.message).toBe("Looking to build an autonomous pipeline.");
  });

  it("validates phone number format if provided", () => {
    const validPhone = validateContactForm({ ...validData, phone: "+91 70155 20736" });
    expect(validPhone.isValid).toBe(true);

    const invalidPhone = validateContactForm({ ...validData, phone: "invalid-letters-phone" });
    expect(invalidPhone.isValid).toBe(false);
    expect(invalidPhone.errors.phone).toBeDefined();
  });

  it("fails when name exceeds 100 characters", () => {
    const longName = "A".repeat(101);
    const result = validateContactForm({ ...validData, name: longName });
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toContain("100 characters");
  });

  it("fails when email or service is missing or blank", () => {
    const noEmail = validateContactForm({ ...validData, email: "" });
    expect(noEmail.isValid).toBe(false);
    expect(noEmail.errors.email).toContain("email");

    const noService = validateContactForm({ ...validData, service: "" });
    expect(noService.isValid).toBe(false);
    expect(noService.errors.service).toContain("service");
  });

  it("fails when message exceeds 3000 characters", () => {
    const longMsg = "A".repeat(3001);
    const result = validateContactForm({ ...validData, message: longMsg });
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toContain("3000 characters");
  });

  it("handles non-string or undefined inputs in sanitizeInput safely", () => {
    expect(sanitizeInput(null as unknown as string)).toBe("");
    expect(sanitizeInput(undefined as unknown as string)).toBe("");
    expect(sanitizeInput(123 as unknown as string)).toBe("");
  });

  it("permits submission without optional phone", () => {
    const withoutPhone = validateContactForm({ ...validData, phone: "" });
    expect(withoutPhone.isValid).toBe(true);
    expect(withoutPhone.sanitizedData?.phone).toBeUndefined();
  });
});
