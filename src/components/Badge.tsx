import type { Badge as BadgeType } from '@/lib/types';

const labels: Record<BadgeType, string> = {
  bestseller: 'Bestseller',
  new: 'New',
  sale: 'Sale',
};

const styles: Record<BadgeType, string> = {
  bestseller: 'bg-dark text-ivory',
  new: 'bg-gold text-espresso',
  sale: 'bg-gold-deep text-ivory',
};

export function Badge({ badge }: { badge: BadgeType }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${styles[badge]}`}
    >
      {labels[badge]}
    </span>
  );
}
