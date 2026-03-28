"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles, ArrowRight, Loader2, User } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/login"); // Move to login on success
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0920] font-serif">
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-purple-400/40 mb-5 bg-purple-950/20">
            <Sparkles className="text-purple-300 w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Join Drishya</h1>
        </div>

        {error && <div className="mb-4 text-red-400 text-center text-sm">{error}</div>}

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white outline-none focus:border-purple-500/50"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white outline-none focus:border-purple-500/50"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            required
            placeholder="Create Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white outline-none focus:border-purple-500/50"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 bg-purple-600/20 border border-purple-500/30 rounded-xl text-white font-bold hover:bg-purple-600/40 transition-all"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-purple-200/40">
          Already have an account? <Link href="/login" className="text-purple-300">Login</Link>
        </p>
      </div>
    </div>
  );
}