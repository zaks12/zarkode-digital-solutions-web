import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

export function ProjectCard({
  project,
  featured = false,
  index,
}: {
  project: Project;
  featured?: boolean;
  index?: number;
}) {
  const content = (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40',
        featured && 'lg:col-span-2 lg:flex-row'
      )}
    >
      <div
        className={cn(
          'relative min-h-[200px] bg-secondary',
          featured ? 'lg:w-1/2 lg:min-h-[340px]' : 'h-48'
        )}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className={cn(
              'h-full w-full',
              project.imageFit === 'contain'
                ? 'object-contain p-8'
                : 'object-cover'
            )}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs text-muted-foreground/40">
              Preview coming soon
            </span>
          </div>
        )}
      </div>
      <div
        className={cn(
          'flex flex-1 flex-col justify-between p-6',
          featured && 'lg:justify-center'
        )}
      >
        <div>
          {index !== undefined && (
            <p className="mb-2 font-mono text-sm text-primary/40">
              0{index + 1}
            </p>
          )}
          <p className="font-mono text-xs text-primary">{project.category}</p>
          <h3
            className={cn(
              'mt-2 font-heading font-semibold text-foreground',
              featured ? 'text-2xl' : 'text-lg'
            )}
          >
            {project.name}
          </h3>
          {project.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>
        <div className="mt-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
          <span>{project.website ? 'Visit website' : 'View project'}</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </article>
  );

  if (project.website) {
    return (
      <a
        key={project.name}
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} website (opens in a new tab)`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  return content;
}
