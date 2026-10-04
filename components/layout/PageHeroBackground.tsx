/**
 * Reusable decorative background image for page headers.
 *
 * Renders a low-opacity image behind the header content with a
 * gradient overlay to maintain the dark Zarkode aesthetic.
 *
 * The image is purely decorative — aria-hidden and pointer-events-none.
 */
export function PageHeroBackground({ src }: { src: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
    </div>
  );
}
