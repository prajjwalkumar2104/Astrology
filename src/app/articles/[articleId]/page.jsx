import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleById } from "@/data/articledata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default async function ArticleDetail({ params }) {
  const { articleId } = await params; 
  const article = getArticleById(articleId);
  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050112] text-white">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* ADD THIS: The soft purple glow from the Home page */}
      <div className="absolute top-0 right-0 w-[70%] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <Navbar />
      <div className="container mx-auto px-4 pb-20 pt-28">
        <Link 
          href="/articles" 
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Articles
        </Link>

        <article className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl font-serif leading-tight">
            {article.title}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Whitespace-pre-line preserves the line breaks from your data strings */}
          <div className="mt-8 text-lg leading-relaxed text-gray-300 whitespace-pre-line font-light">
            {article.content}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}