/**
 * Navaroha Form Validation & OWASP Sanitization
 *
 * Implements strict input sanitization, XSS mitigation, regex email validation,
 * and structured error feedback for contact and estimation forms.
 */

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  phone?: string;
  timeline?: string;
  budget?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
}

/**
 * Strips HTML tags, script tags, dangerous attributes, and trims whitespace
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";

  // Remove <script>...</script> tags and content
  let cleaned = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // Remove HTML tags
  cleaned = cleaned.replace(/<[^>]+>/g, "");

  // Prevent CRLF injection
  cleaned = cleaned.replace(/[\r\n]+/g, " ");

  // Trim extraneous whitespace
  return cleaned.trim();
}

/**
 * Validates an email address against strict format without CRLF injection
 */
function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  // Ensure no newline or carriage return
  if (/[\r\n]/.test(email)) return false;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates phone numbers allowing common international formatting (+, spaces, hyphens, brackets)
 */
function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim() === "") return true; // Optional
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Validates and sanitizes contact form submissions
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  const rawName = (data.name || "").trim();
  const rawEmail = (data.email || "").trim();
  const rawService = (data.service || "").trim();
  const rawMessage = (data.message || "").trim();
  const rawPhone = (data.phone || "").trim();

  // Validate Name
  const sanitizedName = sanitizeInput(rawName);
  if (!sanitizedName) {
    errors.name = "Full name is required.";
  } else if (sanitizedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (sanitizedName.length > 100) {
    errors.name = "Name must not exceed 100 characters.";
  }

  // Validate Email
  if (!rawEmail) {
    errors.email = "Business email address is required.";
  } else if (!isValidEmail(rawEmail)) {
    errors.email = "Please provide a valid business email address.";
  }

  // Validate Service
  if (!rawService) {
    errors.service = "Please select a primary service.";
  }

  // Validate Message
  const sanitizedMessage = sanitizeInput(rawMessage);
  if (!sanitizedMessage) {
    errors.message = "Project brief or message is required.";
  } else if (sanitizedMessage.length < 10) {
    errors.message = "Please provide at least 10 characters describing your project.";
  } else if (sanitizedMessage.length > 3000) {
    errors.message = "Message must not exceed 3000 characters.";
  }

  // Validate Phone if provided
  if (rawPhone && !isValidPhone(rawPhone)) {
    errors.phone = "Please enter a valid international phone number.";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          name: sanitizedName,
          email: rawEmail.toLowerCase(),
          service: rawService,
          message: sanitizedMessage,
          phone: rawPhone ? sanitizeInput(rawPhone) : undefined,
          timeline: data.timeline ? sanitizeInput(data.timeline) : undefined,
          budget: data.budget ? sanitizeInput(data.budget) : undefined,
        }
      : undefined,
  };
}
