import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeroBackground } from '@/components/layout/PageHeroBackground';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectsCTA } from '@/components/projects/ProjectsCTA';
import { projects } from '@/data/projects';
import { pageImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'Web Development Projects & Portfolio in Nigeria',
  description:
    'Explore selected web development and digital projects delivered by Zarkode Digital Solutions Ltd. for businesses and organizations in Nigeria.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Web Development Projects & Portfolio in Nigeria | Zarkode',
    description:
      'Explore selected web development and digital projects delivered by Zarkode Digital Solutions Ltd. for businesses and organizations in Nigeria.',
  },
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <div className="relative border-b border-border/60">
        <PageHeroBackground src={pageImages.projects.header} />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Selected Work
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Every business has different digital needs. Here are selected
            examples of work we&apos;ve delivered for businesses we support.
          </p>
        </div>
      </div>

      <Section className="border-t border-border/40">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Work That Starts With a Real Need
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every project begins with a specific business or organizational
              requirement and is shaped around its audience, goals and
              practical needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <ProjectCard project={featured} featured index={0} />
            {rest.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i + 1} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground/60">
            More client work and case studies will be added as they are ready to
            be showcased.
          </p>
        </Container>
      </Section>

      <ProjectsCTA />
    </>
  );
}
