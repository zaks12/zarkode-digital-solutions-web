import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { helpAreas } from '@/data/contact';

export function WhatWeCanHelpWith() {
  return (
    <Section className="border-t border-border/40 bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="What We Can Help With"
          title="What Can We Help You Build?"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-heading text-base font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
