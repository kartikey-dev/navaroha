/**
 * Navaroha — Site Configuration
 *
 * Centralized brand, navigation, and site-wide settings.
 * Update this file when brand assets, contact details, or navigation change.
 */

export const siteConfig = {
  name: "Navaroha",
  tagline: "Build. Manage. Grow.",
  positioning: "Technology · Digital Products · Innovation",
  description:
    "Navaroha is a technology and digital products studio that builds websites, web applications, mobile apps, and AI-powered solutions to help businesses grow.",
  url: "https://navaroha.com", // Replace with confirmed production domain
  supportingMessage:
    "Ideas into impact. Build digital experiences that help businesses grow.",

  brand: {
    logoAlt: "Navaroha",
    iconPath: "/brand/navaroha-icon.png",
    iconLightPath: "/brand/navaroha-icon-light.png",
    iconDarkPath: "/brand/navaroha-icon-dark.png",
    cardPath: "/brand/navaroha-card.png",
    logoLightPath: "/brand/navaroha-logo-light.png",
    logoDarkPath: "/brand/navaroha-logo-dark.png",
  },

  contact: {
    email: "hello@navaroha.com",
    phone: "+91 7015520736",
    phoneDisplay: "+91 70155 20736",
    phoneRaw: "+917015520736",
    alternatePhone: "+91 9816444480",
    alternatePhoneDisplay: "+91 98164 44480",
    alternatePhoneRaw: "+919816444480",
    whatsapp: "https://wa.me/917015520736",
    whatsappDisplay: "+91 70155 20736",
    availability: "All-time available (24/7)",
  },

  social: {
    instagram: "https://instagram.com/navaroha",
    instagramHandle: "@navaroha",
    facebook: "https://www.facebook.com/navarohadigital",
    facebookHandle: "@navarohadigital",
  },

  navigation: {
    main: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Start a Project", href: "/contact" },
  },

  footer: {
    services: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "UI/UX & Brand Design", href: "/services/ui-ux-brand-design" },
      { label: "Android & iOS Apps", href: "/services/android-ios-development" },
      { label: "Web Applications & SaaS", href: "/services/web-applications" },
      { label: "Browser Extensions", href: "/services/browser-extension-development" },
      { label: "Maintenance & Support", href: "/services/website-maintenance-support" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Technical Advisory", href: "/services/technical-advisory" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};
