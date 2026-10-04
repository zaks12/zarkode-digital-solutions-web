import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { serviceGroups } from '@/data/services';

export function ServiceCategories() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What Zarkode Does"
          description="Four service areas covering the full digital needs of a modern business."
        />
        <div className="space-y-6">
          {serviceGroups.map((group, index) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 transition-colors duration-300 hover:border-primary/30"
            >
              <div
                aria-hidden="true"
                className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/60"
              />
              <div className="relative grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_2fr]">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/40">
                      <group.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm text-primary/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:pt-12">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
