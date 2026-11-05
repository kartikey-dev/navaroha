"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Navaroha engineered our digital storefront with incredible precision. Our mobile checkout completions jumped by 48% within three weeks of launch, and the catalog transitions are lightning fast even on cellular data.",
    author: "Gourmet Operations Team",
    role: "Digital Merchandising Director",
    company: "Devavo Foods",
    sector: "Gourmet Food & E-Commerce",
    highlight: "+48% Mobile Checkout Completions",
  },
  {
    quote:
      "Working with Navaroha was the best technical decision we made. They respected our delicate handloom photography, eliminated all layout shifts, and integrated a WhatsApp styling flow that doubled our custom bridal inquiries.",
    author: "Artisan Commerce Lead",
    role: "Brand Director",
    company: "Bunavat",
    sector: "Ethical Artisan Fashion",
    highlight: "2.4x Bridal Enquiries Uplift",
  },
  {
    quote:
      "Finally an engineering team that speaks both industrial business realities and modern web architecture fluently. They migrated our 23-category equipment spares portal into Next.js without a single broken OEM specification.",
    author: "Technical Sales Head",
    role: "Director of Industrial Systems",
    company: "Thermal Energy International",
    sector: "Industrial Engineering & BTG Spares",
    highlight: "+80% Qualified RFQ Inquiries",
  },
  {
    quote:
      "The booking journey they designed for our Himalayan trekking itineraries eliminated customer confusion completely. Our booking inquiry response time dropped by 65%, and the mobile experience is flawless.",
    author: "Expedition Planning Lead",
    role: "Chief Operations Officer",
    company: "Full Moon Holidays",
    sector: "Adventure Travel & Trekking",
    highlight: "65% Faster Inquiry Turnaround",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #10B981 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              Verified Client Feedback
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
            >
              Built on trust, verified by outcomes
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Hear directly from founders and engineering leaders who have scaled their digital
              platforms with Navaroha.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <RevealOnScroll key={item.company} delay={idx * 100}>
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 md:p-10 flex flex-col justify-between h-full shadow-xl hover:border-slate-700 transition-all">
                <div>
                  {/* Rating Stars & Highlight Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <div className="flex text-amber-400 text-sm">{"★".repeat(5)}</div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-white text-sm font-heading">{item.author}</div>
                    <div className="text-xs text-slate-400">{item.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-blue-400">{item.company}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {item.sector}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
