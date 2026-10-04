import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Zarkode Digital Solutions Ltd. — how we handle and protect information shared through our website and services.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Zarkode Digital Solutions',
    description:
      'Privacy policy for Zarkode Digital Solutions Ltd. — how we handle and protect information shared through our website and services.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <Container className="py-16 md:py-24">
        <p className="text-muted-foreground">Content to follow.</p>
      </Container>
    </>
  );
}
