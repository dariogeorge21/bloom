'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { useEffect, useState } from 'react';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  // Add keyboard shortcut (Ctrl+L) for toggling language
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        toggleLanguage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleLanguage]);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      toggleLanguage();
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center justify-center px-3 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm font-medium transition-all duration-300 border border-blue-200 ${isAnimating ? 'opacity-50' : ''}`}
      aria-label={`Switch to ${language === 'en' ? 'Malayalam' : 'English'}`}
      disabled={isAnimating}
    >
      <span className={`relative ${isAnimating ? 'language-transition language-exit language-exit-active' : ''}`}>
        {getTranslation('common', 'languageToggle', language)}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </span>
      <span className="ml-1 text-xs text-blue-600">(Ctrl+L)</span>
    </button>
  );
}
