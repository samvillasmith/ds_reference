'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';
import { sectionsData } from '../data';
import { useLang } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLang();
  const sections = sectionsData[lang];

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
