export default function ServicesPage() {
  const servicePillars = [
    {
      id: "hr-consulting",
      title: "Human Resources Consulting",
      tagline: "Designing structured HR systems that improve performance, compliance, and talent management.",
      items: [
        "HR Strategy & Operating Model Development",
        "Performance Management Systems",
        "Organisational Design & Structure Review",
        "HR Policy Production & Compliance Audits",
        "Talent Frameworks & Competency Mapping"
      ]
    },
    {
      id: "internal-comms",
      title: "Internal Communications Strategy",
      tagline: "Creating clear communication frameworks that improve alignment, engagement, and trust.",
      items: [
        "Internal Communication Audits & Strategy Development",
        "Leadership Messaging & Executive Communications",
        "Employee Engagement Frameworks",
        "Change Communications Support",
        "Crisis Communication Frameworks & Protocols"
      ]
    },
    {
      id: "leadership-dev",
      title: "Leadership & Capability Development",
      tagline: "Building leadership capability that strengthens decision-making, accountability, and performance culture.",
      items: [
        "Ethical Leadership Development",
        "Authentic Leadership Practices",
        "Navigating Difficult Conversations",
        "Emotional Intelligence for Leaders",
        "Accountability & Ownership Workshops"
      ]
    },
    {
      id: "org-effectiveness",
      title: "Organisational Effectiveness & Culture",
      tagline: "Supporting organisations in building trust, alignment, adaptability, and healthy workplace cultures.",
      items: [
        "Culture Transformation Initiatives",
        "Change Management Strategy & Execution",
        "Team Effectiveness Interventions",
        "Organisational Health & Trust Assessments",
        "Vision, Mission, and Values Activation Support"
      ]
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
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
              Our Services
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 2: SERVICES DETAILED CONTENT STREAM */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Fixed/Sticky Section Index Menu (Desktop Only) */}
          <div className="hidden lg:col-span-4 lg:block lg:sticky lg:top-36 space-y-6">
            <div className="border-l border-ebony/10 pl-6 py-2 space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-navy font-bold font-sans block mb-2">
                Capabilities Index
              </span>
              {servicePillars.map((pillar) => (
                <a 
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="block text-xs uppercase tracking-wider font-semibold text-ebony-400 hover:text-navy transition-colors duration-200"
                >
                  {pillar.title}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Service Delivery Streams */}
          <div className="col-span-1 lg:col-span-8 space-y-24 md:space-y-32">
            {servicePillars.map((pillar, idx) => (
              <div 
                key={pillar.id} 
                id={pillar.id} 
                className="scroll-mt-36 border-b border-ebony/10 pb-16 last:border-0 last:pb-0 space-y-8"
              >
                {/* Pillar Counter & Label Flag */}
                <div className="space-y-2">
                  <span className="text-xs font-sans font-bold text-navy tracking-widest block">
                    CAPABILITY // 0{idx + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900 tracking-tight">
                    {pillar.title}
                  </h2>
                </div>

                {/* Main Brand Description Statement */}
                <p className="text-base md:text-lg text-ebony-700 font-sans font-medium leading-relaxed bg-warm-sand p-6 border border-ebony/5">
                  {pillar.tagline}
                </p>

                {/* Concrete Capabilities Bullet Array */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-ebony-400 font-bold font-sans">
                    Core Offerings Include:
                  </h4>
                  <ul className="space-y-3.5 pl-1">
                    {pillar.items.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-4 text-sm sm:text-base font-sans text-ebony-600 font-normal">
                        {/* Custom Geometric Minimal List Accent */}
                        <span className="w-1.5 h-1.5 bg-navy/40 mt-2.5 rounded-none flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}