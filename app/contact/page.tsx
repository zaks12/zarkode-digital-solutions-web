import type { Metadata } from 'next';
import { Phone, Mail } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeroBackground } from '@/components/layout/PageHeroBackground';
import { ProjectInquiryForm } from '@/components/contact/ProjectInquiryForm';
import { WhatWeCanHelpWith } from '@/components/contact/WhatWeCanHelpWith';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { pageImages } from '@/data/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Zarkode Digital Solutions | Start a Project',
  description:
    'Start a project with Zarkode Digital Solutions. Tell us about your business, digital product, website, software, growth, or technology needs.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Zarkode Digital Solutions | Start a Project',
    description:
      'Start a project with Zarkode Digital Solutions. Tell us about your business, digital product, website, software, growth, or technology needs.',
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative border-b border-border/60">
        <PageHeroBackground src={pageImages.contact.header} />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Let&apos;s Talk About What You&apos;re Building.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Have a business problem, digital idea, or technology project in
            mind? Tell us what you&apos;re working on and we&apos;ll explore how
            Zarkode can help.
          </p>
        </div>
      </div>

      <Section className="border-t border-border/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Start With the Business Need.
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  You don&apos;t need to have everything figured out before
                  reaching out. Give us the context, what you&apos;re trying to
                  achieve, and where you&apos;re currently stuck. We&apos;ll use
                  that information to understand the opportunity and determine
                  the right next step.
                </p>
                <p>
                  From digital presence and e-commerce to custom software,
                  digital growth, infrastructure, and technology consulting, we
                  work with businesses at different stages of their digital
                  journey.
                </p>
              </div>

              <div className="mt-8 space-y-3 border-t border-border/60 pt-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Reach Us Directly
                </h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${siteConfig.contact.phone1}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary/60" />
                    {siteConfig.contact.phone1}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone2}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary/60" />
                    {siteConfig.contact.phone2}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-primary/60" />
                    {siteConfig.contact.email}
                  </a>
                  <p className="font-mono text-xs text-muted-foreground/60">
                    RC No. {siteConfig.rcNumber}
                  </p>
                </div>
              </div>
            </div>

            <ProjectInquiryForm />
          </div>
        </Container>
      </Section>

      <WhatWeCanHelpWith />
      <ContactCTA />
    </>
  );
}
