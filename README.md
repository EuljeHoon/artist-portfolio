# Jinkyung Portfolio - Next.js Art Gallery Project

A modern art gallery portfolio built with Next.js 15, featuring dynamic artwork filtering, AWS S3 integration, and Cloudflare Pages deployment.

## 🏗️ Project Overview

This project is a full-stack art gallery application that showcases Hu Jin Kyung's artwork collection. Built with modern web technologies, it features advanced filtering capabilities, responsive design, and image delivery through AWS S3.

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.11
- **State Management**: React Hooks (useState, useEffect, useCallback)
- **Animations**: Framer Motion 12.19.2
- **Icons**: React Icons 5.5.0

### Backend & Infrastructure
- **Image Storage**: AWS S3 (gallery-soma-assets.s3.ap-northeast-2.amazonaws.com)
- **Deployment**: Cloudflare Pages
- **Domain**: jinkyung-portfolio.pages.dev

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint (Next.js built-in)
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure & File Analysis

```
Jinkyung-portfolio/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── artworks/
│   │   │   └── page.tsx              # Artwork gallery page with filtering
│   │   ├── globals.css               # Global Tailwind styles
│   │   ├── layout.tsx                # Root layout with metadata
│   │   └── page.tsx                  # Homepage with artist intro
│   ├── assets/                       # Static JSON data
│   │   ├── artworks.json             # 800+ artwork entries with S3 URLs
│   │   ├── hu_jin_kyung_full_experience.json  # Exhibition data
│   │   └── jinkyungBio.json          # Artist biography
│   ├── components/                   # React components
│   │   ├── ArtworkCard.js            # Individual artwork display
│   │   ├── ArtworkGallery.js         # Main gallery with filters
│   │   ├── Biography.js              # Artist biography component
│   │   ├── Exhibition.js             # Exhibition timeline
│   │   ├── Header.js                 # Navigation header
│   │   ├── common/                   # Shared components
│   │   │   ├── ArtworkModal.js       # Full-size image modal
│   │   │   ├── ExhibitionBox.js      # Exhibition card component
│   │   │   └── Modal.js              # Base modal component
│   │   └── exhibition_list/          # Exhibition type components
│   │       ├── ArtFair.js            # Art fair specific display
│   │       ├── GroupExhibition.js    # Group exhibition display
│   │       └── SoloExhibition.js     # Solo exhibition display
│   └── utils/                        # Utility functions
│       ├── scrollToTop.js            # Smooth scroll utility
│       └── useCDNResource.js         # AWS S3 resource handling
├── public/                           # Static assets
│   ├── JinkyungHu.ico               # Custom favicon
│   └── profile_image.jpeg           # Artist profile image
├── next.config.ts                   # Next.js configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── postcss.config.mjs              # PostCSS configuration
```

## 🔧 Key Components Deep Dive

### 1. ArtworkGallery.js - Core Gallery Component
**Location**: `src/components/ArtworkGallery.js`
**Purpose**: Main gallery interface with advanced filtering

**Key Features**:
- **State Management**: Multiple useState hooks for filters, pagination, modal
- **Filtering Logic**: 
  - Year extraction from titles using regex: `title.match(/(\d{4})/)`
  - Size filtering from artwork.size field
  - Real-time search with debouncing
- **Infinite Scroll**: Intersection Observer API for progressive loading
- **Responsive Grid**: CSS Grid with responsive breakpoints

**Technical Implementation**:
```javascript
// Year extraction function
const extractYear = (title) => {
  const yearMatch = title.match(/(\d{4})/);
  return yearMatch ? yearMatch[1] : null;
};

// Size filtering with number extraction
const extractSizeNumber = (size) => {
  const match = size && size.match(/(\d+)/);
  return match ? match[1] : null;
};
```

### 2. ArtworkCard.js - Individual Artwork Display
**Location**: `src/components/ArtworkCard.js`
**Purpose**: Individual artwork card with image handling

**Key Features**:
- **Next.js Image**: Image component with lazy loading
- **Error Handling**: Fallback for failed image loads
- **Hover Effects**: CSS transitions and transforms
- **Responsive Design**: Aspect ratio maintenance

**Technical Implementation**:
```javascript
// Image component with error handling
<Image
  src={imageUrl}
  alt={artwork.title}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  onLoad={handleImageLoad}
  onError={handleImageError}
/>
```

### 3. AWS S3 Integration
**Data Source**: `src/assets/artworks.json`
**Storage**: AWS S3 bucket (gallery-soma-assets.s3.ap-northeast-2.amazonaws.com)

