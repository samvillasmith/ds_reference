'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });
const KEY = 'tds-lang';
const SUPPORTED = ['en', 'es', 'ja'];

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (SUPPORTED.includes(stored)) setLangState(stored);
    } catch {}
  }, []);

  const setLang = (l) => {
    if (!SUPPORTED.includes(l)) return;
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
