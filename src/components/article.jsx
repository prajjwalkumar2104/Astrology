import React from 'react';

const ARTICLES = [
   {
    title: "Uranus in All Medium Houses",
    date: "NOVEMBER 10, 2026",
    category: "ASTRO STORIES",
    excerpt: "With natal Uranus in the 12th house, the native will eventually develop a rather unique approach to spirituality and...",
    image: "/article3.jpg",
  },
  {
    title: "Moon in 5th House Feels Venus",
    date: "NOVEMBER 12, 2026",
    category: "MOON • TIME",
    excerpt: "Having your Moon in the house of love, recreation and children is quite a good natal placement. The house is traditional...",
    image: "/article1.jpg",
  },
  {
    title: "Moon Trine Mars Natal And Transit",
    date: "NOVEMBER 11, 2026",
    category: "TIME • TRANSITS",
    excerpt: "Moon trine Mars in the natal chart means you have very strong feelings and don't hide them from anyone. You react to othe...",
    image: "/article2.jpg",
  },
  {
    title: "Understanding Your Rising Sign (Lagna)",
    date: "FEBRUARY 15, 2026",
    category: "BASICS • VEDIC",
    excerpt: "Your Rising sign is the mask you wear for the world. In Indian astrology, the $Lagna$ is often more critical than your Sun sign for predicting life events...",
    image: "/article4.jpg",
  },
  {
    title: "Saturn Returns: The Great Teacher",
    date: "JANUARY 28, 2026",
    category: "TRANSITS • KARMA",
    excerpt: "Every 29 years, Saturn returns to the position it held at your birth. This is a time of immense pressure, but also unparalleled soul growth...",
    image: "/article5.jpg",
  },
{
  title: "The Mystery of Rahu and Ketu",
  date: "FEBRUARY 18, 2026",
  category: "KARMA • SHADOWS",
  excerpt: "The lunar nodes, known as Rahu and Ketu in Vedic astrology, are not physical planets but mathematical points where the Moon's path crosses the ecliptic. These shadow planets represent our karmic past and the obsession of our soul's future...",
  image: "/article4.jpg", // Ensure you have a relevant image in your public folder
}
 
];

const ArticleCard = ({ title, date, category, excerpt, image }) => (
  <div className="flex flex-col group cursor-pointer">
    {/* Image Container */}
    <div className="overflow-hidden mb-6 aspect-square">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
    </div>

    {/* Metadata */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{date}</span>
      <span className="text-purple-500 text-[10px]">•</span>
      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{category}</span>
    </div>

    {/* Content */}
    <h3 className="text-white text-2xl font-serif mb-4 leading-tight group-hover:text-purple-300 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
      {excerpt}
    </p>
  </div>
);

export default function LatestArticles() {
  return (
    <section className=" py-20 px-10">
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl font-serif text-center mb-16">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {ARTICLES.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

