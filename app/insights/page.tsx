import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { InsightCard } from '@/components/insights/InsightCard';
import { insights, insightCategories } from '@/data/insights';
import { pageImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'Technology & Business Insights',
  description:
    'Read insights from Zarkode Digital Solutions Ltd. on web development, digital products, technology, branding, and practical solutions for businesses in Nigeria.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Technology & Business Insights | Zarkode',
    description:
      'Read insights from Zarkode Digital Solutions Ltd. on web development, digital products, technology, branding, and practical solutions for businesses in Nigeria.',
  },
};

export default function InsightsPage() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i.slug !== featured.slug);

  return (
    <>
      {/* Page header with background image */}
      <div className="relative border-b border-border/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={pageImages.insights.header}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-primary">
            Zarkode Insights
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Perspectives on Digital Technology and Business
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Practical writing from the Zarkode team on web development, digital
            strategy, e-commerce, and building technology that serves real
            business needs.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <Section className="border-t border-border/40">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Featured
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <InsightCard insight={featured} featured />
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="border-t border-border/40 bg-card/30 py-10 md:py-12">
        <Container>
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Article grid */}
      <Section className="border-t border-border/40">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              All Articles
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border/40">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell us what you&apos;re building and we&apos;ll explore the
                right approach together.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
