
import React from 'react';
import type { NavLink, Testimonial, DecalsPageProps } from './types';
import { CERAMIC_IMAGES, GLASS_IMAGES, siteImages } from './src/image-paths';

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Ceramic Decals', path: '/ceramic-decals' },
  { label: 'Glass Decals', path: '/glass-decals' },
  { label: 'About Us', path: '/about-us' },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "The quality of the ceramic decals is unparalleled. Our new tableware line looks stunning, and our customers have noticed. Decal Maker's team was a pleasure to work with.",
    name: 'Sarah Jenkins',
    company: 'Artisan Crockery Co.',
  },
  {
    id: 2,
    quote: 'We needed a fast turnaround on custom branded glasses for a corporate event. Decal Maker delivered ahead of schedule with flawless results. Highly recommended!',
    name: 'Tom Alvarez',
    company: 'Summit Promotions',
  },
  {
    id: 3,
    quote: "As an independent artist, finding a reliable partner for high-quality production is tough. Decal Maker understood my vision and helped bring my designs to life on beautiful ceramic tiles.",
    name: 'Maria Petrova',
    company: 'Artist',
  },
  {
    id: 4,
    quote: "The durability is impressive. We've put our branded glasses through hundreds of commercial dishwasher cycles, and the decals still look as crisp as day one.",
    name: 'David Lee',
    company: 'The Oak Barrel Distillery',
  },
];

export const CERAMIC_CATEGORIES = ['All', 'Tableware', 'Tiles', 'Ornaments'];
export const GLASS_CATEGORIES = ['All', 'Beverageware', 'Promotional', 'Bongs'];

// Page props for DecalsPage
export const CERAMIC_DECAL_PROPS: DecalsPageProps = {
    title: 'Ceramic Decals',
    bannerImage: siteImages.ceramicBanner,
    intro: (
      <p>
        Ceramic decals are used to apply printed designs to ceramic objects such as tableware, tiles, ornaments, and sanitary ware. These are fired at temperatures of up to <span className="font-semibold text-brand-terracotta">800-850°C</span>, fusing the design to the object for a permanent, beautiful finish.
      </p>
    ),
    galleryImages: CERAMIC_IMAGES,
    galleryCategories: CERAMIC_CATEGORIES,
};

export const GLASS_DECAL_PROPS: DecalsPageProps = {
    title: 'Glass Decals',
    bannerImage: siteImages.glassBanner,
    intro: (
       <p>
        Glass Decals are used to apply printed designs to fragrance bottles, spirit bottles, bongs, crockery, and candleholders. They are fired at temperatures ranging from <span className="font-semibold text-brand-terracotta">560 to 600°C</span> to ensure a durable and vibrant design that resists scratching.
      </p>
    ),
    galleryImages: GLASS_IMAGES,
    galleryCategories: GLASS_CATEGORIES,
};