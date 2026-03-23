export const gemstones = [
  {
    id: "ruby",
    name: "Ruby",
    nameHindi: "Manik",
    planet: "Sun (Surya)",
    zodiacSigns: ["Leo"],
    color: "Deep Red",
    benefits: ["Boosts confidence and leadership", "Strengthens heart and vitality", "Enhances fame and recognition", "Improves father-child relationships"],
    howToWear: "Set in gold ring, worn on ring finger of right hand on Sunday morning during Shukla Paksha.",
    mantra: "Om Suryaya Namaha",
    description: "Ruby, the king of gemstones, channels the powerful energy of the Sun. It bestows authority, vitality, and a regal presence upon its wearer."
  },
  {
    id: "pearl",
    name: "Pearl",
    nameHindi: "Moti",
    planet: "Moon (Chandra)",
    zodiacSigns: ["Cancer"],
    color: "White / Cream",
    benefits: ["Calms the mind and emotions", "Improves mental health", "Strengthens mother-child bond", "Enhances beauty and charm"],
    howToWear: "Set in silver ring, worn on little finger of right hand on Monday morning during Shukla Paksha.",
    mantra: "Om Chandraya Namaha",
    description: "Pearl harnesses the soothing energy of the Moon, bringing emotional balance, mental peace, and intuitive wisdom to its wearer."
  },
  {
    id: "red-coral",
    name: "Red Coral",
    nameHindi: "Moonga",
    planet: "Mars (Mangal)",
    zodiacSigns: ["Aries", "Scorpio"],
    color: "Red / Orange-Red",
    benefits: ["Boosts courage and confidence", "Overcomes laziness and lethargy", "Protects from enemies", "Strengthens blood and bones"],
    howToWear: "Set in gold or copper ring, worn on ring finger of right hand on Tuesday morning.",
    mantra: "Om Mangalaya Namaha",
    description: "Red Coral embodies Mars's warrior energy, granting courage, physical strength, and protection from negativity."
  },
  {
    id: "emerald",
    name: "Emerald",
    nameHindi: "Panna",
    planet: "Mercury (Budha)",
    zodiacSigns: ["Gemini", "Virgo"],
    color: "Green",
    benefits: ["Enhances intellect and communication", "Improves business acumen", "Strengthens nervous system", "Aids in education and learning"],
    howToWear: "Set in gold ring, worn on little finger of right hand on Wednesday morning.",
    mantra: "Om Budhaya Namaha",
    description: "Emerald channels Mercury's intellectual energy, sharpening the mind, improving communication, and attracting business success."
  },
  {
    id: "yellow-sapphire",
    name: "Yellow Sapphire",
    nameHindi: "Pukhraj",
    planet: "Jupiter (Guru)",
    zodiacSigns: ["Sagittarius", "Pisces"],
    color: "Yellow",
    benefits: ["Brings wisdom and prosperity", "Enhances spiritual growth", "Improves marital bliss", "Strengthens liver and digestion"],
    howToWear: "Set in gold ring, worn on index finger of right hand on Thursday morning.",
    mantra: "Om Gurave Namaha",
    description: "Yellow Sapphire radiates Jupiter's benevolent energy, bringing wisdom, prosperity, good fortune, and spiritual growth."
  },
  {
    id: "diamond",
    name: "Diamond",
    nameHindi: "Heera",
    planet: "Venus (Shukra)",
    zodiacSigns: ["Taurus", "Libra"],
    color: "White / Colorless",
    benefits: ["Attracts love and luxury", "Enhances creativity and art", "Improves reproductive health", "Brings marital harmony"],
    howToWear: "Set in platinum or white gold ring, worn on middle finger of right hand on Friday morning.",
    mantra: "Om Shukraya Namaha",
    description: "Diamond embodies Venus's energy of love, beauty, and luxury, attracting romance, artistic inspiration, and material abundance."
  },
  {
    id: "blue-sapphire",
    name: "Blue Sapphire",
    nameHindi: "Neelam",
    planet: "Saturn (Shani)",
    zodiacSigns: ["Capricorn", "Aquarius"],
    color: "Blue",
    benefits: ["Accelerates career growth", "Provides protection from evil", "Brings discipline and focus", "Alleviates Saturn's malefic effects"],
    howToWear: "Set in silver or iron ring, worn on middle finger of right hand on Saturday evening. MUST be tested for 3 days before wearing.",
    mantra: "Om Shanaishcharaya Namaha",
    description: "Blue Sapphire is the most powerful and fast-acting gemstone, channeling Saturn's transformative energy. It must be worn with caution and proper guidance."
  },
  {
    id: "hessonite",
    name: "Hessonite",
    nameHindi: "Gomed",
    planet: "Rahu (North Node)",
    zodiacSigns: ["Aquarius"],
    color: "Honey / Brownish-Orange",
    benefits: ["Protects from Rahu's negative effects", "Clears confusion and indecision", "Aids in foreign travel", "Improves career in politics or technology"],
    howToWear: "Set in silver ring, worn on middle finger of right hand on Saturday evening.",
    mantra: "Om Rahave Namaha",
    description: "Hessonite neutralizes Rahu's shadowy influence, bringing clarity, protection during foreign travels, and success in unconventional fields."
  },
  {
    id: "cats-eye",
    name: "Cat's Eye",
    nameHindi: "Lehsuniya",
    planet: "Ketu (South Node)",
    zodiacSigns: ["Pisces"],
    color: "Yellowish-Green with chatoyancy",
    benefits: ["Protects from Ketu's negative effects", "Enhances spiritual enlightenment", "Guards against accidents", "Improves intuition and psychic abilities"],
    howToWear: "Set in silver ring, worn on middle finger of right hand on Tuesday or Saturday.",
    mantra: "Om Ketave Namaha",
    description: "Cat's Eye harnesses Ketu's mystical energy, providing spiritual protection, psychic enhancement, and liberation from worldly attachments."
  }
];

// Helper to find by ID
export const getGemstoneById = (id) => gemstones.find(g => g.id === id);