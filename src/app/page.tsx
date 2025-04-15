import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-[-1]" />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <div className="space-y-4 animate-fade-in">
              <div className="relative w-64 h-64 mx-auto">
                <Image 
                  src="/images/bloomingroses/logo.png" 
                  alt="Blooming Roses Logo" 
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                Organized by Jesus Youth Pala
                <br />
                April 24–27
              </p>
            </div>
            
            {/* Countdown Timer */}
            <div className="w-full max-w-2xl mx-auto">
              <p className="text-lg font-medium mb-4">Event Begins In:</p>
              <CountdownTimer />
            </div>
            
            <Link
              href="https://bit.ly/blooming25Registration"
              className="inline-flex h-11 items-center justify-center rounded-md bg-blue-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Event Highlights */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Spiritual Growth</h3>
              <p className="text-gray-600">
                Join us for prayer sessions and spiritual discussions that will help deepen your faith.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and build relationships that last beyond the event.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Transformation</h3>
              <p className="text-gray-600">
                Experience personal growth and renewal through inspiring talks and worship.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
            >
              Learn More About The Event
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Transformative Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from those who have participated in our previous events
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="italic text-gray-600 mb-4">
                &quot;Blooming Roses was a life-changing experience for me. I found renewed faith and made lifelong friends who support me in my spiritual journey.&quot;
              </p>
              <p className="font-medium">- Sarah, 23</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="italic text-gray-600 mb-4">
                &quot;The worship sessions were so powerful. I felt God&apos;s presence in a way I never had before, and it completely transformed how I approach my faith.&quot;
              </p>
              <p className="font-medium">- Michael, 19</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="italic text-gray-600 mb-4">
                &quot;The community I found at Blooming Roses continues to inspire and encourage me. I&apos;m so grateful for the guidance and fellowship I experienced.&quot;
              </p>
              <p className="font-medium">- Rebecca, 25</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
