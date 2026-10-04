import type { LucideIcon } from 'lucide-react';
import { Globe, ShoppingCart, Wrench, Boxes } from 'lucide-react';

export type SolutionArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  needs: string[];
};

export const solutionAreas: SolutionArea[] = [
  {
    icon: Globe,
    title: 'Establish Your Digital Presence',
    description:
      'For businesses that need a credible and effective presence online.',
    needs: [
      'Professional business website',
      'Stronger digital presence',
      'Clear presentation of products or services',
      'Better online visibility',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Sell Online',
    description:
      'For businesses that want to take their products or services online.',
    needs: [
      'E-commerce website',
      'Product presentation',
      'Online ordering',
      'Digital customer experience',
    ],
  },
  {
    icon: Wrench,
    title: 'Improve How You Work',
    description:
      'For businesses looking to improve processes through digital tools and systems.',
    needs: [
      'Better internal workflows',
      'Digital business tools',
      'Process improvement',
      'Website or system improvements',
    ],
  },
  {
    icon: Boxes,
    title: 'Build Something Custom',
    description:
      'For businesses with a specific requirement that off-the-shelf tools cannot address effectively.',
    needs: [
      'Custom web applications',
      'Business platforms',
      'Custom software',
      'Tailored digital products',
    ],
  },
];

export type ApproachStep = {
  title: string;
  description: string;
};

export const approachSteps: ApproachStep[] = [
  {
    title: 'Understand',
    description: 'Clarify the business problem, goals, users and requirements.',
  },
  {
    title: 'Shape',
    description: 'Determine the appropriate digital solution and approach.',
  },
  {
    title: 'Build',
    description: 'Design and develop the solution around the actual need.',
  },
];
