import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { engagementTypes } from '@/data/services';

export function HowWeHelp() {
  return (
    <Section className="border-t border-border/40 bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="How You Can Engage Us"
          title="From a Single Service to a Full Digital Build"
          description="These capabilities can work independently or together — depending on what your business needs."
        />
        <div className="relative grid gap-8 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {engagementTypes.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-border bg-background/60 p-6 transition-colors duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/40">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-2xl font-bold text-border">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {index < engagementTypes.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-8 bg-border md:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
