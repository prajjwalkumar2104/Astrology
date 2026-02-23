import React from 'react';
import MagicZodiacCard from './magiccard';

const ZODIAC_SIGNS = [
  { name: 'Aries', date: 'APR 14 - MAY 14', constellationPath: '/vectors/aries.svg' },
  { name: 'Taurus', date: 'MAY 15 - JUN 14', constellationPath: '/vectors/taurus.svg' },
  { name: 'Gemini', date: 'JUN 15 - JUL 15', constellationPath: '/vectors/gemini.svg' },
  { name: 'Cancer', date: 'JUL 16 - AUG 16', constellationPath: '/vectors/cancer.svg' },
  { name: 'Leo', date: 'AUG 17 - SEP 16', constellationPath: '/vectors/leo.svg' },
  { name: 'Virgo', date: 'SEP 17 - OCT 16', constellationPath: '/vectors/virgo.svg' },
  { name: 'Libra', date: 'OCT 17 - NOV 15', constellationPath: '/vectors/libra.svg' },
  { name: 'Scorpio', date: 'NOV 16 - DEC 15', constellationPath: '/vectors/scorpio.svg' },
  { name: 'Sagittarius', date: 'DEC 16 - JAN 13', constellationPath: '/vectors/sagittarius.svg' },
  { name: 'Capricorn', date: 'JAN 14 - FEB 12', constellationPath: '/vectors/capricorn.svg' },
  { name: 'Aquarius', date: 'FEB 13 - MAR 13', constellationPath: '/vectors/aquarius.svg' },
  { name: 'Pisces', date: 'MAR 14 - APR 13', constellationPath: '/vectors/pisces.svg' },
];

const ZodiacCard = ({ name, date, constellationPath }) => (

  <div className="flex flex-col items-center p-6 text-white group cursor-pointer hover:bg-white/5 transition-all">
    
      {/* Constellation Container */}
    <div className="h-40 w-full flex items-center justify-center mb-4">
       {/* You can use a custom SVG here */}
       <img 
  src={constellationPath} 
  alt={name} 
  className="opacity-80 transition-all duration-300 ease-out 
             group-hover:opacity-100 
             group-hover:scale-115 
             group-hover:brightness-150
             "
  style={{ 
    // This filter converts Black to a vibrant Purple (#8a2be2 approx)
    filter: 'invert(31%) sepia(94%) saturate(4105%) hue-rotate(256deg) brightness(95%) contrast(107%)' 
  }} 
/>


    </div>

    {/* Progress Line */}
    {/* <div className="w-full h-2px bg-gray-700 relative mb-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[3px] border-y-transparent border-l-[6px] border-l-gray-700" />
    </div> */}

    {/* Text Labels */}
    <h3 className="text-2xl font-serif mb-1 tracking-wide">{name}</h3>
    <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{date}</p>
  </div>
);

export default function ZodiacGallery() {
  return (
    <div className="relative min-h-screen p-10">
      {/* <img 
        src="/galaxy.jpg" 
        alt="Galaxy Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-50"
      /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12">
        {ZODIAC_SIGNS.map((sign) => (
          <ZodiacCard key={sign.name} {...sign} />
        ))}
      </div>
    </div>
  );
}