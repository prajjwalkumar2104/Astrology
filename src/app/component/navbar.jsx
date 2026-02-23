import Link from "next/link";
import { Twitter , Instagram , Youtube } from "lucide-react";

export default function Navbar() {
  // 1. Array items must be strings
  const navlinks = ["Home", "Pages", "Forecast", "Blog", "Shop"];

  return (
    // 'flex' and 'justify-end' is a better way to align right in Tailwind
    <nav className="flex justify-end gap-12 p-6 text-xl font-serif text-white">
      {/* 2. Wrap the map in curly braces */}
      {navlinks.map((link) => (
        <Link 
          key={link} 
          href={`/${link.toLowerCase()}`} 
          className="hover:text-amber-500 transition-colors"
        >
          {link}
        </Link>
      ))}
      
        <Twitter      className="hover:text-amber-500 transition-colors"/>
      <Instagram  className="hover:text-amber-500 transition-colors"/>
      <Youtube  className="hover:text-amber-500 transition-colors"/>
      
      
    </nav>
  );
}