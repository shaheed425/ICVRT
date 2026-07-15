import React from 'react';

export default function Partners() {
  // Array of corporate placeholder SVG logos for a premium, award-winning look
  const corporateLogos = [
    { name: 'Aramco', text: 'ARAMCO SAFETY' },
    { name: 'Adnoc', text: 'ADNOC HSE' },
    { name: 'BritishPetroleum', text: 'BP TECHNICAL' },
    { name: 'Shell', text: 'SHELL GLOBAL' },
    { name: 'Chevron', text: 'CHEVRON OHS' },
    { name: 'Petronas', text: 'PETRONAS SAFETY' },
    { name: 'ExxonMobil', text: 'EXXON HSE' },
    { name: 'TataSteel', text: 'TATA INDUSTRIAL' },
  ];

  return (
    <section className="py-16 bg-white border-y border-navy-100/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-navy-400">
          Our Graduates Work With Leading Multinational Brands
        </span>
      </div>

      {/* Marquee Track Container */}
      <div className="flex select-none overflow-hidden gap-12 relative w-full">
        {/* Shadow Masks at the edges to fade out the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="flex shrink-0 min-w-full items-center justify-around gap-12 animate-marquee">
          {corporateLogos.concat(corporateLogos).map((logo, index) => (
            <div
              key={`r1-${index}`}
              className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            >
              {/* Luxury Monogram */}
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-display font-extrabold text-xs">
                  {logo.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-primary uppercase">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
