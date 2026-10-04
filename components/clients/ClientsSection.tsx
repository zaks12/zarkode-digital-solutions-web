import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { ClientCard } from '@/components/clients/ClientCard';
import { clients } from '@/data/clients';

export function ClientsSection() {
  return (
    <Section className="border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Organizations We've Worked With"
          description="We work with businesses across different sectors to build, improve, and maintain their digital presence. These are selected examples from our growing client portfolio."
        />
        <p className="mb-8 text-center font-mono text-sm text-muted-foreground/60">
          Selected examples from our growing client portfolio.
        </p>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
