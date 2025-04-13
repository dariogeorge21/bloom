'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Sample gallery items - in a real application, these would come from a data source
const imageGalleryItems = [
  {
    id: 1,
    title: "Worship Session",
    description: "A moment of deep prayer and collective worship",
    src: "/images/worship.jpg",
    alt: "Worship session with candles lit",
    category: "worship",
  },
  {
    id: 2,
    title: "Community Gathering",
    description: "Young people coming together in faith and fellowship",
    src: "/images/worship.jpg",
    alt: "Group of young people in a circle",
    category: "community",
  },
  {
    id: 3,
    title: "Group Prayer",
    description: "Seeking God's presence together",
    src: "/images/worship.jpg",
    alt: "Group prayer with hands raised",
    category: "prayer",
  },
  {
    id: 4,
    title: "Scripture Study",
    description: "Diving deeper into God's word",
    src: "/images/worship.jpg", 
    alt: "Bible study session",
    category: "study",
  },
  {
    id: 5,
    title: "Peaceful Reflection",
    description: "Finding quiet moments to connect with God",
    src: "/images/worship.jpg",
    alt: "Person in quiet reflection with Bible",
    category: "reflection",
  },
  {
    id: 6,
    title: "Fellowship Time",
    description: "Building relationships that strengthen faith",
    src: "/images/worship.jpg",
    alt: "Friends sharing food and conversation",
    category: "fellowship",
  },
  {
    id: 7,
    title: "Praise and Worship",
    description: "Expressing joy through music and song",
    src: "/images/worship.jpg",
    alt: "Praise and worship music session",
    category: "worship",
  },
  {
    id: 8,
    title: "Outdoor Gathering",
    description: "Experiencing God's presence in nature",
    src: "/images/worship.jpg",
    alt: "Group gathered outdoors",
    category: "community",
  },
]

const videoGalleryItems = [
  {
    id: 1,
    title: "Worship Highlights",
    description: "Beautiful moments from our worship sessions",
    thumbnail: "/images/worship.jpg",
    videoUrl: "/videos/video-198.mp4", // Replace with actual videos
    category: "worship",
  },
  {
    id: 2,
    title: "Testimonies of Faith",
    description: "Participants share their transformative experiences",
    thumbnail: "/images/worship.jpg",
    videoUrl: "/videos/video-155.mp4", // Replace with actual videos
    category: "testimonies",
  },
  {
    id: 3,
    title: "Event Recap",
    description: "Looking back at the joy and growth from our last event",
    thumbnail: "/images/worship.jpg",
    videoUrl: "/videos/video-116.mp4", // Replace with actual videos
    category: "event",
  },
  {
    id: 4,
    title: "Prayer Night",
    description: "An evening of collective prayer and intercession",
    thumbnail: "/images/worship.jpg",
    videoUrl: "/videos/video-97.mp4", // Replace with actual videos
    category: "prayer",
  },
]

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('photos')
  const [filter, setFilter] = useState('all')
  
  // Filter gallery items based on category
  const filteredImages = filter === 'all' 
    ? imageGalleryItems 
    : imageGalleryItems.filter(item => item.category === filter)
    
  const filteredVideos = filter === 'all'
    ? videoGalleryItems
    : videoGalleryItems.filter(item => item.category === filter)
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return
      
      if (activeTab === 'photos' && selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigateImages('prev')
        } else if (e.key === 'ArrowRight') {
          navigateImages('next')
        } else if (e.key === 'Escape') {
          setIsDialogOpen(false)
        }
      } else if (activeTab === 'videos' && selectedVideoIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigateVideos('prev')
        } else if (e.key === 'ArrowRight') {
          navigateVideos('next')
        } else if (e.key === 'Escape') {
          setIsDialogOpen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isDialogOpen, selectedImageIndex, selectedVideoIndex, activeTab])
  
  const navigateImages = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return
    
    const newIndex = direction === 'prev'
      ? (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (selectedImageIndex + 1) % filteredImages.length
      
    setSelectedImageIndex(newIndex)
  }
  
  const navigateVideos = (direction: 'prev' | 'next') => {
    if (selectedVideoIndex === null) return
    
    const newIndex = direction === 'prev'
      ? (selectedVideoIndex - 1 + filteredVideos.length) % filteredVideos.length
      : (selectedVideoIndex + 1) % filteredVideos.length
      
    setSelectedVideoIndex(newIndex)
  }
  
  const openImageDialog = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }
  
  const openVideoDialog = (index: number) => {
    setSelectedVideoIndex(index)
    setIsDialogOpen(true)
  }
  
  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedImageIndex(null)
    setSelectedVideoIndex(null)
  }

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Worship', value: 'worship' },
    { label: 'Community', value: 'community' },
    { label: 'Prayer', value: 'prayer' },
    { label: 'Study', value: 'study' },
    { label: 'Fellowship', value: 'fellowship' },
    { label: 'Reflection', value: 'reflection' },
  ]
  
  return (
    <div className="relative">
      {/* Background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-[-1]" />
      
      <div className="relative py-12 md:py-16">
        <Container>
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 animate-fade-in">
              <span className="text-blue-800">Gallery</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 animate-slide-up">
              Moments captured during our spiritual journey together, reflecting the joy, community, and faith we share
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category.value
                    ? 'bg-blue-800 text-white' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Tabs */}
          <div className="mb-8 flex justify-center border-b border-gray-200">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'photos' 
                  ? 'border-blue-800 text-blue-800' 
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'videos' 
                  ? 'border-blue-800 text-blue-800' 
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              Videos
            </button>
          </div>
          
          {/* Photos Grid */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openImageDialog(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((item, index) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openVideoDialog(index)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
      
      {/* Image Lightbox Dialog */}
      <Dialog open={isDialogOpen && selectedImageIndex !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none overflow-hidden rounded-lg" onEscapeKeyDown={handleDialogClose}>
          {selectedImageIndex !== null && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                fill
                className="object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImages('prev')
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImages('next')
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-lg font-medium">{filteredImages[selectedImageIndex].title}</h3>
                <p className="text-sm text-gray-300">{filteredImages[selectedImageIndex].description}</p>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={handleDialogClose}
                className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Video Lightbox Dialog */}
      <Dialog open={isDialogOpen && selectedVideoIndex !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none overflow-hidden rounded-lg" onEscapeKeyDown={handleDialogClose}>
          {selectedVideoIndex !== null && (
            <div className="relative w-full h-[80vh]">
              <iframe
                src={filteredVideos[selectedVideoIndex].videoUrl}
                title={filteredVideos[selectedVideoIndex].title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  navigateVideos('prev')
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Previous video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  navigateVideos('next')
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Next video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              
              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white z-10">
                <h3 className="text-lg font-medium">{filteredVideos[selectedVideoIndex].title}</h3>
                <p className="text-sm text-gray-300">{filteredVideos[selectedVideoIndex].description}</p>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={handleDialogClose}
                className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 