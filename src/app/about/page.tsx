import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | Blooming Roses",
  description: "Join Blooming Roses 25, an exciting event for teens from April 24-27 at Tabore Kodumpidi, Pala.",
}

export default function AboutPage() {
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
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Blooming Roses 25
                </span>
              </h2>
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
                <span className="text-blue-800">🔥 Why You Can't Miss This! 🔥</span>
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
                  <p className="text-lg font-medium text-indigo-800 mb-2">✨ Live Adoration & Sacramental Life</p>
                  <p className="text-gray-700">Deepen your faith through adoration, prayer, and the sacraments in a supportive community.</p>
                </div>
              </div>
            </div>
            
            {/* Event Details */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="p-8 rounded-2xl bg-white shadow-md border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Event Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">📍</span> 
                        <div>
                          <span className="font-medium">Location:</span> Tabore Kodumpidi, Pala
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">📅</span> 
                        <div>
                          <span className="font-medium">Dates:</span> April 24-27, 2025
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">💰</span> 
                        <div>
                          <span className="font-medium">Registration Fee:</span> ₹800
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">📞</span> 
                        <div>
                          <span className="font-medium">Anto:</span> 62825 86348
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">📞</span> 
                        <div>
                          <span className="font-medium">Neyamol:</span> 85908 15612
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">🏠</span>
                        <div>
                          <span className="font-medium">Organized by:</span> Jesus Youth Pala
                        </div>
                      </li>
                    </ul>
                  </div>
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
                    {/* Placeholder profile image - replace with actual photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-blue-800 text-5xl font-bold">
                      A
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Anto</h3>
                  <p className="text-blue-700 font-medium mb-2">Event Coordinator</p>
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
                    {/* Placeholder profile image - replace with actual photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-pink-800 text-5xl font-bold">
                      N
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Neyamol</h3>
                  <p className="text-pink-700 font-medium mb-2">Event Coordinator</p>
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
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-bold text-center mb-6">
                <span className="text-blue-800">📍 Event Location</span>
              </h2>
              
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.828268077284!2d76.6658146!3d9.7027335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc042c4df9c7%3A0x9ef8d25fa70bb861!2sTabore%20Ashram%20Kodumpidi!5e0!3m2!1sen!2sin!4v1648675691548!5m2!1sen!2sin" 
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
                <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-md border border-gray-200">
                  {/* Placeholder for QR code - replace with actual QR code image */}
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">QR Code</span>
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
                Come, let's grow in faith and fellowship together! 💖
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