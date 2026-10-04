import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  TrendingUp,
  Server,
  Palette,
  Globe,
  ShoppingCart,
  Wrench,
  Boxes,
} from 'lucide-react';

export type CapabilityGroup = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    icon: Code2,
    title: 'Digital Products & Development',
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
    items: ['SEO', 'Digital Marketing', 'Content Strategy', 'Social Media', 'Digital Presence Development'],
  },
  {
    icon: Server,
    title: 'Technology Infrastructure',
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
    items: ['Branding', 'UI/UX Design', 'Digital Product Design', 'Graphic Design'],
  },
];

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    icon: Globe,
    title: 'Establish Your Digital Presence',
    description:
      'Build a credible, professional digital presence that helps your business communicate its value and reach the right audience.',
  },
  {
    icon: ShoppingCart,
    title: 'Sell Online',
    description:
      'Build e-commerce experiences that allow businesses to showcase products, accept orders and grow online sales.',
  },
  {
    icon: Wrench,
    title: 'Improve How You Work',
    description:
      'Use websites, digital tools and business systems to simplify processes and improve how your team operates.',
  },
  {
    icon: Boxes,
    title: 'Build Something Custom',
    description:
      'Create a tailored digital product or software solution around a specific business requirement.',
  },
];

export type ProjectSummary = {
  name: string;
  category: string;
  href: string;
};

export const featuredProjects: ProjectSummary[] = [
  { name: 'ANNASEERI NIG. LTD', category: 'Business Platform', href: 'https://www.annaseeri.com' },
  { name: 'Ibnu Danna International Limited', category: 'Digital Presence', href: 'https://www.ibnudanna.com' },
];

export type Principle = {
  title: string;
  description: string;
};

export const whyZarkode: Principle[] = [
  {
    title: 'Start With the Problem',
    description: 'We understand the business need before choosing the technology.',
  },
  {
    title: 'Build With Purpose',
    description: 'Every digital solution should have a clear role in moving the business forward.',
  },
  {
    title: 'Design for Real People',
    description: 'Technology should be useful, intuitive and accessible to the people who use it.',
  },
  {
    title: 'Stay for What Comes Next',
    description: 'Our relationship does not have to end when a project launches.',
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We learn the business, the audience, the goals and the constraints before anything else.',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'We define the right approach, scope and technical direction for the solution.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We design the interface, structure and user experience around real user needs.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'We develop in focused cycles, shipping working software with regular feedback.',
  },
  {
    step: '05',
    title: 'Launch & Grow',
    description: 'We deploy, monitor and continue to improve the system after it goes live.',
  },
];

export const technologies: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'WordPress',
  'WooCommerce',
  'PHP',
  'MySQL',
];
