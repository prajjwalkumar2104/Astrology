import Link from "next/link";
import { ArrowLeft, Star, Sparkles, Moon, Sun } from "lucide-react"; // Added icons for flair
import { getZodiacBySlug, zodiacSigns } from "../../../data/zodiacdata";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const ZodiacDetail = async ({ params }) => {
  const { id } = await params; 
  const sign = getZodiacBySlug(id || "");

  if (!sign) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0c] text-white">
        <p className="animate-pulse">Searching the stars... Zodiac sign not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mystic-gradient relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 blur-[120px] pointer-events-none" />

      <Navbar />
      
      <div className="container mx-auto px-4 pb-20 pt-32 relative z-10">
        {/* Back Button with Hover Effect */}
        <Link 
          href="/zodiac-signs" 
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-amber-400 transition-all group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to celestial map</span>
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="relative inline-block">
               <span className="text-8xl block mb-4 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float">
                {sign.symbol}
              </span>
              <Sparkles className="absolute -top-2 -right-6 h-6 w-6 text-amber-400 animate-pulse" />
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-mystic mb-2 drop-shadow-sm">
              {sign.name}
            </h1>
            <p className="font-serif-body text-2xl text-amber-500/90 italic mb-4">
              {sign.nameHindi} Rashi
            </p>
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm tracking-widest uppercase">
              {sign.dateRange}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left Column: Description & Traits */}
            <div className="lg:col-span-2 space-y-10">
              <section className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="font-serif-body text-xl leading-relaxed text-white/90 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-amber-500">
                  {sign.description}
                </p>
              </section>

              <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-semibold text-amber-400 uppercase tracking-wider">
                  <Star className="h-5 w-5" /> Personality Essence
                </h3>
                <div className="flex flex-wrap gap-3">
                  {sign.traits.map((t) => (
                    <span key={t} className="px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm font-medium hover:bg-amber-500/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Quick Stats & Compatibility */}
            <div className="space-y-8">
              {/* Quick Info Card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 backdrop-blur-md">
                <h3 className="mb-6 font-heading text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
                   <Sun className="h-5 w-5 text-amber-500" /> Attributes
                </h3>
                <div className="space-y-4 font-serif-body">
                  {[
                    { label: "Element", val: sign.element, icon: "✨" },
                    { label: "Ruling Planet", val: sign.rulingPlanet, icon: "🪐" },
                    { label: "Lucky Number", val: sign.luckyNumber, icon: "🔢" },
                    { label: "Lucky Color", val: sign.luckyColor, icon: "🎨" },
                    { label: "Lucky Day", val: sign.luckyDay, icon: "📅" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-white/40 text-sm">{item.label}</span>
                      <span className="text-white font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatibility Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="mb-6 font-heading text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Moon className="h-5 w-5 text-purple-400" /> Soul Matches
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {sign.compatibility.map((c) => {
                    const match = zodiacSigns.find(z => z.name === c);
                    return (
                      <Link
                        key={c}
                        href={`/zodiac/${match?.id}`}
                        className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{match?.symbol}</span>
                        <span className="text-xs text-white/60 group-hover:text-white">{c}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Strengths & Weaknesses Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
              <h3 className="mb-6 font-heading text-xl font-semibold text-emerald-400">Celestial Strengths</h3>
              <ul className="space-y-4">
                {sign.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-white/80">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 backdrop-blur-sm">
              <h3 className="mb-6 font-heading text-xl font-semibold text-rose-400">Cosmic Challenges</h3>
              <ul className="space-y-4">
                {sign.weaknesses.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-white/80">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ZodiacDetail;