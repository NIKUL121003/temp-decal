
import type React from 'react';

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface DecalsPageProps {
  title: string;
  bannerImage: string;
  intro: React.ReactNode;
  galleryImages: GalleryImage[];
  galleryCategories: string[];
}