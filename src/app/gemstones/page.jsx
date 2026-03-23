import { gemstones } from "../../data/gemstonesdata";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Gem } from "lucide-react";

const GemstonesPage = () => {
  return (
    <div className="min-h-screen bg-mystic-gradient relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 blur-[120px] pointer-events-none" />

      <Navbar />
      
      <div className="container mx-auto px-4 pb-20 pt-28 relative z-10">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-bold text-gradient-mystic md:text-6xl drop-shadow-sm">
            Vedic Gemstones
          </h1>
          <p className="mt-4 font-serif-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Harness planetary energies through sacred stones carefully selected to balance your celestial alignment.
          </p>
        </div>

        {/* Gemstones Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gemstones.map((gem) => (
            <div
              key={gem.id}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-3 hover:border-amber-500/30 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.4)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Gem className="h-7 w-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {gem.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-500/80 italic">({gem.nameHindi})</p>
                </div>
              </div>

              <p className="mb-6 font-serif-body text-sm text-white/60 leading-relaxed min-h-[60px]">
                {gem.description}
              </p>

              {/* Technical Details */}
              <div className="space-y-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-tighter font-bold">Planet</span>
                  <span className="text-white font-medium">{gem.planet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-tighter font-bold">Color</span>
                  <span className="text-white font-medium">{gem.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-tighter font-bold">Signs</span>
                  <span className="text-amber-500/90 font-semibold">{gem.zodiacSigns.join(", ")}</span>
                </div>
              </div>

              {/* Ritual Guide */}
              <div className="mt-8 space-y-4 rounded-xl bg-black/20 p-5 border border-white/5">
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-500 tracking-widest block mb-1">Wear Guide</span>
                  <p className="text-xs text-white/70 leading-snug">{gem.howToWear}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-500 tracking-widest block mb-1">Planetary Mantra</span>
                  <p className="text-xs text-white/90 italic font-serif">"{gem.mantra}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vedic Remedies Section */}
        <div className="mt-32">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gradient-mystic md:text-4xl">
              Vedic Remedies (Upayas)
            </h2>
            <div className="h-1 w-20 bg-amber-500/50 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Surya Namaskar", desc: "Practice 12 rounds of Sun Salutation at dawn to strengthen leadership and vitality.", planet: "Sun" },
              { title: "Chandra Dhyana", desc: "Meditate under moonlight on Monday nights to calm the mind and soothe emotions.", planet: "Moon" },
              { title: "Hanuman Chalisa", desc: "Recite on Tuesdays for courage and protection from malefic Mars influences.", planet: "Mars" },
              { title: "Vishnu Sahasranama", desc: "Chant on Thursdays to invoke Jupiter's grace for wisdom and abundance.", planet: "Jupiter" },
              { title: "Shani Stotram", desc: "Offer mustard oil lamps on Saturdays to balance the karmic energy of Saturn.", planet: "Saturn" },
              { title: "Gayatri Mantra", desc: "The universal light-mantra for total planetary harmony and spiritual clarity.", planet: "Universal" },
            ].map((remedy) => (
              <div
                key={remedy.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">
                    {remedy.title}
                  </h3>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-500">
                    {remedy.planet}
                  </span>
                </div>
                <p className="font-serif-body text-sm leading-relaxed text-white/60">
                  {remedy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GemstonesPage;