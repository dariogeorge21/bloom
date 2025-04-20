import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define gallery items
const galleryItems = [
  {
    id: 1,
    title: 'Blooming Roses 24',
    description: 'Highlights from our previous event',
    imageUrl: '/images/gallery/event1.jpg',
  },
  {
    id: 2,
    title: 'Worship Session',
    description: 'Praising the Lord together',
    imageUrl: '/images/gallery/event2.jpg',
  },
  {
    id: 3,
    title: 'Group Activities',
    description: 'Building community through fun activities',
    imageUrl: '/images/gallery/event3.jpg',
  },
];

// GET handler for the API route
export async function GET() {
  try {
    // Return gallery items as JSON
    return NextResponse.json({ items: galleryItems });
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}