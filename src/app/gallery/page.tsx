'use client'

import { useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Sample gallery items - in a real application, these would be loaded from a data source
const galleryItems = [
  {
    id: 1,
    title: "Prayer Session",
    description: "A moment of deep prayer and reflection",
    // These would be actual images in production. Using placeholder for demo
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1170&auto=format&fit=crop",
    alt: "Group prayer session",
  },
  {
    id: 2,
    title: "Community Gathering",
    description: "Young people coming together in faith",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop",
    alt: "Community gathering",
  },
  {
    id: 3,
    title: "Worship Time",
    description: "Praising through music and song",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1170&auto=format&fit=crop",
    alt: "Worship session",
  },
  {
    id: 4,
    title: "Small Group Discussion",
    description: "Sharing faith experiences in small groups",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170&auto=format&fit=crop",
    alt: "Small group discussion",
  },
  {
    id: 5,
    title: "Team Building",
    description: "Activities that strengthen bonds",
    src: "https://images.unsplash.com/photo-1582213782179-e0d4aff5ab7b?q=80&w=1170&auto=format&fit=crop",
    alt: "Team building activity",
  },
  {
    id: 6,
    title: "Mentorship",
    description: "Guidance from experienced members",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1169&auto=format&fit=crop",
    alt: "Mentorship session",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 z-[-1]" />
      
      <Container>
        <div className="py-16 md:py-20">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in">
                Event Gallery
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-muted-foreground animate-slide-up">
                Moments captured from our spiritual journey together
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="overflow-hidden rounded-lg border shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] animate-fade-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="relative h-60 w-full">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <div className="relative h-[70vh] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 