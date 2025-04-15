import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background with spiritual theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-pink-50 z-[-1]" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 z-[-1]" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 z-[-1]" />

      {/* Decorative elements for spiritual theme */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z" fill="currentColor" className="text-blue-800" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 rotate-12">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z" fill="currentColor" className="text-pink-700" />
        </svg>
      </div>

      {/* Enhanced Hero Section */}
      <section className="py-20 md:py-28">
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
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                Blooming Roses <span className="text-pink-600">2K25</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                A spiritual journey for teens organized by Jesus Youth Pala  <br />
                <br />
                <span className="font-medium text-blue-700">April 24–27, 2025 • Tabore Kodumpidi, Pala</span>
              </p><br />

              {/* Spiritual quote */}
              <div className="mt-4 mx-auto max-w-2xl">
                <p className="italic text-gray-600 border-l-4 border-blue-200 pl-4 py-2 text-lg">
                  &ldquo;Rejoice in hope&rdquo;
                  <span className="block text-sm mt-1 text-right">Romans 12:12</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
              <p className="text-xl font-medium mb-4 text-blue-800">Your Spiritual Journey Begins In:</p>
              <CountdownTimer />
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://bit.ly/blooming25Registration"
                className="inline-flex h-12 items-center justify-center rounded-full bg-blue-800 px-8 text-base font-medium text-white shadow-lg transition-transform hover:bg-blue-700 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
                Register Now
              </Link>
              <Link
                href="/about#location"
                className="inline-flex h-12 items-center justify-center rounded-full bg-pink-600 px-8 text-base font-medium text-white shadow-lg transition-transform hover:bg-pink-500 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Photo Highlight Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-800">Glimpses of Faith & Fellowship</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the joy and transformation of past Blooming Roses events through our collection of cherished memories
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Video highlight card */}
            <Link
              href="/gallery?tab=videos"
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 z-10" />
          <Image
                src="https://res.cloudinary.com/dobqxxtml/video/upload/so_2.7/v1744695372/bloom_24_promo_onxbtt.jpg"
                alt="Prayer session from previous Blooming Roses"
                width={640}
                height={360}
                className="w-full object-cover h-64 md:h-72 transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-75">WATCH NOW</p>
                    <h3 className="text-xl font-bold">Previous Blooming Roses</h3>
                  </div>
                </div>
                <p className="mb-4 opacity-85">
                  See the beautiful moments and transformations from our past events
                </p>
                <span className="inline-flex items-center font-medium text-white/90 group-hover:underline">
                  View All Videos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Photo highlight card */}
            <Link
              href="/gallery?tab=photos"
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-pink-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/70 to-purple-900/70 z-10" />
          <Image
                src="https://res.cloudinary.com/dobqxxtml/image/upload/v1744693380/previous_blooming_nkakyy.jpg"
                alt="Photos from previous Blooming Roses"
                width={640}
                height={360}
                className="w-full object-cover h-64 md:h-72 transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-75">BROWSE GALLERY</p>
                    <h3 className="text-xl font-bold">Photo Memories</h3>
                  </div>
                </div>
                <p className="mb-4 opacity-85">
                  Explore our collection of moments capturing joy, friendship and spiritual growth
                </p>
                <span className="inline-flex items-center font-medium text-white/90 group-hover:underline">
                  View All Photos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Event Highlights */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-[-1]" />

        {/* Spiritual symbol decorations */}
        <div className="absolute top-20 right-20 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800">
            <path d="M12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4" />
            <path d="M12 22C7.03 22 3 17.97 3 13C3 8.03 7.03 4 12 4" />
            <path d="M12 22L12 4" />
            <path d="M4.93 7.93L19.07 18.07" />
            <path d="M19.07 7.93L4.93 18.07" />
            <circle cx="12" cy="13" r="2" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Blooming Roses is Life-Changing</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the unique aspects of our event that create lasting spiritual impact and personal transformation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-800">Spiritual Growth</h3>
              <p className="text-gray-600">
                Deepen your relationship with God through inspiring sessions, adoration, and a vibrant prayer life.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-pink-700">Community</h3>
              <p className="text-gray-600">
                Form meaningful connections with peers who share your values and faith journey.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-purple-700">Transformation</h3>
              <p className="text-gray-600">
                Experience lasting personal growth through encounters with Christ that will change your life.
              </p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">What Participants Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 - Ann */}
              <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <Image
                      src="/images/testimonies/ann.jpg"
                      alt="Ann Maria Saju"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <svg className="h-6 w-6 text-blue-300 mb-2 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic mb-3 text-sm">
                      &ldquo;It was only after the Blooming Rose program that I was able to love and know the Jesus within me more. I came to that program for the opportunity to spend time with my friends for two or three days, but when I returned to my home, I realized how I could spend the rest of my life with Jesus.&rdquo;
                    </p>
                    <p className="font-medium text-blue-800">Ann Maria Saju</p>
                    <p className="text-xs text-gray-500">Participant • Blooming Roses &apos;23</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Agnes */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <Image
                      src="/images/testimonies/agnes.jpg"
                      alt="Agnes Maria Sibi"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <svg className="h-6 w-6 text-pink-300 mb-2 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic mb-3 text-sm">
                      &ldquo;You did not choose me, but I chose you (John. 15:16). I understood His call for me as a child of GOD, who needs to be giving His love which I received.&rdquo;
                    </p>
                    <p className="font-medium text-pink-800">Agnes Maria Sibi</p>
                    <p className="text-xs text-gray-500">Participant • Blooming Roses &apos;21</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Tija */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <Image
                      src="/images/testimonies/tija.jpg"
                      alt="Tija Thomas"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <svg className="h-6 w-6 text-indigo-300 mb-2 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic mb-3 text-sm">
                      &ldquo;Those 4 days I experienced Love of God through many people. It spiritually helped me a lot. Got the chance to be more closer to Jesus.&rdquo;
                    </p>
                    <p className="font-medium text-indigo-800">Tija Thomas</p>
                    <p className="text-xs text-gray-500">Participant • Blooming Roses &apos;24</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 - Angel */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
          <Image
                      src="/images/testimonies/angel.jpg"
                      alt="Angel Rose"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <svg className="h-6 w-6 text-purple-300 mb-2 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic mb-3 text-sm">
                      &ldquo;Amidst &apos;Blooming roses&apos;, my soul found its path, which was the stage for crucial turning points in my life! The experience I had through worship, confession, etc. enabled me to walk along with Eeshopa.&rdquo;
                    </p>
                    <p className="font-medium text-purple-800">Angel Rose</p>
                    <p className="text-xs text-gray-500">Participant • Blooming Roses &apos;24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-blue-800 px-8 text-base font-medium text-white shadow-lg transition-transform hover:bg-blue-700 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Learn More About The Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
