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
  title: 'Zarkode Digital Solutions | Web Development & IT Solutions in Nigeria',
  description:
    'Zarkode Digital Solutions Ltd. is a Nigerian technology company providing web development, software, branding, hosting, IT consulting and digital solutions for businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Zarkode Digital Solutions — We Build Digital Solutions That Move Businesses Forward.',
    description:
      'Zarkode Digital Solutions Ltd. is a Nigerian technology company providing web development, software, branding, hosting, IT consulting and digital solutions for businesses.',
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
