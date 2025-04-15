'use client'

import { useState } from 'react'

// Define the questions and answers
const faqData = [
  {
    id: 1,
    question: "Why should I join Blooming Roses?",
    answer: "Blooming Roses is a life-changing event where you'll experience spiritual growth, make lifelong friendships, and deepen your faith. It's designed specifically for teens to help you connect with God and others in a fun, supportive environment."
  },
  {
    id: 2,
    question: "When is this program?",
    answer: "Blooming Roses 25 takes place from April 24-27, 2025. The event begins at 5:00 PM on April 24th."
  },
  {
    id: 3,
    question: "Where is this program held?",
    answer: "The event is held at Tabore Ashram Kodumpidi, Pala, Kottayam, Kerala, India. You can find directions in the 'About' section of our website."
  },
  {
    id: 4,
    question: "How much does it cost to register?",
    answer: "The registration fee is ₹800 per person. This covers all accommodation, meals, and program materials for the four-day event."
  },
  {
    id: 5,
    question: "What should I bring with me?",
    answer: (
      <div className="space-y-3">
        <p>Please bring the following items for the event:</p>
        <div className="mt-3 p-4 bg-amber-100 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="text-amber-800 text-lg mr-2">🔔</span>
              <span className="font-medium text-amber-900">Check List</span>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Holy Bible</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Qurbana Book</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Holy Rosary</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Modest Dressing</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Medicines <span className="text-sm text-amber-800">(if any)</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Toiletries</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Water Bottle</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Blanket</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
              <span>Pillow <span className="text-sm text-amber-800">(if needed)</span></span>
            </li>
          </ul>
        </div>
        <p className="text-sm">Please make sure you have all necessary items to make your stay comfortable.</p>
      </div>
    )
  },
  {
    id: 6,
    question: "How do I register?",
    answer: "You can register by scanning the QR code on our website or by visiting this link: https://bit.ly/blooming25Registration"
  },
  {
    id: 7,
    question: "Who can I contact for more information?",
    answer: "You can contact our event coordinators: Anto (62825 86348) or Neyamol (85908 15612)."
  }
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setSelectedQuestion(null)
    }
  }

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(id)
  }

  const resetChat = () => {
    setSelectedQuestion(null)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChatbot}
        className="bg-blue-800 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 animate-fade-in">
          <div className="bg-blue-800 text-white p-4">
            <h3 className="font-bold text-lg">Blooming Roses Help</h3>
            <p className="text-sm text-blue-100">Were these your questions?</p>
          </div>

          <div className="h-96 overflow-y-auto p-4">
            {selectedQuestion === null ? (
              <>
                <p className="text-gray-600 mb-4">Hello! What would you like to know about Blooming Roses?</p>
                <div className="space-y-2">
                  {faqData.map((faq) => (
                    <button
                      key={faq.id}
                      className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm transition-colors"
                      onClick={() => handleQuestionClick(faq.id)}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-800 text-sm">
                  {faqData.find(faq => faq.id === selectedQuestion)?.question}
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                  {faqData.find(faq => faq.id === selectedQuestion)?.answer}
                </div>
                <button 
                  onClick={resetChat}
                  className="text-blue-800 hover:text-blue-600 text-sm font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to questions
                </button>
              </div>
            )}
          </div>
          
          <div className="border-t p-3 text-xs text-center text-gray-500">
            Powered by Jesus Youth Pala
          </div>
        </div>
      )}
    </div>
  )
} 