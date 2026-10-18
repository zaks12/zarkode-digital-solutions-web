
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/layout/Logo';
import { footerNav, siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#07111f]">
      {/* Technology background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Dark navy overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#07111f]/95"
      />

      {/* Subtle teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-primary/10 via-transparent to-transparent"
      />

      <Container className="relative py-10 md:py-14">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] lg:gap-8">
          <div className="space-y-4">
            <Logo size="footer" />

            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone1}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-primary/70" />
                {siteConfig.contact.phone1}
              </a>

              <a
                href={`tel:${siteConfig.contact.phone2}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-primary/70" />
                {siteConfig.contact.phone2}
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5 text-primary/70" />
                {siteConfig.contact.email}
              </a>

              <p className="font-mono text-xs text-muted-foreground/60">
                RC No. {siteConfig.rcNumber}
              </p>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
