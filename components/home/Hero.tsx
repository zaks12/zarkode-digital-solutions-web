import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { HeroVisual } from '@/components/home/HeroVisual';
import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { siteConfig } from '@/lib/site';
import { heroSlideshowImages } from '@/data/images';

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-20 md:pt-28">
      <HeroSlideshow images={heroSlideshowImages} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS · NIGERIA
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            We Build Software and{' '}
            <span className="text-primary">
              Digital Solutions for Growing Businesses
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            From business websites and e-commerce platforms to custom software
            and digital products, Zarkode helps businesses solve problems, work
            smarter, and grow with technology.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={siteConfig.cta.href}>
                {siteConfig.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
