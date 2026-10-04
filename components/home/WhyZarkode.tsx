import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { whyZarkode } from '@/data/home';
import { homeSectionBg } from '@/data/images';

export function WhyZarkode() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40">
      <SectionBackground
        src={homeSectionBg.whyZarkode}
        opacity={0.05}
        gradient="from-background via-background/95 to-background/90"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Zarkode"
          title="More Than a Technology Vendor"
          description="The principles that guide how we work with every business."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyZarkode.map((principle, i) => (
            <div key={principle.title} className="relative">
              <div className="mb-3 font-mono text-sm text-primary/40">
                0{i + 1}
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
