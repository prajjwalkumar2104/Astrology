import React from 'react';

const MagicZodiacCard = ({ name, date, constellationPath, iconPath }) => {
  return (
    <div className="group relative w-full max-w-300px h-400px overflow-hidden rounded-2xl cursor-pointer bg-black border border-white/10 shadow-2xl">
      
      {/* LAYER 1: The Deep Galaxy Background */}
      <img 
        src="/galaxy.jpg" 
        alt="galaxy"
        className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 -z-30"
      />

      {/* LAYER 2: The Color Gradient Overlay (Blending) */}
      {/* This uses 'mix-blend-overlay' to make the galaxy colors pop */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40 mix-blend-overlay -z-20" />

      {/* LAYER 3: Animated Glow Effect */}
      {/* This div becomes visible and "glows" on hover */}
      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 -z-10" />

      {/* LAYER 4: The Content (Foreground) */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 text-center">
        
        {/* Top: The Constellation */}
        <div className="relative w-full h-32 flex items-center justify-center">
          <img 
            src={constellationPath} 
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            style={{ filter: 'invert(1) brightness(2)' }} // Turns black SVG to glowing white
          />
        </div>

        {/* Middle: The Main Icon */}
        <div className="bg-white/5 backdrop-blur-md rounded-full p-4 border border-white/10 group-hover:border-purple-500/50 transition-colors">
          <img src={iconPath} alt={name} className="w-12 h-12 object-contain" />
        </div>

        {/* Bottom: Text Labels */}
        <div className="space-y-1">
          <h3 className="text-3xl font-serif text-white tracking-widest uppercase group-hover:text-purple-300 transition-colors">
            {name}
          </h3>
          <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
            {date}
          </p>
        </div>
      </div>

      {/* Finishing Touch: Reflective Light Streak */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
    </div>
  );
};

export default MagicZodiacCard;