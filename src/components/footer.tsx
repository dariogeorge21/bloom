import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              &copy; {new Date().getFullYear()} Blooming Roses. All rights reserved. 
              <br className="hidden sm:inline" />
              <br />Organized by Jesus Youth Pala.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://bit.ly/blooming25Registration"
              className="text-sm text-gray-600 underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 