
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

type PricingSectionProps = {
  compact?: boolean;
};

const packages = [
  {
    name: 'Launchpad',
    label: 'GET ONLINE',
    price: '₦250,000',
    description:
      'A professional starting point for businesses ready to establish their online presence.',
    features: [
      'Website of up to 5 pages',
      'Mobile-friendly design',
      'Contact form and WhatsApp integration',
      'Social media links',
      'Basic on-page SEO',
    ],
  },
  {
    name: 'Growth Engine',
    label: 'GROW YOUR BUSINESS',
    price: '₦300,000',
    description:
      'A stronger digital presence designed to help your business build visibility and credibility.',
    popular: true,
    features: [
      'Website of up to 10 pages',
      'Everything in Launchpad',
      'Google Business Profile setup',
      'Enhanced on-page SEO',
      'Social media integration',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Digital Advantage',
    label: 'SCALE WITH TECHNOLOGY',
    price: '₦450,000',
    description:
      'A more advanced digital experience for businesses with broader requirements.',
    features: [
      'Website with 10+ pages, based on scope',
      'Everything in Growth Engine',
      'Branding consultation',
      'Booking or ordering functionality, where applicable',
      'Advanced on-page SEO setup',
      '30-day post-launch support',
    ],
  },
];

export function PricingSection({
  compact = false,
}: PricingSectionProps) {
  return (
     <Section className="relative overflow-hidden border-t border-border/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
            Transparent Pricing
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Right Solution for Your Next Stage
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Practical website packages designed around different business
            needs, with room to grow as your requirements evolve.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article
              key={item.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-colors duration-300 md:p-8 ${
                item.popular
                  ? 'border-emerald-500/70 bg-emerald-500/[0.06] shadow-lg shadow-emerald-950/10 lg:-translate-y-2'
                  : 'border-border/70 bg-card/60 hover:border-emerald-500/40'
              }`}
            >
              {item.popular && (
                <span className="mb-5 w-fit rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular Choice
                </span>
              )}

              <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                {item.label}
              </p>

              <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
                {item.name}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-6">
                <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {item.price}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  One-time project fee
                </p>
              </div>

              <div className="my-6 border-t border-border/70" />

              <p className="text-sm font-semibold text-foreground">
                What&apos;s included
              </p>

              <ul className="mt-4 flex-1 space-y-3">
                {item.features
                  .slice(0, compact ? 4 : undefined)
                  .map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 font-bold text-emerald-500"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>

              <Link
                href={`/contact?package=${encodeURIComponent(item.name)}`}
                className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  item.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'border border-border bg-background text-foreground hover:border-emerald-500/60 hover:text-emerald-500'
                }`}
              >
                Discuss This Package
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Prices cover the listed scope. Domain registration, hosting,
          advertising spend, third-party subscriptions and complex integrations
          are quoted separately unless expressly included. Final scope and
          delivery timelines are confirmed before work begins.
        </p>

        {compact && (
          <div className="mt-8 text-center">
            <Link
              href="/services#pricing"
              className="text-sm font-semibold text-emerald-500 underline-offset-4 hover:underline"
            >
              Compare all package features
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
