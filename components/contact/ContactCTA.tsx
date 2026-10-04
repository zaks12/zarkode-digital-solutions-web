import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export function ContactCTA() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            That&apos;s okay. Start with the problem you&apos;re trying to solve,
            and we&apos;ll take it from there.
          </p>
        </div>
      </Container>
    </Section>
  );
}
