export default function MissionPage() {
  return (
    <div className="w-full bg-warm-cream antialiased">
      
      {/* 🔷 SECTION 1: HEADER CANVAS */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-bold font-sans block">
              Strategic Intent
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
              Our Mission
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 2: CORE FOUNDATION & BELIEFS (EDITORIAL TEXT FOCUS) */}
      <section className="bg-white border-b border-ebony/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32 text-center flex flex-col items-center">
          
          <div className="space-y-3 mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Core Foundation
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900">
              What We Believe
            </h2>
          </div>

          {/* Premium Large-Scale Core Statement Frame */}
          <div className="bg-warm-sand p-8 md:p-12 border border-ebony/5 shadow-sm relative">
            {/* Minimalist top-left corner marker */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-navy/30"></div>
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-navy/30"></div>
            
            <p className="text-lg md:text-2xl font-serif italic text-ebony-800 leading-relaxed">
              "We believe that people perform better when expectations are clear, leadership is credible, communication is intentional, and organisational systems support both accountability and growth."
            </p>
          </div>

        </div>
      </section>

      {/* 🔷 SECTION 3: VISION & STRATEGIC ALIGNMENT (SYMMETRIC GRID) */}
      <section className="bg-warm-sand">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          
          {/* Section Indicator */}
          <div className="text-center mb-14 space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-navy font-bold font-sans block">
              Our Vision
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-ebony-900">
              Strategic Focus
            </h3>
            <div className="w-8 h-[1px] bg-navy/20 mx-auto mt-3"></div>
          </div>

          {/* Balanced Split Content Block for Remaining Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-sm sm:text-base text-ebony-600 leading-relaxed font-sans">
            
            <div className="bg-white p-8 border border-ebony/5 flex flex-col justify-between">
              <p className="font-medium text-ebony-900 leading-relaxed">
                Our mission is to help organisations move past surface-level interventions and short-term solutions. We focus on building deep internal effectiveness by aligning workforce structures directly with cultural priorities.
              </p>
              <span className="text-[10px] tracking-widest uppercase text-navy/40 font-bold block mt-6">
                Systemic Alignment
              </span>
            </div>

            <div className="bg-white p-8 border border-ebony/5 flex flex-col justify-between">
              <p className="text-ebony-700 leading-relaxed">
                By helping leaders establish sustainable operational health, we ensure that businesses build teams that are fully capable of executing long-term commercial goals while maintaining high structural trust.
              </p>
              <span className="text-[10px] tracking-widest uppercase text-navy/40 font-bold block mt-6">
                Long-Term Capability
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}