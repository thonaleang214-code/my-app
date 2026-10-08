import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('techvibe_lang');
      return saved === 'km' ? 'km' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    const validLang = lang === 'km' ? 'km' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('techvibe_lang', validLang);
      document.documentElement.lang = validLang;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    if (TRANSLATIONS[language] && TRANSLATIONS[language][key] !== undefined) {
      return TRANSLATIONS[language][key];
    }
   if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key] !== undefined) {
      return TRANSLATIONS['en'][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isKhmer: language === 'km',
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
