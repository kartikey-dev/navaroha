"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface ClientBrand {
  name: string;
  category: string;
  domain: string;
  url: string;
  badge: string;
  icon: string;
  accentGradient: string;
}

const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: "Devavo Foods",
    category: "Gourmet Food & Artisanal Spices",
    domain: "devavofoods.com",
    url: "https://devavofoods.com/",
    badge: "E-Commerce",
    icon: "🌶️",
    accentGradient: "from-amber-500/20 to-red-500/10",
  },
  {
    name: "Bunavat",
    category: "Handloom Sarees & Ethical Textiles",
    domain: "bunavat.com",
    url: "https://bunavat.com/",
    badge: "Artisan Luxury",
    icon: "🧵",
    accentGradient: "from-purple-500/20 to-rose-500/10",
  },
  {
    name: "Full Moon Holidays",
    category: "Himalayan Adventure Travel & Treks",
    domain: "fullmoonholidays.com",
    url: "https://www.fullmoonholidays.com/",
    badge: "Booking Engine",
    icon: "🏔️",
    accentGradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "Armaan Ethnic Wear",
    category: "Luxury Traditional Wedding & Festive Wear",
    domain: "armaanethnic.com",
    url: "https://www.armaanethnic.com/",
    badge: "Digital Flagship",
    icon: "👑",
    accentGradient: "from-amber-500/20 to-yellow-500/10",
  },
  {
    name: "Thermal Energy",
    category: "Heavy Industrial BTG Spares & Auxiliaries",
    domain: "thermal-energy-international.vercel.app",
    url: "https://thermal-energy-international.vercel.app/",
    badge: "Industrial B2B",
    icon: "⚡",
    accentGradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "KMBCH",
    category: "Interactive 3D Artisanal Sparkling Beverage",
    domain: "nilendrapatel1317.github.io/KMBCH-Bottle",
    url: "https://nilendrapatel1317.github.io/KMBCH-Bottle/",
    badge: "Interactive 3D",
    icon: "🍾",
    accentGradient: "from-emerald-500/20 to-teal-500/10",
  },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Trusted client partners"
      className="py-16 border-y border-slate-800/80 bg-[#080D1A] text-white relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
              Selected Client Partners
            </span>
            <h2 className="text-xl md:text-3xl font-bold font-heading text-white">
              Engineering high-velocity platforms for real-world leaders
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              From artisanal commerce to heavy industrial engineering portals and 3D experiences.
            </p>
          </div>
        </RevealOnScroll>

        {/* Client Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENT_BRANDS.map((brand, idx) => (
            <RevealOnScroll key={brand.name} delay={idx * 40}>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-b ${brand.accentGradient} bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all text-left h-full shadow-sm hover:shadow-lg hover:shadow-blue-500/10`}
                title={`Visit ${brand.name}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <span className="text-xl p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      {brand.icon}
                    </span>
                    <span className="text-slate-500 group-hover:text-blue-400 text-xs transition-colors">
                      ↗
                    </span>
                  </div>
                  <div className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {brand.name}
                  </div>
                  <div className="text-[11px] text-blue-400/90 font-medium mt-1">
                    {brand.badge}
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono truncate">
                  {brand.domain}
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust & Assurance Badges */}
        <RevealOnScroll delay={300}>
          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-emerald-400 text-base">🔒</span>
              <span>Strict NDA Prior to Kick-off</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-blue-400 text-base">📜</span>
              <span>100% Source Code & IP Transfer</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-purple-400 text-base">💳</span>
              <span>Milestone-Driven Escrow Payments</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-amber-400 text-base">🛡️</span>
              <span>30-Day Post-Launch Warranty</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
