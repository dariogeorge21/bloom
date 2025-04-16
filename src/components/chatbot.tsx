'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { faqData, chatbotUI } from '@/lib/chatbot-data'

export function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  // Get the appropriate language data
  const currentFaqData = faqData[language];
  const uiText = chatbotUI[language];

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
            <h3 className="font-bold text-lg">{uiText.title}</h3>
            <p className="text-sm text-blue-100">{uiText.subtitle}</p>
          </div>

          <div className="h-96 overflow-y-auto p-4">
            {selectedQuestion === null ? (
              <>
                <p className="text-gray-600 mb-4">{uiText.greeting}</p>
                <div className="space-y-2">
                  {currentFaqData.map((faq) => (
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
                  {currentFaqData.find(faq => faq.id === selectedQuestion)?.question}
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                  {currentFaqData.find(faq => faq.id === selectedQuestion)?.answer}
                </div>
                <button
                  onClick={resetChat}
                  className="text-blue-800 hover:text-blue-600 text-sm font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {uiText.backToQuestions}
                </button>
              </div>
            )}
          </div>

          <div className="border-t p-3 text-xs text-center text-gray-500">
            {uiText.poweredBy}
          </div>
        </div>
      )}
    </div>
  )
}