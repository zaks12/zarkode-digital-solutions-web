
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
          eyebrow="Our Clients"
          title="Organizations We've Supported"
          description="Meet some of the organizations we've supported through digital solutions and project collaboration."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </Container>
    </Section>
  );
}