export default function AboutPage() {
  const values = [
    {
      letter: "F",
      title: "Foresight",
      desc: "Anticipating workforce trends, organizational needs, and communication dynamics to build future-ready frameworks."
    },
    {
      letter: "E",
      title: "Excellence",
      desc: "Delivering high-quality, practical consulting solutions that align with international benchmarks and executive standards."
    },
    {
      letter: "R",
      title: "Responsibility",
      desc: "Maintaining absolute ethical transparency, commercial confidentiality, and professional accountability across every deployment."
    },
    {
      letter: "N",
      title: "Nurture",
      desc: "Cultivating stable long-term capability, strategic knowledge transfer, and empathetic culture patterns within client teams."
    }
  ];

  return (
    <div className="w-full bg-warm-cream antialiased">
      
      {/* 🔷 SECTION 1: EDITORIAL HEADER CANVAS */}
      <section className="bg-navy text-white relative overflow-hidden">
        {/* Subtle architectural background alignment marks */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-bold font-sans block">
              Corporate Identity
            </span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
  About Us
</h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 2: CORE FOUNDATIONAL BACKGROUND (SPLIT LAYOUT) */}
      <section className="bg-white border-b border-ebony/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Pillar Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Our Context
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ebony-900 leading-tight">
              Building Stronger Organisations From the Inside Out
            </h2>
          </div>

          {/* Right Core Content Delivery Stream */}
          <div className="lg:col-span-7 space-y-8 text-base text-ebony-600 leading-relaxed font-sans">
            <p className="text-ebony-800 font-medium text-lg leading-relaxed">
              Fern & Ebony is a Human Resources and Internal Communications consulting firm focused on helping organisations strengthen the connection between leadership, people, communication, and performance.
            </p>
            <p>
              We recognise that sustainable organisational success depends not only on business strategy, but on the systems, culture, leadership capability, and communication practices that support execution.
            </p>
            
            <div className="pt-8 border-t border-ebony/5 space-y-4">
              <p className="font-serif text-ebony-900 font-bold text-lg">
                Our Approach Summary
              </p>
              <p>
                Our work is designed to help organisations combine robust operational HR infrastructure with targeted, clear internal communication loops. This comprehensive systemic framework equips managers with the critical capabilities required to transform high-level strategic vision into direct, measurable everyday execution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🔷 SECTION 3: THE FERN VALUES FRAMEWORK MATRIX */}
      <section className="bg-warm-sand">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          
          {/* Matrix Header Centered */}
          <div className="text-center max-w-xl mx-auto mb-16 md:mb-20 space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Core Pillars
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900">
              The FERN Values Framework
            </h2>
            <div className="w-12 h-[1px] bg-navy/30 mx-auto mt-4"></div>
          </div>

          {/* Dynamic 4-Column Balanced Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 border border-ebony/5 rounded-none flex flex-col justify-between group hover:border-navy/20 transition-all duration-300"
              >
                <div>
                  {/* Watermarked Letter Accent */}
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-navy/10 group-hover:text-navy/20 transition-colors duration-300 mb-6 font-semibold">
                    {item.letter}
                  </div>
                  
                  {/* Value Block Meta */}
                  <h3 className="text-xl font-serif font-bold text-ebony-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-ebony-600 leading-relaxed font-sans font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}