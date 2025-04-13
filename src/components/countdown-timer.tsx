'use client'

import { useEffect, useState } from 'react'

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

  useEffect(() => {
    // Set the event date - April 24, 2025
    const eventDate = new Date('2025-04-24T00:00:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()
      
      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-sm text-gray-600">Days</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm text-gray-600">Hours</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm text-gray-600">Minutes</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm text-gray-600">Seconds</span>
      </div>
    </div>
  )
} 