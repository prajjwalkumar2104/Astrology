import Link from "next/link";

export default function ViewMore() {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-start gap-6 mt-12">
      {/* 1. Link to Zodiac Signs */}
      <Link href="/zodiac-signs" className="w-full sm:w-auto">
        <button className="w-full text-left font-serif text-2xl tracking-[0.2em] text-white px-10 py-5 border border-white/20 rounded-sm transition-all duration-500 ease-in-out hover:bg-purple-600/10 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 active:scale-95">
          Explore Zodiac Signs
        </button>
      </Link>

      {/* 2. Link to AI Reading */}
      <Link href="/ai_reading" className="w-full sm:w-auto">
        <button className="w-full text-left font-serif text-2xl tracking-[0.2em] text-white px-10 py-5 border border-white/20 rounded-sm transition-all duration-500 ease-in-out hover:bg-purple-600/10 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 active:scale-95">
          Get AI Reading
        </button>
      </Link>
    </div>
  );
}