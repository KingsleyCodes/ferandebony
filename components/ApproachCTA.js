import Link from 'next/link';

export default function ApproachCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
        
        {/* Italic Philosophy Block */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
            Our Approach
          </span>
          <p className="text-xl md:text-2xl font-serif italic text-ebony-800 leading-relaxed px-4 md:px-8">
            "Our approach is practical, insight-driven, and tailored to organisational realities. We combine HR expertise, communication strategy, and leadership development to deliver measurable impact."
          </p>
        </div>

        {/* Final Conversion Target Banner */}
        <div className="mt-20 pt-16 border-t border-ebony/10 w-full max-w-2xl space-y-8">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900 leading-tight">
            Let’s strengthen your people, performance, and communication systems.
          </h3>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4.5 border border-transparent bg-navy text-white hover:bg-navy-800 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 text-center min-w-[220px]"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}