import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Gemini API with your Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { dob } = await req.json();

    // 1. Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 2. Craft a specific prompt for the Indian Astrology system
    const prompt = `
      You are an expert Vedic Astrologer. 
      The user was born on ${dob}. 
      Based on the Indian Sidereal system, provide a concise, 3-sentence 
      reading about their personality and destiny. 
      Keep the tone mystical yet encouraging.
    `;

    // 3. Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ output: text });
  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json({ error: "Failed to consult the stars" }, { status: 500 });
  }
}