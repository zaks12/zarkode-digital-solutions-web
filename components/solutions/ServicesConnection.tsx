import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { Button } from '@/components/ui/button';

export function ServicesConnection() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="One Business Need Can Require More Than One Capability"
          description="A digital project may involve development, design, infrastructure, growth or ongoing support. Zarkode can bring the relevant capabilities together around the requirement."
          align="left"
        />
        <div>
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
