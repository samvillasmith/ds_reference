import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';
import { sections } from '../data';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        {sections.map((s) => (
          <ContentSection key={s.id} {...s} />
        ))}
        <Philosophy />
      </div>
      <Footer />
    </>
  );
}
