import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Fern & Ebony | Human Resources & Internal Communications Consulting',
  description: 'Strengthening People, Performance & Culture',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-warm-cream text-ebony selection:bg-fern/10 selection:text-fern-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}