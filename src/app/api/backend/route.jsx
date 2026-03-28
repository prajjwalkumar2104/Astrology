import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    // 1. Destructure all fields sent from the frontend
    const { dob, birthTime, birthPlace, question } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 2. Build a comprehensive prompt
    const prompt = `
      You are an expert Vedic Astrologer. 
      
      User Details:
      - Date of Birth: ${dob}
      - Time of Birth: ${birthTime || "Not provided"}
      - Place of Birth: ${birthPlace || "Not provided"}
      
      The user's specific question: "${question}"

      Based on the Indian Sidereal system, provide a professional Vedic astrology reading. 
      First, address their specific question directly. 
      Then, provide a brief insight into their personality or current planetary period (Dasha).
      
      Keep the response to about 4-5 sentences in bullet points. Tone: Mystical, wise, and encouraging.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ output: text });
  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json({ error: "The stars are misaligned." }, { status: 500 });
  }
}