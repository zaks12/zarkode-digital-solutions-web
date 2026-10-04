import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for Zarkode Digital Solutions Ltd. — the terms and conditions governing use of our website and digital services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Zarkode Digital Solutions',
    description:
      'Terms of service for Zarkode Digital Solutions Ltd. — the terms and conditions governing use of our website and digital services.',
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <Container className="py-16 md:py-24">
        <p className="text-muted-foreground">Content to follow.</p>
      </Container>
    </>
  );
}
