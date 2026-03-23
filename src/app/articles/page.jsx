import Link from "next/link";
import { getArticleById, articles } from "@/data/articledata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* --- MATCHING THE HOME PAGE GLOW --- */}
      <div className="absolute top-0 right-0 w-[80%] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <Navbar />

      <div className="container mx-auto px-10 pb-20 pt-28 relative z-10">
        {/* --- HEADER STYLE MATCHED TO HOME --- */}
        <div className="mb-20 text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tight">
            Vedic Astrology <br /> Articles
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-8 mb-6" /> {/* Divider line like your Astro-Philosophy section */}
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Expand your cosmic knowledge with in-depth articles.
          </p>
        </div>

        {/* --- ARTICLE GRID --- */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id}>
              <Link
                href={`/articles/${article.id}`}
                className="group block h-full transition-all duration-500"
              >
                {/* --- CARD DESIGN --- */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full transition-all duration-500 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:-translate-y-2">
                  
                  {/* Category: Uppercase tracking widest like your DOB label */}
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-4">
                    {article.category}
                  </span>

                  {/* Title: Serif like your Hero text */}
                  <h2 className="text-2xl font-serif text-white mb-4 leading-snug group-hover:text-purple-200 transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt: Font-light like your reading box */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3 mb-8">
                    {article.excerpt}
                  </p>

                  {/* Metadata: Styled like the label text */}
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-auto border-t border-white/5 pt-6">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-purple-900 rounded-full" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}