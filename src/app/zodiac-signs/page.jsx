import Link from "next/link";
import { zodiacSigns } from "../../data/zodiacdata"; 
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const ZodiacList = () => {
  return (
    <div className="min-h-screen bg-mystic-gradient relative overflow-hidden">
      {/* Background Nebula Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 pb-20 pt-28 relative z-10">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-bold text-gradient-mystic md:text-6xl drop-shadow-sm">
            The 12 Rashis
          </h1>
          <div className="h-1 w-20 bg-amber-500/50 mx-auto mt-4 rounded-full" />
          <p className="mt-6 font-serif-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ancient Vedic wisdom translated through the movements of the stars. 
            Discover your path and purpose.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {zodiacSigns.map((sign) => (
            <div 
              key={sign.id} 
              className="group relative"
            >
              {/* Animated Glow Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
              
              <Link
                href={`/zodiac/${sign.id}`}
                className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-center gap-6">
                  <span className="text-6xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transform group-hover:scale-110 transition-transform duration-500">
                    {sign.symbol}
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {sign.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
                      {sign.nameHindi}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <p className="text-sm font-medium text-white/60 tracking-wide">
                    {sign.dateRange}
                  </p>
                  <p className="text-[10px] uppercase tracking-tighter text-purple-400 font-bold">
                    {sign.element} Element • {sign.rulingPlanet}
                  </p>
                </div>

                <p className="mt-4 font-serif-body text-sm leading-relaxed text-white/70 line-clamp-3 italic">
                  "{sign.description}"
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {sign.traits.map((t) => (
                    <span 
                      key={t} 
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/80 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ZodiacList;