import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Insight } from '@/data/insights';

export function InsightCard({
  insight,
  featured = false,
}: {
  insight: Insight;
  featured?: boolean;
}) {
  return (
    <Link
      href="/insights"
      className={`
        group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card
        transition-colors hover:border-primary/40
        ${featured ? 'lg:flex-row lg:col-span-2' : ''}
      `}
    >
      <div
        className={`
          relative overflow-hidden bg-secondary
          ${featured ? 'h-56 lg:h-full lg:w-1/2' : 'h-44'}
        `}
      >
        <img
          src={insight.image}
          alt={insight.title}
          className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
        />
        {featured && (
          <span className="absolute left-4 top-4 rounded border border-primary/40 bg-background/80 px-2.5 py-1 font-mono text-xs text-primary backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>
      <div
        className={`
          flex flex-1 flex-col p-5
          ${featured ? 'lg:justify-center lg:p-8' : ''}
        `}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-primary">
            {insight.category}
          </span>
          <span className="text-muted-foreground/40">|</span>
          <span className="font-mono text-xs text-muted-foreground/60">
            {insight.readTime}
          </span>
        </div>
        <h3
          className={`
            mt-2 font-heading font-semibold text-foreground
            ${featured ? 'text-xl md:text-2xl' : 'text-base'}
          `}
        >
          {insight.title}
        </h3>
        <p
          className={`
            mt-2 text-sm leading-relaxed text-muted-foreground
            ${featured ? 'line-clamp-4' : 'line-clamp-2'}
          `}
        >
          {insight.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
          <span>Read article</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
