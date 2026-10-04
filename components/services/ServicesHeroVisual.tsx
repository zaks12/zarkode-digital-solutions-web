import { Code2, TrendingUp, Server, Palette } from 'lucide-react';

const capabilities = [
  { icon: Code2, label: 'Development', x: 20, y: 28 },
  { icon: TrendingUp, label: 'Growth', x: 50, y: 14 },
  { icon: Server, label: 'Infrastructure', x: 80, y: 30 },
  { icon: Palette, label: 'Brand', x: 50, y: 68 },
];

const connections = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [0, 2],
  [1, 3],
];

export function ServicesHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-12 w-full md:mt-16"
    >
      <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground/60">
            capability-map
          </span>
          <div className="flex items-center gap-1.5">
            <span className="hero-pulse h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-xs text-primary/70">connected</span>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full">
          <svg
            viewBox="0 0 100 80"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {connections.map(([a, b], i) => (
              <line
                key={`conn-static-${i}`}
                x1={capabilities[a].x}
                y1={capabilities[a].y}
                x2={capabilities[b].x}
                y2={capabilities[b].y}
                stroke="hsl(var(--border))"
                strokeWidth="0.4"
              />
            ))}

            {connections.map(([a, b], i) => (
              <line
                key={`conn-flow-${i}`}
                x1={capabilities[a].x}
                y1={capabilities[a].y}
                x2={capabilities[b].x}
                y2={capabilities[b].y}
                stroke="hsl(var(--primary))"
                strokeWidth="0.4"
                strokeDasharray="2.5 97.5"
                className="hero-data-flow"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </svg>

          {capabilities.map((cap, i) => (
            <div
              key={cap.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${cap.x}%`,
                top: `${cap.y}%`,
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary shadow-lg md:h-12 md:w-12">
                  <cap.icon className="h-5 w-5" />
                </div>
                <span className="rounded border border-border/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground md:text-xs">
                  {cap.label}
                </span>
              </div>
              <span
                className="hero-pulse absolute left-1/2 top-1/2 -z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/40 pt-4">
          <span className="font-mono text-xs text-muted-foreground/60">
            4 connected capabilities
          </span>
          <div className="hidden h-3 w-px bg-border sm:block" />
          <span className="font-mono text-xs text-muted-foreground/60">
            independent or combined
          </span>
          <div className="hidden h-3 w-px bg-border sm:block" />
          <span className="font-mono text-xs text-primary/60">
            build &rarr; deploy &rarr; grow
          </span>
        </div>
      </div>
    </div>
  );
}
