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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Blooming Roses 25
                </span>
              </h1>
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
            
            {/* Registration Section */}
            <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
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