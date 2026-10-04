import { ExternalLink } from 'lucide-react';
import type { Client } from '@/data/clients';

/**
 * Generates initials from a client name for the placeholder logo tile.
 * Handles both space-separated and single-word names.
 */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function ClientCard({ client }: { client: Client }) {
  const content = (
    <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-primary/30">
      <div
        aria-hidden="true"
        className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-15"
      />
      <div className="relative flex items-center gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
          {client.logo ? (
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-full w-full object-contain p-2"
            />
          ) : (
            <span className="font-heading text-sm font-bold text-primary/70">
              {getInitials(client.name)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-heading text-base font-semibold text-foreground">
            {client.name}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {client.descriptor}
          </p>
        </div>
        {client.website && (
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        )}
      </div>
    </div>
  );

  if (client.website) {
    return (
      <a
        key={client.name}
        href={client.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${client.name} website (opens in a new tab)`}
        className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  return (
    <div key={client.name} className="block rounded-xl">
      {content}
    </div>
  );
}
