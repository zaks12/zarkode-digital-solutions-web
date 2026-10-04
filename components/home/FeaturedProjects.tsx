import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { featuredProjects } from '@/data/home';
import { homeSectionBg } from '@/data/images';

export function FeaturedProjects() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40 bg-card/30">
      <SectionBackground
        src={homeSectionBg.featuredProjects}
        opacity={0.06}
        gradient="from-background via-background/90 to-background/95"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Selected Work"
          title="A Selection of Businesses We've Supported"
          description="We work with businesses across different sectors to build, improve, and maintain their digital presence. These are selected examples from our growing client portfolio."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} website (opens in a new tab)`}
              className="group flex items-center justify-between rounded-lg border border-border bg-background/80 p-6 backdrop-blur-sm transition-colors hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="min-w-0">
                <p className="font-mono text-xs text-primary">{project.category}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
