'use client'

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Sample gallery items - Replace these with your Cloudinary URLs
const imageGalleryItems = [
  {
    id: 1,
    title: "Worship Session",
    description: "A moment of deep prayer and collective worship",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744692497/BLOOMING_ROSES_25_A_Celebration_of_Teens_Hey_Teens_Get_ready_for_Blooming_Roses_25_an_exciting_and_life-changing_event_just_for_YOU_Join_us_from_April_24th_to_April_27th_at_Tabore_Kodumpidi_Pala_for_four_days_fil_flyftm.webp",
    alt: "Worship session with candles lit",
  },
  // Add more items with Cloudinary URLs
  {
    id: 2,
    title: "Community Gathering",
    description: "Young people coming together in faith and fellowship",
    src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", // Example - replace with your URL
    alt: "Group of young people in a circle",
  },
  
]

// Sample video gallery items - only needs videoUrl and description
const videoGalleryItems = [
  {
    id: 1,
    title: "Blooming Roses 2022",
    description: "Beautiful moments from the Blooming Roses 2022",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695447/bloom_2k22_jgdp3j.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695447/bloom_2k22_jgdp3j.jpg",
    category: "worship",
  },
  // Add more items with Cloudinary URLs
  {
    id: 2,
    title: "Testimonies of Faith",
    description: "Prayer and worship session from the 2022 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695425/blooming_22_dqxhka.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695425/blooming_22_dqxhka.jpg",
    category: "testimonies",
  },
  {
    id: 3,
    title: "Event Recap",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695376/1st_day_highlights_-_23bloom_z06cp2.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695376/1st_day_highlights_-_23bloom_z06cp2.jpg",
    category: "event",
  },
  {
    id: 4,
    title: "Prayer Night",
    description: "Shots of the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695352/1st_day_highlights_-_24bloom_ioyeij.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695352/1st_day_highlights_-_24bloom_ioyeij.jpg",
    category: "prayer",
  },
  {
    id: 5,
    title: "Testimonies of Faith",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695333/0th_day_highlights_-_23bloom_dwkbpz.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695333/0th_day_highlights_-_23bloom_dwkbpz.jpg",
    category: "testimonies",
  },
  {
    id: 6,
    title: "Testimonies of Faith",
    description: "Highlights from the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695334/2nd_day_highlights_-_24bloom_h4zswd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695334/2nd_day_highlights_-_24bloom_h4zswd.jpg",
    category: "testimonies",
  },
  {
    id: 7,
    title: "Testimonies of Faith",
    description: "Promo video for the 2022 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695438/bloom_22_qsgt2p.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695438/bloom_22_qsgt2p.jpg",
    category: "testimonies",
  },
  {
    id: 8,
    title: "Testimonies of Faith",
    description: "Summation of the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695415/23_bloom_summation_uvlawz.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695415/23_bloom_summation_uvlawz.jpg",
    category: "testimonies",
  },
  {
    id: 9,
    title: "Testimonies of Faith",
    description: "Highlights from the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695352/0th_day_highlights_-_24bloom_yfmjpi.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695352/0th_day_highlights_-_24bloom_yfmjpi.jpg",
    category: "testimonies",
  },
  {
    id: 10,
    title: "Testimonies of Faith",
    description: "Promo video for the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695409/24_bloom_promo_qcecfb.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695409/24_bloom_promo_qcecfb.jpg",
    category: "testimonies",
  },
  {
    id: 11,
    title: "Testimonies of Faith",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695345/blloom_23_qesx6y.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695345/blloom_23_qesx6y.jpg",
    category: "testimonies",
  },
  {
    id: 12,
    title: "Testimonies of Faith",
    description: "Promo video for the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695372/bloom_24_promo_onxbtt.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 13,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700110/Blooming_Roses_25_is_here....But_spots_are_disappearing_FAST_LAST_CHANCE_ALERT_REGISTER_NOW_BEFORE_IT_S_TOO_LATE_CLICK_HERE_TO_SECURE_YOUR_SPOT_https---bit.ly-blooming25Registration_Seriously_d_ufuckp.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 14,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700107/BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Kodumpidi_Pala_Registration_Fee-_800_For_-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit.ly-blooming_zxtbvd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 15,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700107/BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Kodumpidi_Pala_Registration_Fee-_800_For_-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit.ly-blooming_zxtbvd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 16,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700102/1%E2%83%A35%E2%83%A3_days_to_go..._BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Prarthanalayam_Kodumpidi_Pala_For_-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit._pd3gl6.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 17,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700090/1%E2%83%A38%E2%83%A3_days_to_go..._BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Prarthanalayam_Kodumpidi_Pala_For-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit.ly-bloom_jus0uw.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  }
]

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('photos')
  
  // Check for tab query parameter on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    
    if (tabParam === 'videos' || tabParam === 'photos') {
      setActiveTab(tabParam);
      // Update the URL without refreshing the page
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('tab', tabParam);
      window.history.replaceState({}, '', newUrl);
      
      // If videos tab is selected, scroll to the videos section
      if (tabParam === 'videos') {
        setTimeout(() => {
          const videosElement = document.getElementById('videos');
          if (videosElement) {
            videosElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // Small delay to ensure the tab has changed
      }
    }
  }, []);

  const navigateImages = useCallback((direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return
    
    const newIndex = direction === 'prev'
      ? (selectedImageIndex - 1 + imageGalleryItems.length) % imageGalleryItems.length
      : (selectedImageIndex + 1) % imageGalleryItems.length
      
    setSelectedImageIndex(newIndex)
  }, [selectedImageIndex])
  
  const navigateVideos = useCallback((direction: 'prev' | 'next') => {
    if (selectedVideoIndex === null) return
    
    const newIndex = direction === 'prev'
      ? (selectedVideoIndex - 1 + videoGalleryItems.length) % videoGalleryItems.length
      : (selectedVideoIndex + 1) % videoGalleryItems.length
      
    setSelectedVideoIndex(newIndex)
  }, [selectedVideoIndex])
  
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
  }, [isDialogOpen, selectedImageIndex, selectedVideoIndex, activeTab, navigateImages, navigateVideos])
  
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
              id="videos-tab"
            >
              Videos
            </button>
          </div>
          
          {/* Previous Blooming Roses heading - now moved above the videos grid */}
          {activeTab === 'videos' && (
            <div className="mb-8 text-center" id="videos">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Previous Blooming Roses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click & watch highlights from our past events and relive the beautiful moments
              </p>
            </div>
          )}
          
          {/* Photos Grid */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {imageGalleryItems.map((item, index) => (
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
                      unoptimized={item.src.startsWith('https://')} // Don't optimize external URLs
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGalleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openVideoDialog(index)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* Video thumbnail */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={item.thumbnailUrl}
                        alt={`Thumbnail for ${item.description}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                        priority={index < 4} // Prioritize loading for first 4 images
                      />
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.description}</p>
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
                src={imageGalleryItems[selectedImageIndex].src}
                alt={imageGalleryItems[selectedImageIndex].alt}
                fill
                className="object-contain"
                unoptimized={imageGalleryItems[selectedImageIndex].src.startsWith('https://')}
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
                <p className="text-sm text-gray-300">{imageGalleryItems[selectedImageIndex].description}</p>
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
        <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden rounded-lg" onEscapeKeyDown={handleDialogClose}>
          {selectedVideoIndex !== null && (
            <div className="relative flex items-center justify-center w-full max-h-[90vh] bg-black">
              {/* Video player using HTML5 video element */}
              <video 
                src={videoGalleryItems[selectedVideoIndex].videoUrl}
                className="max-w-full max-h-[80vh] object-contain"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white z-10">
                <p className="text-sm text-gray-300">{videoGalleryItems[selectedVideoIndex].description}</p>
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