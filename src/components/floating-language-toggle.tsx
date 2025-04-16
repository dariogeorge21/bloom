'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function FloatingLanguageToggle() {
  const { language, toggleLanguage, isChangingLanguage } = useLanguage();
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

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
    if (isChangingLanguage) return; // Prevent multiple clicks during animation

    setIsButtonAnimating(true);
    toggleLanguage();

    // Reset button animation after the full transition completes
    setTimeout(() => {
      setIsButtonAnimating(false);
    }, 2500);
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
          ${isButtonAnimating || isChangingLanguage ? 'pointer-events-none' : ''}
        `}
        aria-label={`Switch to ${language === 'en' ? 'Malayalam' : 'English'}`}
        disabled={isButtonAnimating || isChangingLanguage}
      >
        <span
          className={`
            relative
            ${isButtonAnimating ? 'language-fade-animation' : ''}
          `}
        >
          {language === 'en' ? 'മലയാളം' : 'English'}
          {!isButtonAnimating && (
            <span className="ml-1 opacity-70">✓</span>
          )}
        </span>
      </button>
    </div>
  );
}
