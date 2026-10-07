export const siteConfig = {
  name: 'Zarkode Digital Solutions Ltd.',
  shortName: 'Zarkode',
  tagline: 'We Build Digital Solutions That Move Businesses Forward.',
  description:
    'Zarkode Digital Solutions Ltd. is a Nigerian technology company that helps businesses solve problems and move forward through digital products, platforms and technology solutions.',
  url: 'https://zarkode.com.ng',
  locale: 'en_NG',
  rcNumber: '9067293',
  contact: {
    phone1: '08106589619',
    phone2: '07038764507',
    email: 'info@zarkode.com.ng',
  },
  cta: {
    label: 'Start a Project',
    href: '/contact',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'What We Do',
    items: [
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];
