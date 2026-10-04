import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function ProjectsCTA() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Have a Project of Your Own?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what you want to build, improve or solve.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={siteConfig.cta.href}>
                  {siteConfig.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
