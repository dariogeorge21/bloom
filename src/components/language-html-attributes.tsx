'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export function LanguageHtmlAttributes() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  // This component doesn't render anything
  return null;
}
