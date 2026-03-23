import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Zodiac Signs", path: "/zodiac" },
      { label: "Horoscope", path: "/horoscope" },
      { label: "AI Reading", path: "/ai-reading" },
      { label: "Gemstones", path: "/gemstones" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Articles", path: "/articles" },
      { label: "Nakshatras", path: "/articles" },
      { label: "Vedic Remedies", path: "/gemstones" },
      { label: "Birth Chart", path: "/ai-reading" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "About Us", path: "/" },
      { label: "Contact", path: "/" },
      { label: "Privacy Policy", path: "/" },
      { label: "Terms of Service", path: "/" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-mystic-deep">
      <div className="container mx-auto px-4 py-12">
        {/* Changed to grid-cols-3 and added max-w-4xl with mx-auto to center the whole block */}
        <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-3">
          
          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Drishya. All rights reserved. Guided by the stars. 🔮
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer