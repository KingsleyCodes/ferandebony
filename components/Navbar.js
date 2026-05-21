'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-warm-cream/80 backdrop-blur-md border-b border-ebony/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Brand Identity / Logo Lockup */}
        <Link href="/" className="group flex flex-col space-y-0.5 tracking-tight focus:outline-none">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.05em] font-bold text-ebony-900 group-hover:text-navy transition-colors duration-300">
            FERN & EBONY
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-navy/70 font-semibold font-sans">
            The Human Communications Company
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-xs uppercase tracking-widest font-semibold text-ebony-600 font-sans">
          <Link href="/" className="relative py-2 text-ebony-900 hover:text-navy transition-colors group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative py-2 hover:text-navy transition-colors group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="relative py-2 hover:text-navy transition-colors group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/mission" className="relative py-2 hover:text-navy transition-colors group">
            Mission
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/insights" className="relative py-2 hover:text-navy transition-colors group">
            Insights
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            href="/contact" 
            className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-ebony text-[11px] font-bold tracking-[0.2em] uppercase rounded-none text-ebony hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 ease-in-out focus:outline-none"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-none text-ebony hover:text-navy focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              // Hamburger Icon
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              // Close X Icon
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-warm-cream border-b border-ebony/10 transition-all duration-300 ease-in-out shadow-lg ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pt-4 pb-8 space-y-4 text-sm font-semibold tracking-widest uppercase font-sans">
          <Link 
            href="/" 
            onClick={toggleMenu}
            className="block py-2 border-b border-ebony/5 text-ebony-900 hover:text-navy transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={toggleMenu}
            className="block py-2 border-b border-ebony/5 text-ebony-600 hover:text-navy transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            onClick={toggleMenu}
            className="block py-2 border-b border-ebony/5 text-ebony-600 hover:text-navy transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/mission" 
            onClick={toggleMenu}
            className="block py-2 border-b border-ebony/5 text-ebony-600 hover:text-navy transition-colors"
          >
            Mission
          </Link>
          <Link 
            href="/insights" 
            onClick={toggleMenu}
            className="block py-2 border-b border-ebony/5 text-ebony-600 hover:text-navy transition-colors"
          >
            Insights
          </Link>
          <div className="pt-2">
            <Link 
              href="/contact" 
              onClick={toggleMenu}
              className="w-full text-center inline-flex items-center justify-center px-5 py-3 border border-ebony text-xs font-bold tracking-[0.2em] uppercase rounded-none text-white bg-ebony hover:bg-navy transition-all duration-300 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}