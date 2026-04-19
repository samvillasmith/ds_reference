'use client';
import { useLang } from '../context/LanguageContext';
import { t } from '../i18n';

export default function Philosophy() {
  const { lang } = useLang();
  const phil = t[lang].philosophy;

  return (
    <section className="philosophy">
      <div className="section-label">{phil.label}</div>
      <div className="section-title">{phil.title}</div>
      <div className="phil-grid">
        {phil.items.map(({ num, title, body }) => (
          <div key={num} className="phil-item">
            <div className="phil-num">{num}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
