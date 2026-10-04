import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionBackground } from '@/components/home/SectionBackground';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { homeSectionBg } from '@/data/images';

export function FinalCTA() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-20">
          <SectionBackground
            src={homeSectionBg.finalCta}
            opacity={0.06}
            gradient="from-background via-background/90 to-background/95"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Have an Idea Worth Building?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether it&apos;s a website, software, e-commerce, digital presence
              or a technology requirement — start a conversation with us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={siteConfig.cta.href}>
                  {siteConfig.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
