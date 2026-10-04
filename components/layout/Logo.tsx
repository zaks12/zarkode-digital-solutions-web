import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        'flex h-12 w-[190px] items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/ZDS.png"
        alt="Zarkode Digital Solutions"
        width={190}
        height={64}
        priority
        className="h-full w-full object-contain"
      />
    </Link>
  );
}
