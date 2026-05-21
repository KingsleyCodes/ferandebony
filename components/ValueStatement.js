export default function ValueStatement() {
  const transitions = [
    { from: "fragmented communication", to: "clear alignment" },
    { from: "inconsistent performance", to: "structured accountability" },
    { from: "disengaged teams", to: "high-trust, high-performance cultures" }
  ];

  return (
    <section className="bg-navy text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
        
        <div className="space-y-3 mb-14">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-bold font-sans block">
            Strategic Shift
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
            VALUE STATEMENT
          </h2>
        </div>

        <p className="text-xs text-white/60 font-semibold mb-10 uppercase tracking-[0.25em] font-sans">
          We help organisations move from
        </p>

        {/* Dynamic Transition Stack */}
        <div className="w-full max-w-3xl space-y-4 font-sans text-sm sm:text-base">
          {transitions.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-7 items-center bg-white/[0.02] border border-white/5 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Point of Origin */}
              <div className="md:col-span-3 text-white/40 line-through decoration-white/20 font-medium md:text-right py-1 md:py-0">
                {item.from}
              </div>
              
              {/* Vector Icon Indicator */}
              <div className="md:col-span-1 text-white/30 font-bold hidden md:block text-center text-xs tracking-widest">
                &rarr;
              </div>
              <div className="md:col-span-1 text-white/30 font-bold md:hidden text-left py-1 text-xs">
                &darr;
              </div>

              {/* Destination Point */}
              <div className="md:col-span-3 text-white font-semibold md:text-left tracking-wide py-1 md:py-0 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full inline-block md:hidden"></span>
                {item.to}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}