'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function FloatingLanguageToggle() {
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
      }, 1500); // Match the animation duration
    }, 150);
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={handleToggle}
        className={`
          flex items-center justify-center
          px-4 py-2
          rounded-full
          bg-white/30 backdrop-blur-md
          text-blue-800
          text-sm font-medium
          transition-all duration-300
          border border-blue-200/50
          shadow-lg
          hover:bg-white/40
          hover:shadow-xl
          ${isAnimating ? 'pointer-events-none' : ''}
        `}
        aria-label={`Switch to ${language === 'en' ? 'Malayalam' : 'English'}`}
        disabled={isAnimating}
      >
        <span
          className={`
            relative
            ${isAnimating ? 'language-fade-animation' : ''}
          `}
        >
          {language === 'en' ? 'മലയാളം' : 'English'}
          {!isAnimating && (
            <span className="ml-1 opacity-70">✓</span>
          )}
        </span>
      </button>
    </div>
  );
}
