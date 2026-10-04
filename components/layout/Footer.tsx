import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/layout/Logo';
import { footerNav, siteConfig } from '@/lib/site';
import { footerBgImage } from '@/data/images';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      {/* Decorative background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${footerBgImage})`, opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <Container className="relative py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="space-y-2 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone1}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-primary/60" />
                {siteConfig.contact.phone1}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone2}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-primary/60" />
                {siteConfig.contact.phone2}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5 text-primary/60" />
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
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
