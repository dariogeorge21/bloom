'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export function FontLoader() {
  const { language } = useLanguage();

  useEffect(() => {
    // Add or remove the 'cal-sans-active' class on the html element based on language
    if (language === 'en') {
      document.documentElement.classList.add('cal-sans-active');
    } else {
      document.documentElement.classList.remove('cal-sans-active');
    }
  }, [language]);

  // This component doesn't render anything
  return null;
}
