'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    serviceOfInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action implementation placeholder for your API endpoint integration
    console.log('Submitted Request Data:', formData);
  };

  return (
    <div className="w-full bg-warm-cream antialiased">
      
      {/* 🔷 SECTION 1: HEADER CANVAS */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center flex flex-col items-center">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-bold font-sans block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
              Contact Us
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 2: INTRO AND FORM SPLIT GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Core Identity Statements & Metadata */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-navy font-bold font-sans block">
                Partnership
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-ebony-900 tracking-tight uppercase">
                LET’S WORK TOGETHER
              </h2>
              <p className="text-sm sm:text-base text-ebony-600 leading-relaxed font-sans pt-2">
                We would love to understand your organisational needs and explore how we can support your people, performance, and communication priorities.
              </p>
            </div>

            {/* Document Baseline Coordinates */}
            <div className="pt-8 border-t border-ebony/10 space-y-4 font-sans text-sm text-ebony-700">
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-ebony-400 font-bold">Location</span>
                <span className="font-medium text-ebony-900">Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Sharp Corporate Form Field Layout */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-ebony/5 rounded-none shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-ebony-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-cream border border-ebony/10 rounded-none px-4 py-3 text-sm text-ebony focus:outline-none focus:border-navy transition-colors duration-200"
                />
              </div>

              {/* Organisation Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="organisation" className="text-xs uppercase tracking-wider font-semibold text-ebony-700">
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-cream border border-ebony/10 rounded-none px-4 py-3 text-sm text-ebony focus:outline-none focus:border-navy transition-colors duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-ebony-700">
                  Email
                </label>
                <input
                  type="type"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-cream border border-ebony/10 rounded-none px-4 py-3 text-sm text-ebony focus:outline-none focus:border-navy transition-colors duration-200"
                />
              </div>

              {/* Service of Interest Dropdown Select Menu */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="serviceOfInterest" className="text-xs uppercase tracking-wider font-semibold text-ebony-700">
                  Service of Interest
                </label>
                <div className="relative">
                  <select
                    id="serviceOfInterest"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-warm-cream border border-ebony/10 rounded-none px-4 py-3 text-sm text-ebony focus:outline-none focus:border-navy transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a priority service area...</option>
                    <option value="Human Resources Consulting">Human Resources Consulting</option>
                    <option value="Internal Communications Strategy">Internal Communications Strategy</option>
                    <option value="Leadership & Capability Development">Leadership & Capability Development</option>
                    <option value="Organisational Effectiveness & Culture">Organisational Effectiveness & Culture</option>
                  </select>
                  {/* Custom Arrow Icon for Dropdown */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ebony-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-ebony-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-cream border border-ebony/10 rounded-none px-4 py-3 text-sm text-ebony focus:outline-none focus:border-navy transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Action Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none hover:bg-navy-800 transition-all duration-300 shadow-sm text-center focus:outline-none"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}