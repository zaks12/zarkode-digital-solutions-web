import { PricingSection } from '@/components/pricing/PricingSection';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { ServiceCategories } from '@/components/services/ServiceCategories';
import { ServicesHeroVisual } from '@/components/services/ServicesHeroVisual';
import { HowWeHelp } from '@/components/services/HowWeHelp';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { pageImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'Web Development & IT Services in Nigeria',
  description:
    'Explore web development, software, branding, hosting, IT consulting, and digital marketing services from Zarkode Digital Solutions Ltd. in Nigeria.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Web Development & IT Services in Nigeria | Zarkode',
    description:
      'Explore web development, software, branding, hosting, IT consulting, and digital marketing services from Zarkode Digital Solutions Ltd. in Nigeria.',
  },
};
export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Technology and Digital Services Built Around Your Business
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Zarkode provides digital development, growth, infrastructure, and
            brand services designed around the practical needs of modern
            businesses.
          </p>
          <ServicesHeroVisual />
        </div>
      </div>

      <Section className="relative border-t border-border/40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <img
            src={pageImages.services.intro}
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              From Digital Presence to Digital Products
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Zarkode combines development, digital growth, technology
              infrastructure and brand experience to help businesses establish,
              improve and expand their digital operations.
            </p>
          </div>
        </Container>
      </Section>

       <ServiceCategories />
      <HowWeHelp />
      <PricingSection />
      <ServicesCTA />
    </>
  );
}
