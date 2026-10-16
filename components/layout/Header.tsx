import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/layout/Logo';
import { MainNav } from '@/components/layout/MainNav';
import { MobileNav } from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Logo size="header" />
        <MainNav />
        <div className="hidden md:block">
          <Button asChild>
            <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
          </Button>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
