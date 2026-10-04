/**
 * Client data for the "Selected Work" / Clients section.
 *
 * Only clients with verified website URLs are shown publicly.
 * Additional clients will be added as their details are confirmed.
 *
 * website: null means the URL is not yet verified — the card renders
 * as a non-clickable tile until a real, verified URL is provided.
 *
 * logo: empty string means no official logo is available yet.
 * The ClientCard component renders a tasteful initials-based
 * placeholder instead of a random stock photo.
 *
 * To add a real logo: set the logo field to a path like
 * "/images/clients/client-name.svg" (place the file in public/).
 */

export type Client = {
  name: string;
  category: string;
  descriptor: string;
  logo: string;
  website: string | null;
};

export const clients: Client[] = [
  {
    name: 'ANNASEERI NIG. LTD',
    category: 'Business Platform',
    descriptor: 'Business Platform',
    logo: '/images/clients/5er.jpeg',
    website: 'https://www.annaseeri.com',
  },
  {
    name: 'Ibnu Danna International Limited',
    category: 'Digital Presence',
    descriptor: 'Digital Presence',
    logo: '/images/clients/ibnu-danna-logo.png',
    website: 'https://www.ibnudanna.com',
  },
];
