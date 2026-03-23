"use client"
import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const AIReadingPage = () => {
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [question, setQuestion] = useState("");
  
  // Logic from Home page
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
        body: JSON.stringify({ dob, birthTime, birthPlace, question }),
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
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[80%] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      
      <Navbar />

      <div className="container mx-auto px-10 pb-20 pt-28 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <Sparkles className="mx-auto mb-6 h-12 w-12 text-purple-400" />
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight tracking-tight">
            AI Vedic Astrology <br /> Reading
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-8 mb-6" />
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Enter your birth details and ask any question — our AI will provide a personalized
            Vedic astrology reading based on ancient wisdom.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl transition-all duration-500 hover:border-purple-500/30">
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Date of Birth *</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="bg-black/40 border border-white/20 p-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Time of Birth</label>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="bg-black/40 border border-white/20 p-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Place of Birth</label>
              <input
                type="text"
                placeholder="e.g., Delhi, India"
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                className="bg-black/40 border border-white/20 p-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Your Question *</label>
              <textarea
                placeholder="Ask about career, love, health, marriage..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                className="bg-black/40 border border-white/20 p-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || !dob || !question}
              className="mt-8 w-full bg-purple-700 hover:bg-purple-600 disabled:bg-gray-800 disabled:text-gray-500 py-5 rounded-full transition-all font-bold uppercase tracking-[0.2em] text-sm shadow-lg shadow-purple-900/20 flex items-center justify-center gap-3 group"
            >
              <Send className={`h-4 w-4 ${loading ? 'animate-ping' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
              {loading ? "Aligning Planets..." : "Get My Reading"}
            </button>
          </form>

          {/* --- AI OUTPUT BOX: Same style as Home page --- */}
          {reading && (
            <div className="mt-8 p-6 bg-purple-950/40 border border-purple-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <p className="text-base leading-relaxed text-purple-100 italic">
                "{reading}"
              </p>
            </div>
          )}

          <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            Readings are powered by cosmic alignment and artificial intelligence.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIReadingPage;