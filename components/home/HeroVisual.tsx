import { Server, Code2, Globe, Database, Layers } from 'lucide-react';

const nodes = [
  { x: 8, y: 30, label: '01' },
  { x: 32, y: 14, label: '02' },
  { x: 62, y: 24, label: '03' },
  { x: 88, y: 12, label: '04' },
  { x: 28, y: 62, label: '05' },
  { x: 58, y: 74, label: '06' },
  { x: 82, y: 58, label: '07' },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [2, 6], [1, 4],
];

const panels = [
  { icon: Code2, label: 'Build', delay: '0s' },
  { icon: Server, label: 'Deploy', delay: '1s' },
  { icon: Globe, label: 'Presence', delay: '2s' },
  { icon: Database, label: 'Data', delay: '0.5s' },
];

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-16 w-full max-w-5xl md:mt-20"
    >
      {/* Grid background */}
      <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* System visualization */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Connected-nodes diagram */}
        <div className="relative rounded-lg border border-border bg-card/40 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground/60">
              system-map
            </span>
            <div className="flex items-center gap-1.5">
              <span className="hero-pulse h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-xs text-primary/70">active</span>
            </div>
          </div>

          <svg
            viewBox="0 0 100 80"
            className="w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Static connection lines */}
            {connections.map(([a, b], i) => (
              <line
                key={`line-${i}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="hsl(var(--border))"
                strokeWidth="0.4"
              />
            ))}

            {/* Animated data-flow lines */}
            {connections.map(([a, b], i) => (
              <line
                key={`flow-${i}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="hsl(var(--primary))"
                strokeWidth="0.4"
                strokeDasharray="3 97"
                className="hero-data-flow"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.label}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2.4"
                  fill="hsl(var(--background))"
                  stroke="hsl(var(--primary) / 0.4)"
                  strokeWidth="0.4"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1"
                  fill="hsl(var(--primary))"
                  className="hero-pulse"
                  style={{ animationDelay: `${parseInt(node.label) * 0.3}s` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Abstract system panels */}
        <div className="grid grid-cols-2 gap-4">
          {panels.map((panel) => (
            <div
              key={panel.label}
              className="flex flex-col items-start rounded-lg border border-border bg-card/40 p-4"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-primary">
                <panel.icon className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {panel.label}
              </span>
              <div className="mt-3 h-1.5 w-full rounded-full bg-border/60">
                <div
                  className="hero-pulse h-full rounded-full bg-primary/60"
                  style={{ width: '60%', animationDelay: panel.delay }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom system bar */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg border border-border bg-card/30 px-6 py-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary/70" />
          <span className="font-mono text-xs text-muted-foreground">
            digital_products
          </span>
        </div>
        <div className="hidden h-3 w-px bg-border sm:block" />
        <div className="flex items-center gap-2">
          <span className="hero-pulse h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-xs text-muted-foreground">
            systems_online
          </span>
        </div>
        <div className="hidden h-3 w-px bg-border sm:block" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground/50">
            build &rarr; deploy &rarr; grow
          </span>
        </div>
      </div>
    </div>
  );
}
