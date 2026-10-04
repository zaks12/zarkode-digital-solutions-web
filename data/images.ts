/**
 * Centralized temporary image URLs.
 *
 * All Pexels placeholder images used across the site are stored here
 * so they can be easily replaced with real Zarkode/client assets later.
 *
 * To replace: swap the URL strings below with your own image paths
 * (e.g. "/images/my-image.jpg" for files in the public/ directory).
 */

export const pageImages = {
  home: {
    hero:
      'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    positioning:
      'https://images.pexels.com/photos/7693689/pexels-photo-7693689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  about: {
    header:
      'https://images.pexels.com/photos/7693706/pexels-photo-7693706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    perspective:
      'https://images.pexels.com/photos/36733315/pexels-photo-36733315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  services: {
    intro:
      'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  solutions: {
    header:
      'https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  projects: {
    header:
      'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  insights: {
    header:
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  contact: {
    header:
      'https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
} as const;

/**
 * Hero rotating background images.
 *
 * 4 dark, abstract technology images that crossfade every 7 seconds.
 * Replace these URLs with Zarkode-owned imagery when available.
 */
export const heroSlideshowImages = [
  'https://images.pexels.com/photos/30547568/pexels-photo-30547568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/10653941/pexels-photo-10653941.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
] as const;

/**
 * Footer background image.
 *
 * Subtle dark technology image behind footer content.
 * Replace with Zarkode-owned imagery when available.
 */
export const footerBgImage =
  'https://images.pexels.com/photos/30547580/pexels-photo-30547580.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop';

export const insightImages = {
  digitalPresence:
    'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  websiteVsApp:
    'https://images.pexels.com/photos/14553705/pexels-photo-14553705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  goodDesign:
    'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  digitalTools:
    'https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  maintenance:
    'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  growthAsset:
    'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
} as const;

/**
 * Homepage section background imagery.
 *
 * Each section gets its own distinct visual treatment.
 * Images are rendered at low opacity behind dark overlays
 * so the Zarkode dark theme remains dominant.
 *
 * Replace these URLs with Zarkode-owned imagery when available.
 */
export const homeSectionBg = {
  positioning:
    'https://images.pexels.com/photos/17194838/pexels-photo-17194838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  capabilities:
    'https://images.pexels.com/photos/9858906/pexels-photo-9858906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  solutions:
    'https://images.pexels.com/photos/38875520/pexels-photo-38875520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  featuredProjects:
    'https://images.pexels.com/photos/29502371/pexels-photo-29502371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  whyZarkode:
    'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  process:
    'https://images.pexels.com/photos/30547594/pexels-photo-30547594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  insights:
    'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  finalCta:
    'https://images.pexels.com/photos/30547579/pexels-photo-30547579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
} as const;

/**
 * Client logo placeholder images.
 *
 * Currently unused — client cards use text-based initials placeholders
 * instead of Pexels photos, to avoid presenting random images as company logos.
 *
 * When real logo files are available, add their paths/URLs here and
 * reference them from data/clients.ts.
 */
export const clientLogos = {
  annaseeri: '',
  ibnuDanna: '',
  khadijahBrahim: '',
  grabMart: '',
  bookNuggets: '',
} as const;
