
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  size = 'header',
}: {
  className?: string;
  size?: 'header' | 'footer';
}) {
  const isFooter = size === 'footer';

  return (
    <Link
      href="/"
      className={cn(
        isFooter
          ? 'flex h-12 w-[230px] max-w-full items-center'
          : 'flex h-14 w-[260px] max-w-full items-center',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/ZDS.jpeg"
        alt="Zarkode Digital Solutions"
        width={260}
        height={90}
        priority={!isFooter}
        className="h-full w-full object-contain"
      />
    </Link>
  );
}
