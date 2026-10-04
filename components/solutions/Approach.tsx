import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { approachSteps } from '@/data/solutions';

export function Approach() {
  return (
    <Section className="border-t border-border/40 bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="How We Approach Solutions"
          title="The Right Technology Starts With the Right Question"
          description="We don't start with a tool. We start by understanding what the business actually needs."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <div key={step.title}>
              <div className="mb-3 font-mono text-2xl font-bold text-primary/30">
                0{index + 1}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
