import { Search, Hammer, TrendingUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { homeSectionBg } from '@/data/images';

const pillars = [
  {
    icon: Search,
    title: 'Understand',
    description:
      'We start with the business problem, goals, audience and requirements.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description:
      'We design and develop practical digital products and systems around those needs.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'We provide the technology, digital presence and ongoing support needed beyond launch.',
  },
];

export function Positioning() {
  return (
    <Section className="relative overflow-hidden border-t border-border/40">
      <SectionBackground src={homeSectionBg.positioning} opacity={0.06} />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Approach"
          title="Technology Built Around Your Business"
          description="We don't start with technology. We start with what your business needs — then build the right digital solution around it."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center md:text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card text-primary">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
