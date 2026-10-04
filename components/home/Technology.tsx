import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { technologies } from '@/data/home';

export function Technology() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Technology Is the Tool. The Business Need Comes First."
          description="The tools we use to build and maintain digital solutions."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-card px-5 py-2.5 font-mono text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
