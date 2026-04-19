'use client';
import { useLang } from '../context/LanguageContext';
import { t } from '../i18n';

export default function Hero() {
  const { lang } = useLang();
  const hero = t[lang].hero;

  return (
    <header className="hero">
      <div className="glyph">
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="60" x2="70" y2="60" stroke="#c87533" strokeWidth="1.5" opacity="0.4"/>
          <line x1="10" y1="50" x2="70" y2="50" stroke="#c87533" strokeWidth="1" opacity="0.2"/>
          <line x1="10" y1="40" x2="70" y2="40" stroke="#c87533" strokeWidth="1" opacity="0.2"/>
          <rect x="18" y="35" width="6" height="25" rx="1" fill="#c87533" opacity="0.3"/>
          <rect x="28" y="25" width="6" height="35" rx="1" fill="#c87533" opacity="0.5"/>
          <rect x="38" y="18" width="6" height="42" rx="1" fill="#c87533" opacity="0.7"/>
          <rect x="48" y="28" width="6" height="32" rx="1" fill="#c87533" opacity="0.5"/>
          <rect x="58" y="22" width="6" height="38" rx="1" fill="#c87533" opacity="0.6"/>
          <polyline
            points="21,35 31,25 41,18 51,28 61,22"
            fill="none"
            stroke="#f0ece4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </div>

      <h1 className="hero-title">
        <span className="accent">Texcoco</span><br />
        {hero.titleLine2}
      </h1>

      <p className="hero-sub">{hero.sub}</p>

      <div className="hero-line" />

      <p className="hero-desc">{hero.desc}</p>

      <div className="scroll-hint">{hero.scroll}</div>
    </header>
  );
}
