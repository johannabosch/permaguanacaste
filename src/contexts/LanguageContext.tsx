'use client';

import React, { createContext, useContext, useState } from 'react';
import { translations, Translations } from '../translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  isLanguageSelected: boolean;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  // Remove the useEffect that checks localStorage - language selection will reset on every page load

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsLanguageSelected(true);
    // Remove localStorage persistence - language choice won't be remembered across refreshes
  };

  // Get translations for current language, fallback to English
  const t = translations[language || 'en'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLanguageSelected, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
