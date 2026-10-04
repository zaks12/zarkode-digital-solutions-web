import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { Button } from '@/components/ui/button';
import { solutions } from '@/data/home';
import { homeSectionBg } from '@/data/images';

export function Solutions() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40">
      <SectionBackground
        src={homeSectionBg.solutions}
        opacity={0.06}
        gradient="from-background via-background/95 to-background/85"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions for the Way Your Business Works"
          description="The business problems we help solve — distinct from the services we use to solve them."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="flex flex-col rounded-lg border border-border bg-card/80 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <solution.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href="/solutions">
              Explore Solutions
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
