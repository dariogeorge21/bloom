'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export function LanguageHtmlAttributes() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;

    // Add lang attribute to specific text elements for better font control
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, button');
    textElements.forEach(el => {
      // Skip elements that already have a lang attribute set by components
      if (!el.hasAttribute('lang')) {
        el.setAttribute('lang', language);
      }
    });
  }, [language]);

  // This component doesn't render anything
  return null;
}
