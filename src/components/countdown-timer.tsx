'use client'

import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the confetti component to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
})

// Import canvas confetti directly
import confetti from 'canvas-confetti'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [totalSecondsLeft, setTotalSecondsLeft] = useState<number>(0)
  const [pulseClass, setPulseClass] = useState<string>('')
  const [showZoomWiggle, setShowZoomWiggle] = useState<boolean>(false)
  const [showFlip, setShowFlip] = useState<boolean>(false)
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<{width: number, height: number}>({ width: 0, height: 0 })
  const [isEventEnded, setIsEventEnded] = useState(false)

  // Ref to track if the countdown has completed
  const countdownCompletedRef = useRef<boolean>(false)

  // Reference to the flip card for positioning confetti
  const flipCardRef = useRef<HTMLDivElement>(null)

  // We don't need to track card position as state anymore since we get it directly in fireConfetti

  // Function to trigger confetti from the card center
  const fireConfetti = () => {
    if (typeof window === 'undefined' || !flipCardRef.current) return

    const rect = flipCardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Convert to normalized coordinates (0-1) for canvas-confetti
    const normalizedX = centerX / window.innerWidth
    const normalizedY = centerY / window.innerHeight

    // Create multiple bursts for a more dramatic effect
    const defaults = {
      origin: { x: normalizedX, y: normalizedY },
      spread: 90,
      ticks: 100,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#3b82f6', '#2563eb', '#ec4899', '#db2777', '#8b5cf6', '#7c3aed', '#f59e0b', '#d97706', '#ffffff', '#fef3c7']
    }

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 80,
        scalar: 1.2,
      })

      confetti({
        ...defaults,
        particleCount: 60,
        scalar: 1.5
      })
    }

    // Fire multiple bursts in sequence
    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
    setTimeout(shoot, 300)
    setTimeout(shoot, 400)
  }

  // Set window size for confetti
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

      const updateWindowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      // Update on resize
      window.addEventListener('resize', updateWindowSize)
      return () => window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  // Use production mode for the countdown
  const testMode = false

  useEffect(() => {
    // For testing purposes, use a closer date in test mode
    const eventDate = testMode
      ? new Date(Date.now() + 25000) // 25 seconds from now for testing
      : new Date('2025-04-24T17:30:00') // Actual event date

    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      // Calculate total seconds left for animation triggers
      const totalSeconds = Math.floor(difference / 1000)
      setTotalSecondsLeft(totalSeconds)

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })

        // Only trigger the completion sequence once
        if (!countdownCompletedRef.current) {
          countdownCompletedRef.current = true
          setPulseClass('')

          // Trigger zoom-wiggle animation
          setShowZoomWiggle(true)

          // After zoom-wiggle completes, show the flip animation
          setTimeout(() => {
            setShowFlip(true)

            // Show confetti after flip animation starts
            setTimeout(() => {
              // We'll get the card position directly in fireConfetti

              // Fire confetti with a small delay to ensure position is updated
              setTimeout(() => {
                // Trigger the canvas confetti
                fireConfetti()

                // Also show the React confetti for additional effect
                setShowConfetti(true)

                // Hide React confetti after 8 seconds
                setTimeout(() => {
                  setShowConfetti(false)
                }, 8000)
              }, 50)
            }, 400)
          }, 2000)
        }
        return
      }

      // Set pulse animation classes based on time remaining
      if (totalSeconds <= 5) {
        setPulseClass('pulse-fast')
      } else if (totalSeconds <= 10) {
        setPulseClass('pulse-medium')
      } else if (totalSeconds <= 20) {
        setPulseClass('pulse-normal')
      } else {
        setPulseClass('')
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [testMode])

  useEffect(() => {
    const eventDate = new Date('2025-04-24T17:30:00')
    const now = new Date()
    
    if (now.getTime() > eventDate.getTime()) {
      setIsEventEnded(true)
    }
  }, [])

  if (isEventEnded) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Blooming Roses 2K25
          </h2>
          <div className="h-px bg-blue-100 w-24 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg mb-4">
            The program has concluded successfully with the abundant blessings of our Almighty God.
          </p>
          <p className="text-blue-600 italic font-medium">
            Thank you for being part of this blessed journey.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            April 24-27, 2025 • Tabore Kodumpidi, Pala
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Test controls removed - using production mode */}

      {/* Confetti effect when countdown completes */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            gravity={0.2}
            colors={[
              '#3b82f6', // blue-500
              '#2563eb', // blue-600
              '#ec4899', // pink-500
              '#db2777', // pink-600
              '#8b5cf6', // violet-500
              '#7c3aed', // violet-600
              '#f59e0b', // amber-500
              '#d97706', // amber-600
              '#ffffff', // white
              '#fef3c7'  // amber-100
            ]}
          />
        </div>
      )}

      <div ref={flipCardRef} className={`flip-card ${showFlip ? 'flipped' : ''} w-full min-h-[220px] ${pulseClass}`}>
        <div className="flip-card-inner w-full min-h-[220px]">
          {/* Front of card (countdown) */}
          <div className={`flip-card-front p-6 ${showZoomWiggle ? 'zoom-wiggle' : ''}`}>
            <h2 className="text-xl font-bold text-blue-800 mb-4">Your Spiritual Journey Begins In:</h2>

            <div className="flex flex-wrap justify-center gap-4 transition-all duration-300">
              <div className="flex flex-col items-center rounded-lg bg-white/80 backdrop-blur-sm p-4 shadow-md border border-blue-100 w-20">
                <span className="text-3xl font-bold text-blue-900">{timeLeft.days}</span>
                <span className="text-sm text-blue-700">Days</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white/80 backdrop-blur-sm p-4 shadow-md border border-blue-100 w-20">
                <span className="text-3xl font-bold text-blue-900">{timeLeft.hours}</span>
                <span className="text-sm text-blue-700">Hours</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white/80 backdrop-blur-sm p-4 shadow-md border border-blue-100 w-20">
                <span className="text-3xl font-bold text-blue-900">{timeLeft.minutes}</span>
                <span className="text-sm text-blue-700">Minutes</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white/80 backdrop-blur-sm p-4 shadow-md border border-blue-100 w-20">
                <span className="text-3xl font-bold text-blue-900">{timeLeft.seconds}</span>
                <span className="text-sm text-blue-700">Seconds</span>
              </div>
            </div>

            {/* Show time remaining in seconds for testing */}
            {totalSecondsLeft <= 20 && totalSecondsLeft > 0 && (
              <div className="mt-4 text-center text-sm text-blue-600 font-medium">
                {totalSecondsLeft} seconds until the journey begins!
              </div>
            )}
          </div>

          {/* Back of card (completion message) */}
          <div className="flip-card-back p-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-5 right-5 w-24 h-24 bg-blue-400 rounded-full blur-xl opacity-30"></div>
              <div className="absolute bottom-5 left-5 w-24 h-24 bg-indigo-400 rounded-full blur-xl opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400 rounded-full blur-xl opacity-20"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Animated sparkles */}
              <span className="absolute -top-2 -left-2 text-2xl sparkle">✨</span>
              <span className="absolute -top-2 -right-2 text-2xl sparkle" style={{ animationDelay: '0.3s' }}>✨</span>
              <span className="absolute -bottom-2 -left-2 text-2xl sparkle" style={{ animationDelay: '0.6s' }}>✨</span>
              <span className="absolute -bottom-2 -right-2 text-2xl sparkle" style={{ animationDelay: '0.9s' }}>✨</span>
              <span className="absolute top-1/2 left-5 text-xl sparkle" style={{ animationDelay: '1.2s' }}>✨</span>
              <span className="absolute top-1/3 right-5 text-xl sparkle" style={{ animationDelay: '1.5s' }}>✨</span>

              {/* Main celebration heading with animation */}
              <div className="mb-4 transform transition-all duration-700 animate-pulse">
                <h3 className="text-4xl font-bold mb-1 text-white drop-shadow-md">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '1s' }}>🎉</span>
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Blooming Roses</span>
                  <span className="inline-block animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>🎉</span>
                </h3>
                <h2 className="text-5xl font-extrabold text-shine">
                  HAS BEGUN!
                </h2>
              </div>

              {/* Energetic subheading */}
              <div className="space-y-3">
                <p className="text-white text-xl font-medium animate-pulse" style={{ animationDuration: '3s' }}>
                  {/* Your spiritual journey starts <span className="font-bold underline decoration-wavy decoration-yellow-200">NOW!</span> */}
                </p>
                <p className="text-blue-100 text-lg italic">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '1.5s' }}>Welcome</span> dear
                  <span className="inline-block animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}></span>
                   <span className="font-bold text-yellow-200"> Children of God</span> !!
                </p>
              </div>

              {/* Call to action button */}
              {/* <div className="mt-6">
                <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 border border-white/30 backdrop-blur-sm shadow-lg">
                  Join Now
                </button>
              </div> */}

              {/* Decorative divider */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-white/60 rounded-full"></div>
                <div className="h-1 w-24 bg-white/30 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-white/60 rounded-full"></div>
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
