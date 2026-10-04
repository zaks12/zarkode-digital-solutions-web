import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { Button } from '@/components/ui/button';
import { capabilityGroups } from '@/data/home';
import { homeSectionBg } from '@/data/images';

export function Capabilities() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40 bg-card/30">
      <SectionBackground
        src={homeSectionBg.capabilities}
        opacity={0.07}
        gradient="from-background via-background/90 to-background/95"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Capabilities"
          title="What Zarkode Can Do"
          description="Four capability areas covering the full digital needs of a modern business."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-border bg-background/80 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
