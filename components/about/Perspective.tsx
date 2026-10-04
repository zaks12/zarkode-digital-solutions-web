import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { perspectives } from '@/data/about';

export function Perspective() {
  return (
    <Section className="border-t border-border/40 bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="Our Perspective"
          title="Technology Is the Tool. The Business Need Comes First."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {perspectives.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
