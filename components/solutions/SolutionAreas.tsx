import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { solutionAreas } from '@/data/solutions';

export function SolutionAreas() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions for the Way Your Business Works"
          description="Four solution directions covering the most common digital needs of modern businesses."
        />
        <div className="space-y-12">
          {solutionAreas.map((area, index) => (
            <div
              key={area.title}
              className="grid gap-6 border-b border-border/40 pb-12 last:border-0 last:pb-0 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-sm text-primary/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
              <div className="lg:pt-12">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {area.needs.map((need) => (
                    <li
                      key={need}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {need}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
