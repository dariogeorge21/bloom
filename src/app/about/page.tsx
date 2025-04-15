'use client'

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function AboutPage() {
  // Add effect to handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # character
      const targetId = hash.substring(1);

      // Find the element with the matching ID
      const targetElement = document.getElementById(targetId);

      // If the element exists, scroll to it
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200); // Small delay to ensure page has loaded
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-pink-50 z-[-1]" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30 z-[-1]" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 z-[-1]" />

      <Container>
        <div className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Main Hero Section */}
            <div className="text-center space-y-4 animate-fade-in">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/bloomingroses/logo.png"
                  alt="Blooming Roses Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* <h2 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Blooming Roses 25
                </span>
              </h2> */}
              <p className="text-xl text-blue-800 animate-slide-up font-medium">
                April 24–27 at Tabore Kodumpidi, Pala
              </p>

              <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-pink-100 bg-white p-6 shadow-lg">
                <p className="text-lg font-medium mb-4">
                  Hey Teens! 🎉
                </p>
                <p className="text-gray-700">
                  Get ready for Blooming Roses 25, an exciting and life-changing event just for YOU! Join us from April 24th to April 27th at Tabore Kodumpidi, Pala, for four days filled with fellowship and faith!
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold text-center mb-8">
                <span className="text-blue-800">🔥 Why You Can&apos;t Miss This! 🔥</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm border border-blue-200">
                  <p className="text-lg font-medium text-blue-800 mb-2">✨ Inspiring Sessions & Talks</p>
                  <p className="text-gray-700">Be inspired through powerful talks and interactive sessions designed just for teens.</p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 p-6 shadow-sm border border-pink-200">
                  <p className="text-lg font-medium text-pink-800 mb-2">✨ Fellowship & Unforgettable Memories</p>
                  <p className="text-gray-700">Make new friends and create lasting memories with other teens on the same journey.</p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-sm border border-purple-200">
                  <p className="text-lg font-medium text-purple-800 mb-2">✨ Encounter with Jesus</p>
                  <p className="text-gray-700">Experience a personal encounter with Christ that can transform your life.</p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 shadow-sm border border-indigo-200">
                  <p className="text-lg font-medium text-indigo-800 mb-2">✨ Adoration & Sacramental Life</p>
                  <p className="text-gray-700">Deepen your faith through adoration, prayer, and the sacraments in a supportive community.</p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="p-8 rounded-2xl bg-white shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Event Details</h3>
                <div className="max-w-md mx-auto">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📍</span>
                      <div>
                        <span className="font-medium">Location:</span> Tabore Kodumpidi, Pala
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📅</span>
                      <div>
                        <span className="font-medium">Dates:</span> April 24-27, 2025
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">💰</span>
                      <div>
                        <span className="font-medium">Registration Fee:</span> ₹800
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Outline */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.45s" }}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-md border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Program Outline</h3>
                <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                  Experience a transformative journey of faith through our carefully crafted program designed to nurture your spiritual growth and deepen your relationship with Christ.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Sessions - God's Love */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-800">Sessions - God's Love</h4>
                      </div>
                      <p className="text-gray-700">
                        Immerse yourself in powerful teachings that illuminate the boundless love of God. Through Scripture, tradition, and personal testimony, discover how deeply the Father loves you and how His divine love can transform every aspect of your life.
                      </p>
                    </div>

                    {/* Sharing - Personal Encounter */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-pink-800">Sharing - Personal Encounter</h4>
                      </div>
                      <p className="text-gray-700">
                        Witness the living testimony of faith as participants share their personal encounters with Christ. These authentic stories of conversion, healing, and divine intervention will inspire your own journey and remind you that God continues to work miracles in our lives today.
                      </p>
                    </div>

                    {/* Confession */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-purple-800">Confession</h4>
                      </div>
                      <p className="text-gray-700">
                        Experience the profound mercy of God through the Sacrament of Reconciliation. In this sacred encounter, receive the healing grace of Christ's forgiveness, unburdening your soul and renewing your baptismal purity. Trained priests will be available to guide you through this beautiful sacrament of healing and peace.
                      </p>
                    </div>

                    {/* Counselling */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-indigo-800">Counselling</h4>
                      </div>
                      <p className="text-gray-700">
                        Receive spiritual guidance and personal counseling from experienced mentors who understand the unique challenges facing young Catholics today. These one-on-one sessions provide a safe space to discuss your spiritual journey, ask questions, and receive wisdom rooted in faith and Scripture.
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Group Activities */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-green-800">Group Activities</h4>
                      </div>
                      <p className="text-gray-700">
                        Build community and deepen friendships through engaging group activities that combine fun with faith formation. These interactive experiences foster teamwork, communication, and the joy of Christian fellowship, creating bonds that extend beyond the retreat and support your ongoing spiritual journey.
                      </p>
                    </div>

                    {/* Musical Worship */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-amber-800">Musical Worship</h4>
                      </div>
                      <p className="text-gray-700">
                        Lift your heart and voice in praise through vibrant musical worship that draws you into the presence of God. Experience the power of sacred music to express devotion, gratitude, and surrender, creating moments of profound spiritual connection and communal prayer that transcend words alone.
                      </p>
                    </div>

                    {/* Adoration */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-red-800">Adoration</h4>
                      </div>
                      <p className="text-gray-700">
                        Enter into the sacred silence of Eucharistic Adoration, where Jesus Christ is truly present in the Blessed Sacrament. In this intimate encounter with the Real Presence, experience the transformative power of simply being with Our Lord, allowing His divine love to heal, strengthen, and renew your soul in ways that surpass understanding.
                      </p>
                    </div>

                    {/* Spiritual Reflection */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-teal-800">Spiritual Reflection</h4>
                      </div>
                      <p className="text-gray-700">
                        Embrace moments of guided meditation and personal reflection that invite you to contemplate God's word and presence in your life. These sacred pauses allow the Holy Spirit to speak to your heart, revealing divine wisdom and direction for your unique spiritual journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-blue-800 font-medium italic">
                    "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20
                  </p>
                </div>
              </div>
            </div>

            {/* Meet the Organizers Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-bold text-center mb-8">
                <span className="text-blue-800">📞 Contact Our Team</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Anto's Contact Card */}
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-blue-100 border-2 border-blue-200">
                    <Image
                      src="/images/about/anto.jpg"
                      alt="Anto - Event Coordinator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Anto</h3>
                  <a
                    href="tel:+916282586348"
                    className="flex items-center justify-center px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full text-blue-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    62825 86348
                  </a>
                </div>

                {/* Neyamol's Contact Card */}
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-pink-100 border-2 border-pink-200">
                    <Image
                      src="/images/about/neyamol.jpg"
                      alt="Neyamol - Event Coordinator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Neyamol</h3>
                  <a
                    href="tel:+918590815612"
                    className="flex items-center justify-center px-4 py-2 bg-pink-50 hover:bg-pink-100 rounded-full text-pink-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    85908 15612
                  </a>
                </div>
              </div>
            </div>

            {/* Location Map Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }} id="location">
              <h2 className="text-2xl font-bold text-center mb-6">
                <span className="text-blue-800">📍 Event Location</span>
              </h2>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.8526270281227!2d76.71707817535686!3d9.778534990315858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cf43958d55e7%3A0x346bb31ca4cddecc!2sTabore%20Prarthanalayam%20Pala!5e0!3m2!1sen!2sin!4v1744683518243!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tabore Kodumpidi, Pala, Kottayam, Kerala Map"
                  className="w-full"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/vetjoStbSfGKiTEm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Registration Section */}
            <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-2xl font-bold text-blue-800">Ready to Join Us?</h3>
              <p className="text-lg text-gray-700">
                Scan the QR code and register now! 📲<br/>
                Or use the link below to register
              </p>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="relative w-64 h-64">
                    <Image
                      src="/images/bloomingroses/qr.png"
                      alt="Registration QR Code"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <Link
                  href="https://bit.ly/blooming25Registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg transition-all hover:shadow-xl">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Closing Message */}
            <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-xl font-medium text-blue-800">
                Come, let&apos;s grow in faith and fellowship together! 💖
              </p>
              <p className="text-lg font-bold mt-2 text-pink-600">
                Jesus Youth Pala
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}