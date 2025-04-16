'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'ml';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  isChangingLanguage: boolean;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isChangingLanguage: false,
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with English, but check localStorage on mount
  const [language, setLanguageState] = useState<Language>('en');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ml')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    // Update the html lang attribute for accessibility
    document.documentElement.lang = newLanguage;
  };

  // Toggle between languages
  const toggleLanguage = () => {
    setIsChangingLanguage(true);

    // Delay the actual language change to allow for animation
    setTimeout(() => {
      const newLanguage = language === 'en' ? 'ml' : 'en';
      setLanguage(newLanguage);

      // Reset the changing flag after a delay to complete the animation
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 1000);
    }, 750);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isChangingLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
