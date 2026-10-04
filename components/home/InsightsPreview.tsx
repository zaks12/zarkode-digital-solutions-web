import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/home/SectionHeading';
import { SectionBackground } from '@/components/home/SectionBackground';
import { Button } from '@/components/ui/button';
import { InsightCard } from '@/components/insights/InsightCard';
import { insights } from '@/data/insights';
import { homeSectionBg } from '@/data/images';

export function InsightsPreview() {
  const previewInsights = insights.slice(0, 3);

  return (
    <Section className="relative overflow-hidden border-t border-border/40 bg-card/30">
      <SectionBackground
        src={homeSectionBg.insights}
        opacity={0.05}
        gradient="from-background via-background/95 to-background/90"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Insights"
          title="Insights for Building Better Digital Businesses"
          description="Perspectives and technical writing from the Zarkode team."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewInsights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href="/insights">
              Explore All Insights
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
