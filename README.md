# Blooming Roses Event Website

A frontend-only religious event website for "Blooming Roses" organized by Jesus Youth Pala. The website is built using Next.js and Shadcn/UI components, featuring a clean, elegant design with smooth animations and a spiritual aesthetic.

## Features

- **Home Page**: A welcoming hero section with event details, a countdown timer, event highlights, and testimonials.
- **About Page**: Information about the organizers, event purpose, and a detailed schedule.
- **Gallery Page**: A responsive grid layout of past event photos with lightbox effect for viewing.
- **Responsive Design**: Fully mobile-friendly layout that works on all device sizes.
- **Animations**: Smooth entrance animations and transitions for a polished user experience.
- **Modern UI**: Using shadcn/ui components with a slate color palette for a peaceful, elegant look.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: Custom CSS animations and Tailwind animations
- **Icons**: [Lucide React](https://lucide.dev/docs/lucide-react)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/blooming-roses.git
   cd blooming-roses
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
blooming/
├── public/              # Static files
│   └── images/          # Image assets
├── src/
│   ├── app/             # App router routes
│   │   ├── about/       # About page
│   │   ├── gallery/     # Gallery page
│   │   ├── page.tsx     # Home page
│   │   └── layout.tsx   # Root layout
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── header.tsx   # Site header
│   │   └── footer.tsx   # Site footer
│   └── lib/             # Utility functions
└── tailwind.config.ts   # Tailwind configuration
```

## Build for Production

```
npm run build
```

## Deployment

This site is designed to be deployed to any static hosting service:

1. Build the site
   ```
   npm run build
   ```

2. The output in the `.next` folder can be deployed to services like Vercel, Netlify, or any static hosting provider.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Unsplash](https://unsplash.com/) for sample gallery images
- [Next.js](https://nextjs.org/) team for the amazing framework
