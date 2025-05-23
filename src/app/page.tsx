'use client';

import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function Home() {
  const { language } = useLanguage();
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
                {getTranslation('home', 'title', language)} <span className="text-pink-600">2K25</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                {getTranslation('home', 'subtitle', language)}  <br />
                <br />
                <span className="font-medium text-blue-700">{getTranslation('home', 'eventDate', language)}</span>
              </p><br />

              {/* Spiritual quote */}
              <div className="mt-4 mx-auto max-w-2xl">
                <p className="italic text-gray-600 border-l-4 border-blue-200 pl-4 py-2 text-lg">
                  &ldquo;{getTranslation('home', 'quote', language)}&rdquo;
                  <span className="block text-sm mt-1 text-right">{getTranslation('home', 'quoteReference', language)}</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="w-full max-w-2xl mx-auto">
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
                {getTranslation('common', 'register', language)}
              </Link>
              <Link
                href="/about#location"
                className="inline-flex h-12 items-center justify-center rounded-full bg-pink-600 px-8 text-base font-medium text-white shadow-lg transition-transform hover:bg-pink-500 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {getTranslation('home', 'getDirections', language)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Photo Highlight Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-800">{language === 'en' ? 'Glimpses of Faith & Fellowship' : 'വിശ്വാസത്തിന്റെയും കൂട്ടായ്മയുടെയും നിമിഷങ്ങൾ'}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {language === 'en' ? 'Experience the joy and transformation of past Blooming Roses events through our collection of cherished memories' : 'ഞങ്ങളുടെ ചെറുശേഖരത്തിലൂടെ മുൻ ബ്ലൂമിംഗ് റോസസ് ഇവന്റുകളുടെ സന്തോഷവും പരിവർത്തനവും അനുഭവിക്കുക'}
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
                    <p className="text-xs uppercase tracking-wider opacity-75">{language === 'en' ? 'WATCH NOW' : 'ഇപ്പോൾ കാണുക'}</p>
                    <h3 className="text-xl font-bold">{language === 'en' ? 'Previous Blooming Roses' : 'മുൻ ബ്ലൂമിംഗ് റോസസ്'}</h3>
                  </div>
                </div>
                <p className="mb-4 opacity-85">
                  {language === 'en' ? 'See the beautiful moments and transformations from our past events' : 'ഞങ്ങളുടെ മുൻ ഇവന്റുകളിൽ നിന്നുള്ള മനോഹരമായ നിമിഷങ്ങളും പരിവർത്തനങ്ങളും കാണുക'}
                </p>
                <span className="inline-flex items-center font-medium text-white/90 group-hover:underline">
                  {language === 'en' ? 'View All Videos' : 'എല്ലാ വീഡിയോകളും കാണുക'}
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
                    <p className="text-xs uppercase tracking-wider opacity-75">{language === 'en' ? 'BROWSE GALLERY' : 'ഗാലറി ബ്രൗസ് ചെയ്യുക'}</p>
                    <h3 className="text-xl font-bold">{language === 'en' ? 'Photo Memories' : 'ഫോട്ടോ ഓർമ്മകൾ'}</h3>
                  </div>
                </div>
                <p className="mb-4 opacity-85">
                  {language === 'en' ? 'Explore our collection of moments capturing joy, friendship and spiritual growth' : 'സന്തോഷം, സൗഹൃദം, ആത്മീയ വളർച്ച എന്നിവ പകർത്തുന്ന നിമിഷങ്ങളുടെ ഞങ്ങളുടെ ശേഖരം പര്യവേക്ഷണം ചെയ്യുക'}
                </p>
                <span className="inline-flex items-center font-medium text-white/90 group-hover:underline">
                  {language === 'en' ? 'View All Photos' : 'എല്ലാ ഫോട്ടോകളും കാണുക'}
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{language === 'en' ? 'Why Blooming Roses is Life-Changing' : 'എന്തുകൊണ്ട് ബ്ലൂമിംഗ് റോസസ് ജീവിതം മാറ്റുന്നു'}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'en' ? 'Discover the unique aspects of our event that create lasting spiritual impact and personal transformation' : 'സ്ഥായിയായ ആത്മീയ സ്വാധീനവും വ്യക്തിപരമായ പരിവർത്തനവും സൃഷ്ടിക്കുന്ന ഞങ്ങളുടെ ഇവന്റിന്റെ അനന്യമായ വശങ്ങൾ കണ്ടെത്തുക'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-800">{language === 'en' ? 'Spiritual Growth' : 'ആത്മീയ വളർച്ച'}</h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Deepen your relationship with God through inspiring sessions, adoration, and a vibrant prayer life.' : 'പ്രചോദനാത്മകമായ സെഷനുകൾ, ആരാധന, സജീവമായ പ്രാർത്ഥനാ ജീവിതം എന്നിവയിലൂടെ ദൈവവുമായുള്ള നിങ്ങളുടെ ബന്ധം ആഴപ്പെടുത്തുക.'}
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-pink-700">{language === 'en' ? 'Community' : 'കൂട്ടായ്മ'}</h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Form meaningful connections with peers who share your values and faith journey.' : 'നിങ്ങളുടെ മൂല്യങ്ങളും വിശ്വാസ യാത്രയും പങ്കിടുന്ന സഹപാഠികളുമായി അർത്ഥവത്തായ ബന്ധങ്ങൾ രൂപപ്പെടുത്തുക.'}
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-purple-700">{language === 'en' ? 'Transformation' : 'പരിവർത്തനം'}</h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Experience lasting personal growth through encounters with Christ that will change your life.' : 'നിങ്ങളുടെ ജീവിതം മാറ്റുന്ന ക്രിസ്തുവുമായുള്ള കൂടിക്കാഴ്ചകളിലൂടെ സ്ഥായിയായ വ്യക്തിപരമായ വളർച്ച അനുഭവിക്കുക.'}
              </p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">{getTranslation('home', 'testimonialTitle', language)}</h3>
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
                      &ldquo;{language === 'en' ? 'It was only after the Blooming Rose program that I was able to love and know the Jesus within me more. I came to that program for the opportunity to spend time with my friends for two or three days, but when I returned to my home, I realized how I could spend the rest of my life with Jesus.' : 'ബ്ലൂമിംഗ് റോസ് പ്രോഗ്രാമിന് ശേഷം മാത്രമാണ് എനിക്ക് എന്നിലുള്ള യേശുവിനെ കൂടുതൽ സ്നേഹിക്കാനും അറിയാനും കഴിഞ്ഞത്. രണ്ടോ മൂന്നോ ദിവസം എന്റെ സുഹൃത്തുക്കളുമായി സമയം ചെലവഴിക്കാനുള്ള അവസരത്തിനായി ഞാൻ ആ പ്രോഗ്രാമിൽ പങ്കെടുത്തു, എന്നാൽ ഞാൻ വീട്ടിലേക്ക് മടങ്ങിയപ്പോൾ, എനിക്ക് എന്റെ ജീവിതത്തിന്റെ ബാക്കി ഭാഗം യേശുവിനോടൊപ്പം എങ്ങനെ ചെലവഴിക്കാൻ കഴിയുമെന്ന് മനസ്സിലായി.'}&rdquo;
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
                      &ldquo;{language === 'en' ? 'You did not choose me, but I chose you (John. 15:16). I understood His call for me as a child of GOD, who needs to be giving His love which I received.' : 'നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തതല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തതാണ് (യോഹന്നാൻ. 15:16). ഞാൻ സ്വീകരിച്ച അവന്റെ സ്നേഹം നൽകേണ്ട ദൈവത്തിന്റെ കുഞ്ഞായി എന്നോടുള്ള അവന്റെ വിളി ഞാൻ മനസ്സിലാക്കി.'}&rdquo;
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
                      &ldquo;{language === 'en' ? 'Those 4 days I experienced Love of God through many people. It spiritually helped me a lot. Got the chance to be more closer to Jesus.' : 'ആ 4 ദിവസങ്ങളിൽ ഞാൻ നിരവധി ആളുകളിലൂടെ ദൈവത്തിന്റെ സ്നേഹം അനുഭവിച്ചു. അത് എന്നെ ആത്മീയമായി വളരെയധികം സഹായിച്ചു. യേശുവിനോട് കൂടുതൽ അടുക്കാനുള്ള അവസരം ലഭിച്ചു.'}&rdquo;
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
                      alt="Angel Rose Babu"
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
                      &ldquo;{language === 'en' ? 'Amidst \'Blooming roses\', my soul found its path, which was the stage for crucial turning points in my life! The experience I had through worship, confession, etc. enabled me to walk along with Eeshopa.' : '\'ബ്ലൂമിംഗ് റോസസ്\' മധ്യേ, എന്റെ ആത്മാവ് അതിന്റെ പാത കണ്ടെത്തി, അത് എന്റെ ജീവിതത്തിലെ നിർണായക വഴിത്തിരിവുകൾക്കുള്ള വേദിയായിരുന്നു! ആരാധന, കുമ്പസാരം തുടങ്ങിയവയിലൂടെ എനിക്കുണ്ടായ അനുഭവം ഈശോപ്പയോടൊപ്പം നടക്കാൻ എന്നെ പ്രാപ്തമാക്കി.'}&rdquo;
                    </p>
                    <p className="font-medium text-purple-800">Angel Rose Babu</p>
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
              {language === 'en' ? 'Learn More About The Event' : 'ഇവന്റിനെക്കുറിച്ച് കൂടുതൽ അറിയുക'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
