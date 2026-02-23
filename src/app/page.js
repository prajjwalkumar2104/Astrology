"use client";
import { useState } from "react";
import Navbar from "./component/navbar";
import ViewMore from "./component/button";
import OurServices from "./component/services";
import { CarouselSize } from "./component/carousal";
import ZodiacGallery from "./component/zodiac";
import LatestArticles from "./component/article";

export default function Home() {
  const [dob, setDob] = useState("");
  const [reading, setReading] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setReading("");

    try {
      const response = await fetch("/api/backend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob }),
      });

      if (!response.ok) throw new Error("Connection failed");

      const data = await response.json();
      setReading(data.output);
    } catch (error) {
      setReading("The cosmos is silent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      
      {/* --- HERO & FORM SECTION --- */}
      <div className="relative w-full overflow-hidden pb-20">
        
        {/* THE STELLARIUM GLOW: A soft radial light in the top right */}
        <div className="absolute top-0 right-0 w-[80%] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
        
        <Navbar />

        {/* HERO TEXT: Left Aligned */}
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-left text-white text-5xl md:text-7xl mt-24 w-full md:w-3/5">
            <h1 className="font-serif leading-tight tracking-tight">
              Start The Journey of <br/> Self-Discovery
            </h1>
          </div>
          <div className="mt-8">
            <ViewMore />
          </div>
        </div>

        {/* AI FORM: Centered horizontally using mx-auto */}
        <div className="mx-auto mt-20 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-md relative z-10 transition-all duration-500 hover:border-purple-500/30">
          <h2 className="text-2xl mb-6 font-serif text-purple-200 text-center">Consult the Stars</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-400">Date of Birth</label>
              <input 
                type="date" 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="bg-black/40 border border-white/20 p-3 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-purple-700 hover:bg-purple-600 disabled:bg-gray-800 p-4 rounded-full transition-all font-bold uppercase tracking-widest text-sm shadow-lg shadow-purple-900/20"
            >
              {loading ? "Aligning Planets..." : "Get My Reading"}
            </button>
          </form>

          {/* AI OUTPUT BOX */}
          {reading && (
            <div className="mt-8 p-5 bg-purple-950/40 border border-purple-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-700">
              <p className="text-sm leading-relaxed text-purple-100 italic">"{reading}"</p>
            </div>
          )}
        </div>
      </div>

      {/* --- REST OF THE COMPONENTS --- */}
      <div className="relative z-10">
        <ZodiacGallery />
        <LatestArticles />
        <OurServices />
        <CarouselSize />
      </div>

    </main>
  );
}