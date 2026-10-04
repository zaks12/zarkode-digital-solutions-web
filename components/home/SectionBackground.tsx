/**
 * Decorative background image layer for homepage sections.
 *
 * Renders a low-opacity image behind a dark gradient overlay so the
 * Zarkode dark theme remains dominant. The image is purely decorative:
 * pointer-events-none and aria-hidden prevent it from interfering
 * with clicks, screen readers, or keyboard navigation.
 */

export function SectionBackground({
  src,
  opacity = 0.08,
  gradient = 'from-background via-background/95 to-background/90',
  position = 'center',
}: {
  src: string;
  opacity?: number;
  gradient?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}) {
  const positionClass = {
    center: 'bg-center',
    top: 'bg-top',
    bottom: 'bg-bottom',
    left: 'bg-left',
    right: 'bg-right',
  }[position];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-cover ${positionClass}`}
        style={{ backgroundImage: `url(${src})`, opacity }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
    </div>
  );
}
