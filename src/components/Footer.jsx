'use client';
import { useLang } from '../context/LanguageContext';
import { t } from '../i18n';

export default function Footer() {
  const { lang } = useLang();
  const footer = t[lang].footer;
  const name = t[lang].nav.brand;

  return (
    <footer>
      <div className="foot-name">{name}</div>
      <div>{footer.tagline}</div>
      <div className="foot-credit">{footer.credit}</div>
    </footer>
  );
}
