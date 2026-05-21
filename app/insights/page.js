export default function InsightsPage() {
  const featuredThemes = [
    {
      title: "Leadership & Performance",
      desc: "Exploring leadership capability, accountability, resilience, and sustainable performance practices."
    },
    {
      title: "HR & Organisational Effectiveness",
      desc: "Perspectives on HR systems, people strategy, organisational structure, and workplace effectiveness."
    },
    {
      title: "Internal Communications",
      desc: "Insights on communication clarity, leadership messaging, employee engagement, and culture alignment."
    },
    {
      title: "Workplace Culture & Change",
      desc: "Supporting organisations in building trust, alignment, adaptability, and healthy workplace cultures."
    }
  ];

  return (
    <div className="w-full bg-warm-cream antialiased">
      
      {/* 🔷 SECTION 1: HEADER CANVAS */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-bold font-sans block">
              Perspectives & Thinking
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
              Insights
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 2: CORE THINKING FRAMEWORK STATEMENT */}
      <section className="bg-white border-b border-ebony/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
          
          <div className="space-y-3 mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Our Perspective
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900">
              Thought Leadership & Systems Thinking
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-ebony-600 leading-relaxed font-sans max-w-3xl">
            <p className="font-serif italic text-ebony-800 text-lg md:text-xl border-l-2 border-navy pl-4 md:pl-0 md:border-l-0 mb-8">
              "We believe that thoughtful leadership, effective communication, and strong people systems are critical to organisational success."
            </p>
            <p>
              Through our insights and perspectives, we share practical thinking on leadership, organisational effectiveness, employee engagement, communication, and workplace culture.
            </p>
            <p>
              Our insights are designed to support leaders and organisations in navigating evolving workplace realities while building stronger, healthier, and more resilient organisations.
            </p>
          </div>

        </div>
      </section>

      {/* 🔷 SECTION 3: FEATURED THEMES QUADRANT GRID */}
      <section className="bg-warm-sand">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          
          {/* Centered Grid Label Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Core Focus Areas
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900">
              FEATURED THEMES
            </h3>
            <div className="w-12 h-[1px] bg-navy/30 mx-auto mt-4"></div>
          </div>

          {/* Clean 4-Quadrant Card Layout Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredThemes.map((theme, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 md:p-10 border border-ebony/5 rounded-none flex flex-col justify-between group hover:border-navy/20 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Subtle Numerator Accent */}
                  <span className="text-xs font-sans font-bold text-navy/40 tracking-widest block">
                    THEME // 0{idx + 1}
                  </span>
                  
                  {/* Subject Heading */}
                  <h4 className="text-xl font-serif font-bold text-ebony-900 group-hover:text-navy transition-colors duration-300">
                    {theme.title}
                  </h4>
                  
                  {/* Document Content Block */}
                  <p className="text-sm md:text-base text-ebony-600 leading-relaxed font-sans font-normal">
                    {theme.desc}
                  </p>
                </div>
                
                {/* Structural Border Design Detail */}
                <div className="w-6 h-[1px] bg-ebony/10 mt-8 group-hover:bg-navy/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}