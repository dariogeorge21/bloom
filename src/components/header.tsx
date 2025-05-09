'use client';

import Link from "next/link"
import Image from "next/image"

export function Header() {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/bloomingroses/logo.png"
                  alt="Blooming Roses Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/"
                className="transition-colors hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-gray-600"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="transition-colors hover:text-gray-600"
              >
                Gallery
              </Link>
              <Link
                href="https://bit.ly/blooming25Registration"
                className="rounded-md bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}