
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { HeroVisual } from '@/components/home/HeroVisual';
import { siteConfig } from '@/lib/site';

export function Hero() {
  return (
    <Section className="relative isolate overflow-hidden pt-20 md:pt-28">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Dark overlay for readable text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#07111f]/80"
      />

      {/* Subtle brand-colour glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial from-primary/10 via-transparent to-transparent"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground backdrop-blur-sm">
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
