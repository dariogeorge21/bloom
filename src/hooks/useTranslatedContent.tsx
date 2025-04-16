'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { ReactNode, useCallback } from 'react';

type TranslationCategory = 'common' | 'home' | 'about' | 'gallery' | 'footer';

export function useTranslatedContent() {
  const { language } = useLanguage();

  // Function to get a translation
  const t = useCallback(
    (category: TranslationCategory, key: string) => {
      return getTranslation(category, key, language);
    },
    [language]
  );

  // Function to conditionally render content based on language
  const renderContent = useCallback(
    (enContent: ReactNode, mlContent: ReactNode) => {
      return language === 'en' ? enContent : mlContent;
    },
    [language]
  );

  // Function to create a translated object with both languages
  const createBilingual = useCallback(
    <T,>(enObj: T, mlObj: T): T => {
      return language === 'en' ? enObj : mlObj;
    },
    [language]
  );

  return {
    language,
    t,
    renderContent,
    createBilingual,
  };
}
