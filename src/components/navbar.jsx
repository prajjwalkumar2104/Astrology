"use client"; // Required for useSession

import Link from "next/link";
import { Twitter, Instagram, Youtube, User, Sparkles, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react"; // 1. Import hooks

export default function Navbar() {
  const { data: session, status } = useSession(); // 2. Get session data

  const navlinks = [
    { label: "Home", path: "/" },
    { label: "AI Reading", path: "/ai_reading" },
    { label: "Zodiac Signs", path: "/zodiac-signs" },
    { label: "Horoscope", path: "/horoscope" },
    { label: "Articles", path: "/articles" },
    { label: "Gemstones", path: "/gemstones" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-6 text-white relative z-50 overflow-hidden bg-gradient-to-b from-[#050112] to-transparent">
      
      {/* --- 1. THE GRADIENT CELESTIAL LOGO --- */}
      <Link href="/" className="flex items-center gap-4 group">
        <div className="w-10 h-10 rounded-full border border-purple-400/40 flex items-center justify-center bg-purple-950/30 relative transition-all duration-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <Sparkles className="w-6 h-6 text-purple-300" />
        </div>
        <span className="text-3xl font-serif font-bold tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
          DRISHYA
        </span>
      </Link>

      {/* --- 2. NAV LINKS & SOCIALS --- */}
      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-6 font-serif text-lg">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="hover:text-purple-400 transition-all duration-300 tracking-wide relative group/link"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex gap-5 border-l border-white/10 pl-8">
          <Link href="https://twitter.com" target="_blank"><Twitter className="w-5 h-5 hover:text-amber-400 transition-colors" /></Link>
          <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5 hover:text-amber-400 transition-colors" /></Link>
          <Link href="https://youtube.com" target="_blank"><Youtube className="w-5 h-5 hover:text-amber-400 transition-colors" /></Link>
        </div>

        {/* --- 3. DYNAMIC AUTH BUTTON --- */}
        {status === "authenticated" ? (
          <button 
            onClick={() => signOut()} // 3. Log out function
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-sm hover:bg-red-600/20 hover:border-red-400 transition-all group"
          >
            <LogOut className="w-4 h-4 text-red-300 group-hover:text-white" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-100">Logout</span>
          </button>
        ) : (
          <Link 
            href="/login" // 4. Connects to your custom login page
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-600 hover:border-purple-400 transition-all group shadow-[0_0_20px_rgba(168,85,247,0.1)]"
          >
            <User className="w-4 h-4 text-purple-300 group-hover:text-white" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-100">Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
}