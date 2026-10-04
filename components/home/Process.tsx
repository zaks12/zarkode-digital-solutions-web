import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { processSteps } from '@/data/home';
import { homeSectionBg } from '@/data/images';

export function Process() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40 bg-card/30">
      <SectionBackground
        src={homeSectionBg.process}
        opacity={0.06}
        gradient="from-background via-background/90 to-background/95"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Process"
          title="How We Deliver"
          description="A disciplined, five-step process for building technology that serves the business."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item) => (
            <div key={item.step} className="relative">
              <div className="mb-4 font-mono text-2xl font-bold text-primary/30">
                {item.step}
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
