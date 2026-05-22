export default function AboutOverview() {
  const achievements = [
    "strengthen leadership effectiveness",
    "improve organisational alignment",
    "enhance employee engagement",
    "build accountability and trust",
    "support sustainable performance outcomes"
  ];

  return (
    <section className="bg-white border-b border-ebony/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Title & Premium Structural Image Frame */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ebony-900 leading-tight">
              Building Stronger Organisations From the Inside Out
            </h2>
          </div>

          {/* New Architectural Image Window */}
          <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] relative overflow-hidden bg-warm-sand border border-ebony/10 shadow-sm">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter contrast-110"
              style={{ backgroundImage: "url('/about-side.jpg')" }}
            />
            {/* Fail-safe placeholder text for local development */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-ebony/5 text-ebony/20 font-sans text-xs uppercase tracking-widest pointer-events-none p-4 text-center">
              [ Place Image: public/about-side.jpg ]
            </div> */}
          </div>
        </div>

        {/* Right Column: Paragraphs & Bullet list */}
        <div className="lg:col-span-7 space-y-8 text-base text-ebony-600 leading-relaxed font-sans lg:pt-10">
          <p className="text-ebony-800 font-medium text-lg">
            Fern & Ebony is a Human Resources and Internal Communications consulting firm focused on helping organisations strengthen the connection between leadership, people, communication, and performance.
          </p>
          <p>
            We recognise that sustainable organisational success depends not only on business strategy, but on the systems, culture, leadership capability, and communication practices that support execution.
          </p>
          
          <div className="pt-8 border-t border-ebony/5">
            <p className="font-serif text-ebony-900 font-bold mb-4 text-base">
              Our work is designed to help organisations:
            </p>
            <ul className="space-y-3.5 pl-1">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-sm sm:text-base">
                  <span className="text-navy mt-1.5 text-xs font-bold font-sans">0{index + 1}</span>
                  <span className="text-ebony-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}