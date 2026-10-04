import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  TrendingUp,
  Server,
  Palette,
  Rocket,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react';

export type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    icon: Code2,
    title: 'Digital Products & Development',
    description:
      'Build websites, applications and digital products designed around real business requirements.',
    items: [
      'Website Development',
      'Web Applications',
      'E-commerce',
      'Custom Software',
      'Business Platforms',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Digital Presence',
    description:
      'Help businesses strengthen their visibility, reach the right audiences and build a stronger digital presence.',
    items: [
      'SEO',
      'Digital Marketing',
      'Content Strategy',
      'Social Media',
      'Digital Presence Development',
    ],
  },
  {
    icon: Server,
    title: 'Technology Infrastructure',
    description:
      'Provide the essential technology services businesses need to maintain a reliable digital presence.',
    items: [
      'Web Hosting',
      'Domain Registration',
      'Business Email',
      'Website Maintenance',
      'IT Solutions',
      'Technology Consulting',
    ],
  },
  {
    icon: Palette,
    title: 'Brand & Experience',
    description:
      'Create consistent digital experiences and visual identities that help businesses communicate clearly.',
    items: ['Branding', 'UI/UX Design', 'Digital Product Design', 'Graphic Design'],
  },
];

export type EngagementType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const engagementTypes: EngagementType[] = [
  {
    icon: Rocket,
    title: 'Start Something New',
    description:
      'Launch a website, e-commerce experience, application or custom digital product.',
  },
  {
    icon: RefreshCw,
    title: 'Improve What Exists',
    description:
      'Upgrade an existing website, digital presence, workflow or technology setup.',
  },
  {
    icon: ArrowUpRight,
    title: 'Build for What Comes Next',
    description:
      'Continue developing, maintaining and improving the technology as the business grows.',
  },
];
