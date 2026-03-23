import React from 'react';

const ZODIAC_SIGNS = [
  { name: 'Aries', hindiName: 'Mesha', date: 'APR 14 - MAY 14', constellationPath: '/vectors/aries.svg' },
  { name: 'Taurus', hindiName: 'Vrishabha', date: 'MAY 15 - JUN 14', constellationPath: '/vectors/taurus.svg' },
  { name: 'Gemini', hindiName: 'Mithuna', date: 'JUN 15 - JUL 15', constellationPath: '/vectors/gemini.svg' },
  { name: 'Cancer', hindiName: 'Karka', date: 'JUL 16 - AUG 16', constellationPath: '/vectors/cancer.svg' },
  { name: 'Leo', hindiName: 'Simha', date: 'AUG 17 - SEP 16', constellationPath: '/vectors/leo.svg' },
  { name: 'Virgo', hindiName: 'Kanya', date: 'SEP 17 - OCT 16', constellationPath: '/vectors/virgo.svg' },
  { name: 'Libra', hindiName: 'Tula', date: 'OCT 17 - NOV 15', constellationPath: '/vectors/libra.svg' },
  { name: 'Scorpio', hindiName: 'Vrishchika', date: 'NOV 16 - DEC 15', constellationPath: '/vectors/scorpio.svg' },
  { name: 'Sagittarius', hindiName: 'Dhanu', date: 'DEC 16 - JAN 13', constellationPath: '/vectors/sagittarius.svg' },
  { name: 'Capricorn', hindiName: 'Makara', date: 'JAN 14 - FEB 12', constellationPath: '/vectors/capricorn.svg' },
  { name: 'Aquarius', hindiName: 'Kumbha', date: 'FEB 13 - MAR 13', constellationPath: '/vectors/aquarius.svg' },
  { name: 'Pisces', hindiName: 'Meena', date: 'MAR 14 - APR 13', constellationPath: '/vectors/pisces.svg' },
];
const ZodiacCard = ({ name, hindiName, date, constellationPath }) => (
  <div className="flex flex-col items-center p-6 text-white group cursor-pointer transition-all duration-500 rounded-2xl hover:bg-white/[0.03]">
    {/* Constellation Container */}
    <div className="h-32 w-full flex items-center justify-center mb-6">
      <img 
        src={constellationPath} 
        alt={name} 
        className="h-full w-auto opacity-60 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        style={{ 
          filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%) opacity(0.8)' 
        }} 
      />
    </div>

    {/* Text Labels */}
    <div className="text-center">
      <h3 className="text-xl font-serif mb-1 tracking-wide group-hover:text-purple-300 transition-colors">
        {name}
      </h3>
      
      {/* Hindi Name Label */}
      <p className="text-[11px] font-serif italic text-purple-400/60 tracking-widest lowercase mb-2">
        ({hindiName})
      </p>

      <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase group-hover:text-gray-400">
        {date}
      </p>
    </div>
  </div>
);

export default function ZodiacGallery() {
  return (
    /* Change 'bg-[#050112]' or 'bg-mystic-gradient' to 'bg-transparent' */
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* THE HEADER: Using your new gradient style */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
            THE 12 RASHIS
          </h2>
          <p className="text-lg md:text-xl font-serif italic text-gray-400 tracking-wide max-w-2xl mx-auto">
            Discover your Vedic zodiac sign and unlock celestial wisdom
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-10 opacity-30" />
        </div>

        {/* ZODIAC GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16">
          {ZODIAC_SIGNS.map((sign) => (
            <ZodiacCard key={sign.name} {...sign} />
          ))}
        </div>
      </div>
    </section>
  );
}