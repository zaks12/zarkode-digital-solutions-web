import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Thank You',
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Thank You
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Your message has been received. We will be in touch shortly.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </Container>
  );
}
