import { cn } from '@/lib/utils';

export function Section({
  className,
  children,
  as: Tag = 'section',
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn('py-16 md:py-24', className)}>
      {children}
    </Tag>
  );
}
