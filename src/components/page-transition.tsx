'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { isChangingLanguage } = useLanguage();
  const [animationState, setAnimationState] = useState<'idle' | 'fadeOut' | 'fadeIn'>('idle');

  useEffect(() => {
    if (isChangingLanguage) {
      // Start the fade out animation
      setAnimationState('fadeOut');

      // After a delay, start fading back in
      setTimeout(() => {
        setAnimationState('fadeIn');

        // Reset to idle state after animation completes
        setTimeout(() => {
          setAnimationState('idle');
        }, 750);
      }, 1500);
    }
  }, [isChangingLanguage]);

  return (
    <div
      className={`
        transition-all duration-500 ease-in-out
        ${animationState === 'fadeOut' ? 'page-fade-out' : ''}
        ${animationState === 'fadeIn' ? 'page-fade-in' : ''}
        ${animationState !== 'idle' ? 'overflow-hidden' : ''}
      `}
    >
      {children}
    </div>
  );
}
