// src/middleware.js
export { default } from "next-auth/middleware";

// 1. Define which routes to protect
export const config = { 
  matcher: [
    // "/ai_reading/:path*", 
    "/gemstones/:path*",
    "/profile/:path*",
    // "/horoscope/:path*" 
  ] 
};