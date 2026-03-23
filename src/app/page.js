"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import ViewMore from "../components/button";
import OurServices from "../components/services";
import { CarouselSize } from "../components/carousal";
import ZodiacGallery from "../components/zodiac";
import LatestArticles from "../components/article";
import Footer from "../components/footer";

export default function Home() {
  const [reading, setReading] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    /* Removed 'bg' classes here so globals.css background shows through */
    /* Added overflow-x-hidden to prevent horizontal scrolling from glows */
    <main className="relative min-h-screen overflow-x-hidden">
      
      {/* THE STELLARIUM GLOW: Moved to the top-level main. 
        It now sits behind EVERYTHING and blends with your 
        plum globals.css background perfectly. 
      */}
      <div className="absolute top-0 right-0 w-[80%] h-[1000px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Removed 'overflow-hidden' and 'w-full' from this inner div */}
      <section className="relative pt-24 pb-32 z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-left text-white text-5xl md:text-8xl mt-24 w-full md:w-3/5">
            <h1 className="font-serif leading-[1.1] tracking-tight">
              Start The Journey of <br/> 
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Self-Discovery
              </span>
            </h1>
          </div>
          <div className="mt-12">
            <ViewMore />
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      {/* All these components are already 'bg-transparent', so they will now 
          show the globals.css gradient behind them. */}
      <div className="relative z-10 flex flex-col gap-32">
        <ZodiacGallery />
        <LatestArticles />
        <OurServices />
        <CarouselSize />
        <Footer />
      </div>

    </main>
  );
}