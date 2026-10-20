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
    whatsapp: "https://wa.me/917015520736",
    whatsappDisplay: "+91 70155 20736",
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
      { label: "Web Applications & SaaS", href: "/services/web-applications" },
      { label: "Mobile & Desktop Apps", href: "/services/mobile-desktop-apps" },
      { label: "AI & Workflow Automation", href: "/services/ai-automation" },
      { label: "Technical Advisory & Architecture", href: "/services/technical-advisory" },
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
