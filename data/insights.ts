import { insightImages } from '@/data/images';

/**
 * Insight article data.
 *
 * Articles are presentational only — no full article routes exist yet.
 * Each card links to /insights until individual article pages are built.
 *
 * Images are temporary Pexels placeholders. Replace insightImages.*
 * in data/images.ts with real Zarkode article images when available.
 *
 * Content reflects Zarkode's professional perspective. No statistics,
 * awards, revenue figures, client results, or unsupported claims.
 */

export type InsightCategory =
  | 'Web Development'
  | 'Digital Strategy'
  | 'E-commerce'
  | 'Branding & Digital Presence'
  | 'Technology'
  | 'Business Growth';

export type Insight = {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
};

export const insightCategories: InsightCategory[] = [
  'Web Development',
  'Digital Strategy',
  'E-commerce',
  'Branding & Digital Presence',
  'Technology',
  'Business Growth',
];

export const insights: Insight[] = [
  {
    slug: 'building-a-strong-digital-presence',
    title: 'Building a Strong Digital Presence for a Growing Business',
    category: 'Branding & Digital Presence',
    excerpt:
      'A strong digital presence is not just about having a website. It is about making sure the right people can find you, understand what you offer, and trust enough to reach out.',
    image: insightImages.digitalPresence,
    readTime: '5 min read',
    date: '2025-09-15',
    featured: true,
  },
  {
    slug: 'website-vs-web-application',
    title: 'Website vs Web Application: What Does Your Business Actually Need?',
    category: 'Web Development',
    excerpt:
      'The terms are often used interchangeably, but they serve very different purposes. Understanding the distinction helps you avoid overbuilding or underinvesting in the wrong thing.',
    image: insightImages.websiteVsApp,
    readTime: '6 min read',
    date: '2025-08-28',
  },
  {
    slug: 'why-good-website-design-is-more-than-appearance',
    title: 'Why Good Website Design Is More Than Appearance',
    category: 'Branding & Digital Presence',
    excerpt:
      'Good design is not only about how a website looks. It is about how it works, how it guides decisions, and how clearly it communicates what your business does.',
    image: insightImages.goodDesign,
    readTime: '4 min read',
    date: '2025-08-12',
  },
  {
    slug: 'choosing-the-right-digital-tools',
    title: 'Choosing the Right Digital Tools for Your Business',
    category: 'Digital Strategy',
    excerpt:
      'There is no shortage of tools available. The challenge is choosing the ones that fit your business, your team, and the problems you are actually trying to solve.',
    image: insightImages.digitalTools,
    readTime: '5 min read',
    date: '2025-07-24',
  },
  {
    slug: 'why-website-maintenance-matters',
    title: 'Why Website Maintenance Matters',
    category: 'Technology',
    excerpt:
      'A website is not a one-time project. Security updates, performance checks, and content reviews keep it reliable, fast, and safe over time.',
    image: insightImages.maintenance,
    readTime: '4 min read',
    date: '2025-07-08',
  },
  {
    slug: 'turning-a-business-website-into-a-growth-asset',
    title: 'Turning a Business Website Into a Growth Asset',
    category: 'Business Growth',
    excerpt:
      'A website can sit idle, or it can actively contribute to growth. The difference comes down to structure, content, and how it connects to the rest of your business.',
    image: insightImages.growthAsset,
    readTime: '6 min read',
    date: '2025-06-20',
  },
];
