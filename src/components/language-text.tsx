'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';

interface LanguageTextProps {
  children: ReactNode;
  className?: string;
}

export function LanguageText({ children, className = '' }: LanguageTextProps) {
  const { language } = useLanguage();
  
  return (
    <span 
      className={`${className} ${language === 'en' ? 'font-cal' : ''}`}
      lang={language}
    >
      {children}
    </span>
  );
}
