"use client";

import { useState } from "react";
import { zodiacSigns } from "../../data/zodiacdata";
import { dailyHoroscopes, weeklyHoroscopes, monthlyHoroscopes } from "../../data/horoscopedata";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const tabs = ["Daily", "Weekly", "Monthly"];

const getHoroscopes = (tab) => {
  switch (tab) {
    case "Daily": return dailyHoroscopes;
    case "Weekly": return weeklyHoroscopes;
    case "Monthly": return monthlyHoroscopes;
    default: return dailyHoroscopes;
  }
};

const HoroscopePage = () => {
  const [activeTab, setActiveTab] = useState("Daily");
  const [selectedSign, setSelectedSign] = useState(null);

  const horoscopes = getHoroscopes(activeTab);
  const selected = selectedSign ? horoscopes.find((h) => h.sign === selectedSign) : null;

  return (
    <div className="min-h-screen bg-mystic-gradient relative overflow-hidden">
      <Navbar />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 pb-20 pt-20 relative z-10">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-gradient-mystic md:text-5xl drop-shadow-sm">
            Forecast
          </h1>
          <p className="mt-2 font-serif-body text-lg text-white/70">
            Vedic predictions for your Rashi
          </p>
        </div>

        {/* Tabs - Increased Height with py-4 */}
        <div className="mx-auto mb-10 flex max-w-md justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedSign(null); }}
              className={`flex-1 rounded-lg px-4 py-4 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sign selector - Exactly 6 per line with increased button height */}
        <div className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-6">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.id}
              onClick={() => setSelectedSign(sign.name)}
              /* Added py-6 to increase the height of the sign buttons */
              className={`flex flex-col items-center justify-center rounded-xl border py-6 px-2 text-center transition-all duration-300 ${
                selectedSign === sign.name
                  ? "border-amber-500 bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <span className="text-3xl filter drop-shadow-sm mb-2">{sign.symbol}</span>
              <span className="text-[10px] uppercase tracking-tighter font-bold text-white/80">{sign.name}</span>
            </button>
          ))}
        </div>

        {/* Horoscope content */}
        {selected ? (
          <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 text-center">
              <span className="text-6xl block mb-2">{zodiacSigns.find(z => z.name === selectedSign)?.symbol}</span>
              <h2 className="font-heading text-2xl font-bold text-white">
                {selectedSign} — {activeTab} Forecast
              </h2>
              <div className="h-0.5 w-16 bg-amber-500/50 mx-auto mt-2 rounded-full" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 mb-6">
              <p className="font-serif-body text-lg leading-relaxed text-white/90">{selected.overall}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "❤️ Love", text: selected.love },
                { label: "💼 Career", text: selected.career },
                { label: "🏥 Health", text: selected.health },
                { label: "💰 Finance", text: selected.finance },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                  <h3 className="mb-2 font-heading text-xs font-bold text-amber-500 uppercase tracking-widest">{item.label}</h3>
                  <p className="font-serif-body text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="font-serif-body text-lg text-white/40 italic">
              Select your rashi above to reveal the cosmic alignment for {activeTab.toLowerCase()}...
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HoroscopePage;