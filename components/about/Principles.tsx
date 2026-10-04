import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { principles } from '@/data/about';

export function Principles() {
  return (
    <Section className="border-t border-border/40 bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="How We Think"
          title="More Than a Technology Vendor."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => (
            <div key={principle.title} className="flex gap-4">
              <div className="font-mono text-2xl font-bold text-primary/30">
                0{index + 1}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
