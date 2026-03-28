import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drishya: AI-Powered Vedic Astrology Portal",
  description: "Drishya is a modern, immersive web application that blends ancient Vedic wisdom with cutting-edge Artificial Intelligence. Built with Next.js 14, it offers users personalized cosmic insights, dynamic zodiac exploration, and a deep-space editorial experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <AuthProvider>
          {children}
        </AuthProvider>
        
      </body>
    </html>
  );
}
