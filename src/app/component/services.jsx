export default function OurServices(){
    return (
        <div className="text-center text-white m-10 text-6xl">
            <h1>Our Services</h1>
         {/* ASTRO PHILOSOPHY / CTA SECTION */}
<section className="relative py-24 px-10 overflow-hidden">
  {/* Subtle Background Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />

  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight italic">
      "The soul always knows what to do to heal itself. The challenge is to silence the mind."
    </h2>
    
    <div className="w-24 h-1 bg-purple-600 mx-auto mb-10" />

    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
      Our path is not written in the stars to be feared, but to be understood. Through the ancient wisdom of the Vedas and the precision of modern planetary alignment, we help you navigate the delicate balance of your Karma and Dharma.
    </p>
  </div>
</section>
        </div>
    )
}