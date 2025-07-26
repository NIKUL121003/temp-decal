# Decal Maker Website

A modern, responsive React website for a custom decal printing company specializing in high-quality ceramic and glass decals.

## Project Overview

This is a showcase website for **Decal Maker**, a company that creates durable, custom decals for ceramic and glass products. The site features a clean, professional design with galleries showcasing their work, company information, and contact details.

## Technology Stack

- **Frontend Framework**: React 19.1.0 with TypeScript
- **Routing**: React Router DOM 7.6.3
- **Styling**: Tailwind CSS 3.4.4
- **Build Tool**: Vite 5.2.13
- **Development**: TypeScript 5.4.5

## Project Structure

```
├── App.tsx                 # Main app component with routing
├── index.tsx              # React app entry point
├── index.html             # HTML template
├── index.css              # Global styles and Tailwind imports
├── types.ts               # TypeScript type definitions
├── constants.ts/.tsx      # App constants and configuration
├── components/            # Reusable React components
│   ├── ContactForm.tsx    # Contact form with file upload
│   ├── Footer.tsx         # Site footer with links and contact info
│   ├── Header.tsx         # Navigation header with mobile menu
│   ├── Icon.tsx           # SVG icon components
│   ├── Layout.tsx         # Main layout wrapper
│   └── Modal.tsx          # Lightbox modal for gallery images
├── pages/                 # Page components
│   ├── AboutUsPage.tsx    # Company information and values
│   ├── ContactPage.tsx    # Contact information and details
│   ├── DecalsPage.tsx     # Reusable gallery page for ceramic/glass
│   └── HomePage.tsx       # Landing page with hero and testimonials
├── src/
│   └── image-paths.ts     # Centralized image path management
└── public/
    └── images/            # Static images organized by category
        ├── ceramics/      # Ceramic decal examples
        └── glass/         # Glass decal examples
```

## Key Features

### 🎨 **Modern Design**
- Clean, professional layout with custom Tailwind color scheme
- Responsive design that works on all devices
- Custom typography using Montserrat, Poppins, and Lato fonts

### 📱 **Responsive Navigation**
- Mobile-friendly hamburger menu
- Sticky header with backdrop blur effect
- Active link highlighting

### 🖼️ **Interactive Galleries**
- Filterable image galleries for ceramic and glass decals
- Lightbox modal for detailed image viewing
- Category-based filtering system

### 💬 **Customer Testimonials**
- Auto-rotating testimonial carousel
- Manual navigation controls
- Professional client testimonials

### 📞 **Contact Integration**
- Contact form with file upload capability
- Business hours and location information
- Multiple contact methods (phone, email, website)

### ⚡ **Performance Optimized**
- Lazy loading for gallery images
- Centralized image path management
- Optimized build with Vite

## Core Components

### Layout System
- `Layout` - Main wrapper with header and footer
- `Header` - Navigation with mobile responsiveness
- `Footer` - Company info and social links

### Reusable Components
- `DecalsPage` - Gallery template for both ceramic and glass
- `Modal` - Lightbox for image viewing
- `Icon` - SVG icon library
- `ContactForm` - Contact form with validation

### Data Management
- `types.ts` - TypeScript interfaces for type safety
- `constants.tsx` - Navigation, testimonials, and page configurations
- `image-paths.ts` - Centralized image path management

## Pages

1. **Homepage** (`HomePage.tsx`)
   - Hero section with call-to-action
   - Service overview cards
   - Feature highlights
   - Rotating testimonials

2. **Ceramic Decals** (`/ceramic-decals`)
   - Gallery of ceramic decal examples
   - Filterable by category (Tableware, Tiles, Ornaments)
   - Technical information about ceramic firing

3. **Glass Decals** (`/glass-decals`)
   - Gallery of glass decal examples
   - Filterable by category (Beverageware, Promotional, Bongs)
   - Information about glass application process

4. **About Us** (`AboutUsPage.tsx`)
   - Company story and background
   - Core values with icon illustrations
   - Professional imagery

5. **Contact** (`ContactPage.tsx`)
   - Complete contact information
   - Business hours
   - Address and multiple phone numbers

## Configuration

### Brand Colors (Tailwind Config)
- `brand-blue`: #004A7F - Primary brand color
- `brand-terracotta`: #E57373 - Accent color
- `brand-dark`: #2C3E50 - Dark text
- `brand-light`: #F8F9FA - Light background
- `brand-gold`: #FFD700 - Highlight color

### Build Configuration
- **Vite Config**: `vite.config.ts` - React plugin setup
- **TypeScript**: `tsconfig.json` - Strict TypeScript configuration
- **Tailwind**: `tailwind.config.js` - Custom theme and fonts

## Getting Started

**Prerequisites:** Node.js

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set environment variables** (if needed):
   Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Notable Implementation Details

- **Hash Routing**: Uses HashRouter for compatibility with static hosting
- **Image Optimization**: Centralized image path management in `image-paths.ts`
- **Type Safety**: Comprehensive TypeScript interfaces in `types.ts`
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **SEO Friendly**: Proper meta tags and semantic structure

This project demonstrates modern React development practices with a focus on maintainability, performance, and responsiveness. The use of TypeScript ensures type safety and better developer experience, while Tailwind CSS provides a flexible and customizable styling solution. The image optimization and lazy loading techniques used in this project guarantee fast load times and a smooth user experience.
