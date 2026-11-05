"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface ClientBrand {
  name: string;
  category: string;
  domain: string;
  url: string;
  badge: string;
}

const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: "Devavo Foods",
    category: "Gourmet Food & Artisanal Spices",
    domain: "devavofoods.com",
    url: "https://devavofoods.com/",
    badge: "E-Commerce",
  },
  {
    name: "Bunavat",
    category: "Authentic Handloom Sarees & Ethical Textiles",
    domain: "bunavat.com",
    url: "https://bunavat.com/",
    badge: "Artisan Commerce",
  },
  {
    name: "Full Moon Holidays",
    category: "Himalayan Adventure Travel & Treks",
    domain: "fullmoonholidays.com",
    url: "https://www.fullmoonholidays.com/",
    badge: "Booking Platform",
  },
  {
    name: "Armaan Ethnic Wear",
    category: "Luxury Traditional Wedding & Festive Wear",
    domain: "armaanethnic.com",
    url: "https://www.armaanethnic.com/",
    badge: "Luxury Flagship",
  },
  {
    name: "Thermal Energy International",
    category: "Heavy Industrial BTG Spares & Boiler Auxiliaries",
    domain: "thermal-energy-international.vercel.app",
    url: "https://thermal-energy-international.vercel.app/",
    badge: "Industrial Portal",
  },
  {
    name: "KMBCH",
    category: "Interactive 3D Artisanal Sparkling Beverage",
    domain: "nilendrapatel1317.github.io/KMBCH-Bottle",
    url: "https://nilendrapatel1317.github.io/KMBCH-Bottle/",
    badge: "Interactive 3D",
  },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Trusted client partners"
      className="py-14 border-y border-[var(--color-border)] bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              Trusted Engineering Partner
            </p>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-white">
              Proud to architect digital products for growing brands & enterprises
            </h2>
          </div>
        </RevealOnScroll>

        {/* Client Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENT_BRANDS.map((brand, idx) => (
            <RevealOnScroll key={brand.name} delay={idx * 50}>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-left h-full"
                title={`Visit ${brand.name}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {brand.badge}
                    </span>
                    <span className="text-slate-500 group-hover:text-blue-400 text-xs transition-colors">
                      ↗
                    </span>
                  </div>
                  <div className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                    {brand.name}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/50 text-[11px] text-slate-400 truncate">
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
