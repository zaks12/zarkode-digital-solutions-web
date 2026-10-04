import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeroBackground } from '@/components/layout/PageHeroBackground';
import { SolutionAreas } from '@/components/solutions/SolutionAreas';
import { Approach } from '@/components/solutions/Approach';
import { ServicesConnection } from '@/components/solutions/ServicesConnection';
import { SolutionsCTA } from '@/components/solutions/SolutionsCTA';
import { pageImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'Digital Solutions for Businesses | Zarkode Digital Solutions',
  description:
    'We help businesses use digital technology to establish their presence, sell online, improve how they work, and build solutions around specific needs.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Digital Solutions for Businesses | Zarkode Digital Solutions',
    description:
      'We help businesses use digital technology to establish their presence, sell online, improve how they work, and build solutions around specific needs.',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <div className="relative border-b border-border/60">
        <PageHeroBackground src={pageImages.solutions.header} />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Digital Solutions for Real Business Needs
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            We help businesses use digital technology to establish their
            presence, sell online, improve how they work, and build solutions
            around specific needs.
          </p>
        </div>
      </div>

      <Section className="border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Start With the Business Need
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The right technology depends on the problem being solved. Zarkode
              looks at the business requirement first, then determines the
              appropriate digital approach.
            </p>
          </div>
        </Container>
      </Section>

      <SolutionAreas />
      <Approach />
      <ServicesConnection />
      <SolutionsCTA />
    </>
  );
}
