'use client';

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              © 2025 Blooming Roses. All rights reserved.
              <br className="hidden sm:inline" />
              Organized by Jesus Youth Pala.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://bit.ly/blooming25Registration"
              className="rounded-md bg-blue-800 px-4 py-2 text-white text-sm font-medium transition-colors hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getTranslation('common', 'register', language)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}