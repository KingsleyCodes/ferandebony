export default function CoreServices() {
  const services = [
    {
      title: "Human Resources Consulting",
      desc: "Designing structured HR systems that improve performance, compliance, and talent management."
    },
    {
      title: "Internal Communications Strategy",
      desc: "Creating clear communication frameworks that improve alignment, engagement, and trust."
    },
    {
      title: "Leadership & Capability Development",
      desc: "Building leadership capability that strengthens decision-making, accountability, and performance culture."
    }
  ];

  return (
    <section className="bg-warm-sand border-b border-ebony/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900">
            CORE SERVICE AREAS
          </h2>
          <div className="w-12 h-[1px] bg-navy/30 mx-auto mt-4"></div>
        </div>

        {/* 3-Card Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-10 border border-ebony/5 rounded-none shadow-sm flex flex-col justify-between group hover:border-navy/20 transition-all duration-300"
            >
              <div>
                <span className="text-[11px] font-sans font-bold text-navy/40 block mb-6 tracking-widest">
                  PILLAR // 0{idx + 1}
                </span>
                <h3 className="text-xl font-serif font-bold text-ebony-900 mb-4 group-hover:text-navy transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm text-ebony-600 leading-relaxed font-sans">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}