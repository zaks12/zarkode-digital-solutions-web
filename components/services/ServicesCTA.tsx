import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function ServicesCTA() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-primary/60"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-primary/60">
              ready to start
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Have a Digital Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what you&apos;re trying to build, improve or solve, and
              we&apos;ll explore the right approach with you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