**Image URL Structure**:
```
https://gallery-soma-assets.s3.ap-northeast-2.amazonaws.com/artwork/Jinkyung+Hu/[series]/[filename]
```

**Data Structure Example**:
```json
{
  "title": "Blessing Jar 2019 #13",
  "size": "6F",
  "sold": false,
  "url": "https://gallery-soma-assets.s3.ap-northeast-2.amazonaws.com/artwork/Jinkyung+Hu/복답아리/현진경-복답아리-작품집/s현진경_복답아리(BJ+2019+%2313)_6호화_아크릴화_2019.jpg"
}
```

### 4. Exhibition System
**Components**: 
- `Exhibition.js` - Main exhibition timeline
- `ExhibitionBox.js` - Individual exhibition cards
- `exhibition_list/` - Type-specific exhibition displays

**Data Source**: `src/assets/hu_jin_kyung_full_experience.json`

## 🚀 Deployment Architecture

### Cloudflare Pages Deployment
**Platform**: Cloudflare Pages
**Domain**: jinkyung-portfolio.pages.dev
**Build Process**:
1. **Build Command**: `npm run build`
2. **Output Directory**: `out` (static export)
3. **Node Version**: 18.x
4. **Environment Variables**: None required (static data)

### AWS S3 Integration
**Bucket**: gallery-soma-assets
**Region**: ap-northeast-2 (Seoul)
**CORS Configuration**: Enabled for web access

### Next.js Configuration
**Static Export**: `output: "export"` for static site generation
**Image Optimization**: Disabled (`unoptimized: true`) for static export
**Remote Patterns**: Configured for AWS S3 domains

## 🔍 Advanced Features Implementation

### 1. Filtering System
**Year Filter**:
- Extracts year from artwork titles using regex
- Supports 2019-2023 range
- Real-time filtering without API calls

**Size Filter**:
- Filters by canvas size (1F, 2S, 4F, 6F, 10F, 15F, 20F, 30F, 50F, 80F)
- Number-only filtering (10F, 10S → "10")
- Alphabetical sorting

**Search Functionality**:
- Real-time title search
- Case-insensitive matching
- Debounced input handling

### 2. Infinite Scroll
**Implementation**: Intersection Observer API
**Performance**: Loads 12 items initially, +8 on scroll
**Memory Management**: Efficient DOM manipulation

### 3. Modal System
**Components**: Modal.js (base), ArtworkModal.js (artwork-specific)
**Features**: 
- Full-size image display
- Keyboard navigation (ESC to close)
- Click outside to close
- Responsive design

## 🛠️ Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Data Management
**Artwork Data**: Edit `src/assets/artworks.json`
**Exhibition Data**: Edit `src/assets/hu_jin_kyung_full_experience.json`
**Biography Data**: Edit `src/assets/jinkyungBio.json`

### Image Upload Process
1. Upload images to AWS S3 bucket
2. Update artwork URLs in `artworks.json`
3. Deploy to Cloudflare Pages

## 🔧 Configuration Files

### next.config.ts
```typescript
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gallery-soma-assets.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  distDir: "out",
};
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "preview": "npx serve out"
  }
}
```

## 🐛 Known Issues & Solutions

### 1. Image Loading Issues
**Problem**: Some S3 images fail to load
**Solution**: Implemented fallback placeholder images
**Code**: `getPlaceholderImage()` function in ArtworkCard.js

### 2. Mobile Performance
**Problem**: Large image files on mobile
**Solution**: Responsive image sizes and lazy loading
**Implementation**: Next.js Image component with sizes prop

### 3. Filter State Management
**Problem**: Complex filter state
**Solution**: Multiple useState hooks with reset functionality
**Code**: `resetFilters()` function in ArtworkGallery.js

## 🔮 Future Enhancements

### Planned Features
- **Admin Panel**: Content management system
- **Analytics**: User behavior tracking
- **SEO Optimization**: Meta tags and structured data
- **PWA**: Progressive Web App features

### Technical Improvements
- **API Routes**: Dynamic data fetching
- **Database**: MongoDB/PostgreSQL integration
- **Authentication**: Admin login system
- **Image Processing**: Automated image optimization

## 📞 Support & Maintenance

**Repository**: Private GitHub repository
**Deployment**: Automatic via Cloudflare Pages
**Monitoring**: Cloudflare Analytics
**Backup**: AWS S3 versioning enabled

---

*Built with Next.js 15, TypeScript, Tailwind CSS, and deployed on Cloudflare Pages*
