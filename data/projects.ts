export type Project = {
  name: string;
  category: string;
  description?: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
  website?: string;
};

export const projects: Project[] = [
  {
    name: 'ANNASEERI NIG. LTD',
    category: 'Business Platform',
    image: '/images/clients/5er.jpeg',
    imageFit: 'contain',
    website: 'https://www.annaseeri.com',
  },
  {
    name: 'Ibnu Danna International Limited',
    category: 'Digital Presence',
    image: '/images/clients/ibnu-danna-logo.png',
    website: 'https://www.ibnudanna.com',
  },
];
