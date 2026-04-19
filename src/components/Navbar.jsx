'use client';
import { useLang } from '../context/LanguageContext';
import { t } from '../i18n';
import { FlagUS, FlagMX, FlagJP } from './Flags';

const FLAGS = [
  { code: 'en', Flag: FlagUS, label: 'English' },
  { code: 'es', Flag: FlagMX, label: 'Español' },
  { code: 'ja', Flag: FlagJP, label: '日本語' },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const nav = t[lang].nav;

  return (
    <nav className="site-nav">
      <a className="nav-brand" href="/">{nav.brand}</a>
      <div className="nav-links">
        <a className="nav-cta" href="/crash-course.html">{nav.crashCourse}</a>
        <a className="nav-home" href="/#foundations">{nav.foundations}</a>
        <a className="nav-home" href="/#feature-eng">{nav.featureEng}</a>
        <a className="nav-home" href="/#reference">{nav.reference}</a>
        <div className="nav-divider" />
        <div className="lang-flags">
          {FLAGS.map(({ code, Flag, label }) => (
            <button
              key={code}
              className={`flag-btn${lang === code ? ' flag-btn--active' : ''}`}
              onClick={() => setLang(code)}
              aria-label={label}
              title={label}
            >
              <Flag />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
