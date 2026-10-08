import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeroBackground } from '@/components/layout/PageHeroBackground';
import { Perspective } from '@/components/about/Perspective';
import { Capabilities } from '@/components/about/Capabilities';
import { Principles } from '@/components/about/Principles';
import { AboutCTA } from '@/components/about/AboutCTA';
import { pageImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'About Zarkode | Nigerian Technology & Digital Solutions Company',
  description:
    'Learn about Zarkode Digital Solutions Ltd., a Nigerian technology company based in Abuja helping businesses build digital products, strengthen their digital presence, and solve real business needs with technology.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Zarkode | Nigerian Technology & Digital Solutions Company',
    description:
      'Learn about Zarkode Digital Solutions Ltd., a Nigerian technology company based in Abuja helping businesses build digital products, strengthen their digital presence, and solve real business needs with technology.',
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="relative border-b border-border/60">
        <PageHeroBackground src={pageImages.about.header} />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Technology Built Around Real Business Needs.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Zarkode Digital Solutions is a Nigerian technology company based
            in Abuja, helping businesses build stronger digital presence,
            practical digital products, and technology solutions designed
            around the way they work.
          </p>
        </div>
      </div>

      <Section className="border-t border-border/40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={pageImages.about.perspective}
                alt="Business professionals collaborating on technology strategy"
                className="aspect-[4/3] w-full object-cover opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent"
              />
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Building Technology With Purpose
              </h2>

              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Zarkode Digital Solutions Ltd is an Abuja-based technology
                  company in Nigeria focused on web development, software,
                  digital products, and helping businesses use technology more
                  effectively.
                </p>

                <p>
                  We work across digital development, digital growth,
                  technology infrastructure, and brand and experience —
                  bringing these capabilities together when a business needs
                  more than a single digital service.
                </p>

                <p>
                  Our approach starts with understanding the business need,
                  then shaping the right digital solution around it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Perspective />
      <Capabilities />
      <Principles />

      <Section className="border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Built for What Comes Next.
            </h2>

            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Zarkode is building toward a broader technology practice —
                from digital products and custom software to automation, AI,
                SaaS, cloud technologies, business platforms, and digital
                transformation.
              </p>

              <p>
                The goal is not to chase every new technology. It is to
                understand where technology can create meaningful value for
                businesses and build solutions around that opportunity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <AboutCTA />
    </>
  );
}