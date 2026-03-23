# 🌌 Drishya: AI-Powered Vedic Astrology Portal

**Drishya** is a modern, immersive web application that blends ancient Vedic wisdom with cutting-edge Artificial Intelligence. Built with **Next.js 14**, it offers users personalized cosmic insights, dynamic zodiac exploration, and a deep-space editorial experience.

---

## ✨ Features

* 🤖 **AI Cosmic Reading:** A custom backend integrated with **Google Gemini 3 Flash** that generates personalized Vedic readings based on user birth data.
* 🔮 **Expanded Sub-Pages:** A fully transitioned multi-page architecture for focused navigation across horoscopes, readings, and articles.
* 🃏 **Magic Zodiac Gallery:** Interactive cards featuring constellation paths with custom SVG filters and "pop" hover animations.
* 📰 **Editorial Suite:** A sleek, grid-based section for long-form astronomical stories and astrological insights.
* 🌌 **Immersive UI:** * Deep-space theme using hex `#050112`.
    * **Glassmorphism** effects via Tailwind CSS backdrop blurs.
    * Custom plum-to-midnight linear gradients.
* 📱 **Responsive Design:** Fully optimized for a seamless experience on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **AI Engine** | Google Generative AI (Gemini API) |
| **Components** | Radix UI & Shadcn/ui |
| **Icons/Images** | Lucide React & Custom SVG Filters |

---

## 📂 Project Structure

The project has evolved from a single-page landing into a modular, multi-route application:

```text
src/
├── app/
│   ├── ai_reading/       # AI-powered Vedic generation logic
│   ├── api/backend/      # API routes for Gemini AI integration
│   ├── articles/         # Editorial section with dynamic [articleId]
│   ├── gemstones/        # Gemstone encyclopedia and data
│   ├── horoscope/        # Daily celestial updates
│   ├── zodiac/[id]/      # Dynamic routes for individual signs
│   ├── zodiac-signs/     # Overview of all constellations
│   ├── globals.css       # Deep-space styling & animations
│   └── layout.js         # Root layout with persistent navigation
├── components/           # Reusable UI components
└── data/                 # Static data (articledata.jsx, gemstonesdata.jsx)
````

-----

## 🚀 Getting Started

### 1\. Clone the repository

```bash
git clone [https://github.com/prajjwalkumar2104/Astrology.git](https://github.com/prajjwalkumar2104/Astrology.git)
cd Astrology
```

### 2\. Install dependencies

```bash
npm install
```

### 3\. Set up environment variables

Create a `.env.local` file in the root directory and add your Gemini API Key:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 4\. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the portal.

-----

## 🎨 Design System

  * **Background:** `#050112` (Midnight)
  * **Primary Accent:** `#4A1D4A` (Plum)
  * **Secondary Accent:** `#8B5CF6` (Violet)
  * **Typography:** Elegant Serif headings for a mystical, editorial feel; Sans-serif for readability.

-----

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

**Created with ✨ by [Prajjwal Kumar](https://www.google.com/search?q=https://github.com/prajjwalkumar2104)**

```
