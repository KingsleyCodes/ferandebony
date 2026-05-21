import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ebony text-white/80 border-t border-ebony-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between border-b border-white/10 pb-8">
          <div>
            <span className="font-serif text-lg tracking-wider font-bold text-white block">FERN & EBONY</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-fern-300 block mt-1">The Human Communications Company</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm justify-start md:justify-end">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/mission" className="hover:text-white transition-colors">Mission</Link>
            <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Fern & Ebony. All rights reserved.</p>
          <p>Location: Nigeria</p>
        </div>
      </div>
    </footer>
  );
}