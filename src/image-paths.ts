
import type { GalleryImage } from '../types';

// Central hub for all static image paths
export const siteImages = {
  logo: '/images/logo.png',
  homeHero: '/images/hero-background.jpg',
  ceramicCard: '/images/ceramics/folk-art-mugs.jpg',
  glassCard: '/images/glass/pink-yellow-floral-glasses.jpg',
  aboutBanner: '/images/ceramics/ornate-floral-plate.jpg',
  aboutStory: '/images/ceramics/red-pattern-teapot.jpg',
  ceramicBanner: '/images/ceramics/gold-pattern-mugs.jpg',
  glassBanner: '/images/glass/gold-iris-rose-glasses.jpg',
};

// Gallery Images for Ceramic Decals Page
export const CERAMIC_IMAGES: GalleryImage[] = [
    { id: 101, src: '/images/ceramics/ornate-floral-plate.jpg', title: 'Ornate Floral Plate', description: 'A complex, multi-colored floral pattern on a scalloped edge plate. Fired for a permanent, glossy finish.', category: 'Tableware' },
    { id: 102, src: '/images/ceramics/red-pattern-teapot.jpg', title: 'Art Deco Teapot', description: 'Vibrant red and purple art deco style pattern applied to a ceramic teapot. A perfect statement piece.', category: 'Tableware' },
    { id: 103, src: '/images/ceramics/folk-art-mugs.jpg', title: 'Folk Art Mugs', description: 'Colorful and bright traditional folk art floral designs wrapped around ceramic mugs.', category: 'Tableware' },
    { id: 104, src: '/images/ceramics/gold-skull-bowls.jpg', title: 'Gold Skull & Butterfly Bowls', description: 'Custom gold foil decals featuring intricate skulls and butterflies on ceramic bowls. Ideal for unique branding.', category: 'Ornaments' },
    { id: 105, src: '/images/ceramics/blue-cherry-blossom-jar.jpg', title: 'Blue Blossom Lidded Jar', description: 'A delicate blue cherry blossom branch decal on a white ceramic jar, offering a classic Chinoiserie look.', category: 'Ornaments' },
    { id: 106, src: '/images/ceramics/brown-leaf-teacup-set.jpg', title: 'Brown Leaf Teacup Set', description: 'A simple yet elegant brown leaf pattern on a matching teacup, saucer, and plate set.', category: 'Tableware' },
    { id: 107, src: '/images/ceramics/gold-pattern-mugs.jpg', title: 'Gold Geometric Mugs', description: 'Modern gold geometric and mandala patterns on flared ceramic mugs, adding a touch of luxury.', category: 'Tableware' },
    { id: 108, src: '/images/ceramics/floral-plate-simple.jpg', title: 'Simple Floral Plate', description: 'A charming and simple hand-painted style floral decal for everyday tableware.', category: 'Tableware' }
];

// Gallery Images for Glass Decals Page
export const GLASS_IMAGES: GalleryImage[] = [
    { id: 201, src: '/images/glass/mushroom-glass.jpg', title: 'Mushroom Bong Decal', description: 'A custom "Mushroom" graphic decal applied to a tall glass bong. The colors are vibrant and the lines are crisp.', category: 'Bongs' },
    { id: 202, src: '/images/glass/pink-yellow-floral-glasses.jpg', title: 'Twin Floral Glasses', description: 'Matching floral decals on a pair of drinking glasses, perfect for custom gift sets.', category: 'Beverageware' },
    { id: 203, src: '/images/glass/gold-iris-rose-glasses.jpg', title: 'Ornate Gold-Trimmed Glasses', description: 'A set of highly detailed floral and geometric decals with gold accents for premium glassware.', category: 'Beverageware' },
    { id: 204, src: '/images/glass/halloween-wine-glasses.jpg', title: 'Halloween Wine Glasses', description: 'Fun and spooky decals featuring a skull and a witch hat, ideal for seasonal promotions.', category: 'Promotional' },
    { id: 205, src: '/images/glass/large-floral-bottle.jpg', title: 'Large Floral Bottle Decal', description: 'A large, colorful floral decal designed for application on glass bottles.', category: 'Beverageware' },
    { id: 206, src: '/images/glass/citrus-floral-glasses.jpg', title: 'Citrus & Floral Drinkware', description: 'A collection of summer-themed decals, including lemon slices and flowers, for fun and promotional glassware.', category: 'Promotional' }
];