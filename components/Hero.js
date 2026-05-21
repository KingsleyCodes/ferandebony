import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full">
      
      {/* Upper Center-Aligned Visual Canvas Frame */}
      <div className="relative w-full min-h-[75vh] flex items-center justify-center bg-ebony overflow-hidden">
        
        {/* Full-bleed background image across the entire canvas */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Premium Vignette Overlay: Deep Navy Blue edges focusing into a subtle center spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0f1e36_85%)]" />

        {/* Foreground Content: Complete Symmetry */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 text-center flex flex-col items-center">
          
          <div className="max-w-3xl space-y-10">
            
            {/* Minimalist Header Accent */}
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-6 bg-white/30"></span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/70 font-semibold font-sans">
                Consulting Framework
              </span>
              <span className="h-[1px] w-6 bg-white/30"></span>
            </div>

            {/* Sharp, Balanced Center-Aligned Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-[1.15] tracking-tight max-w-2xl mx-auto">
              Human Resources & <br />
              Internal Communications Consulting
            </h1>
            
            {/* Symmetric, Perfectly Centered Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center uppercase tracking-[0.2em] font-bold text-[11px] font-sans pt-4 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent bg-white text-navy hover:bg-navy-50 transition-all duration-300 rounded-none text-center min-w-[200px]"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white hover:bg-white hover:text-navy transition-all duration-300 rounded-none text-center min-w-[200px]"
              >
                Work With Us
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* Sub-text Context Block (Maintains the structure of the document cleanly underneath) */}
      <div className="bg-warm-sand border-b border-ebony/5 py-16 md:py-24 text-ebony-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Subtle Label */}
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-navy font-bold font-sans">
              Strengthening People, Performance & Culture
            </span>
          </div>

          {/* Dual-Column Split Content Layout for the remaining document copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-sm sm:text-base text-ebony-600 leading-relaxed font-sans max-w-5xl mx-auto">
            <p className="md:text-right border-b md:border-b-0 md:border-r border-ebony/10 pb-6 md:pb-0 md:pr-10 font-medium text-ebony-900">
              We partner with organisations to build aligned teams, capable leaders, and communication systems that strengthen engagement, accountability, and sustainable organisational performance.
            </p>
            <p className="md:pl-6 text-left text-ebony-600">
              Through practical HR solutions, leadership development, and internal communications strategy, we help organisations create environments where people and performance can thrive together.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}