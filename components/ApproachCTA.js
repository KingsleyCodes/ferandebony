import Link from 'next/link';

export default function ApproachCTA() {
  return (
    <section className="bg-white">
      
      {/* Upper Section: Clean Philosophy Statement */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 text-center flex flex-col items-center">
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
            Our Approach
          </span>
          <p className="text-xl md:text-2xl font-serif italic text-ebony-800 leading-relaxed px-4 md:px-8">
            "Our approach is practical, insight-driven, and tailored to organisational realities. We combine HR expertise, communication strategy, and leadership development to deliver measurable impact."
          </p>
        </div>
      </div>

      {/* New Lower Section: Full-Bleed Background Image Call-to-Action Banner */}
      <div className="relative w-full min-h-[50vh] flex items-center justify-center bg-ebony overflow-hidden">
        
        {/* Full-bleed background texture */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat attachment-fixed"
          style={{ backgroundImage: "url('/cta-bg.jpg')" }}
        />
        
        {/* Deep, premium navy protective overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" />

        {/* Centered Content Card */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 text-center space-y-8">
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-white max-w-2xl mx-auto leading-tight tracking-tight">
            Let’s strengthen your people, performance, and communication systems.
          </h3>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4.5 border border-transparent bg-white text-navy hover:bg-navy-50 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 text-center min-w-[220px]"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}