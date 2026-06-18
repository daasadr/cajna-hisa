'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang } from './translations';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: 'sl', toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('sl');

  useEffect(() => {
    const stored = localStorage.getItem('cajna-lang') as Lang;
    if (stored === 'sl' || stored === 'en') setLang(stored);
  }, []);

  const toggle = () => {
    const next: Lang = lang === 'sl' ? 'en' : 'sl';
    setLang(next);
    localStorage.setItem('cajna-lang', next);
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLanguage = () => useContext(LangContext);
