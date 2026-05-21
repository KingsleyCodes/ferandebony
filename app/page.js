import Hero from '../components/Hero';
import AboutOverview from '../components/AboutOverview';
import CoreServices from '../components/CoreServices';
import ValueStatement from '../components/ValueStatement';
import ApproachCTA from '../components/ApproachCTA';

export default function HomePage() {
  return (
    <div className="w-full antialiased">
      <Hero />
      <AboutOverview />
      <CoreServices />
      <ValueStatement />
      <ApproachCTA />
    </div>
  );
}