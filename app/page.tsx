import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Positioning } from '@/components/home/Positioning';
import { Capabilities } from '@/components/home/Capabilities';
import { Solutions } from '@/components/home/Solutions';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ClientsSection } from '@/components/clients/ClientsSection';
import { WhyZarkode } from '@/components/home/WhyZarkode';
import { Process } from '@/components/home/Process';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Zarkode Digital Solutions | Digital Solutions for Modern Businesses',
  description:
    'Zarkode Digital Solutions Ltd is a Nigerian technology company helping businesses build digital products, strengthen their digital presence, and solve real business needs with technology.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zarkode Digital Solutions | Digital Solutions for Modern Businesses',
    description:
      'Zarkode Digital Solutions Ltd is a Nigerian technology company helping businesses build digital products, strengthen their digital presence, and solve real business needs with technology.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Capabilities />
      <Solutions />
      <FeaturedProjects />
      <ClientsSection />
      <WhyZarkode />
      <Process />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
