function Star({ fill }: { fill: number }) {
  // fill: 0..1 fraction of this star that should be gold
  const id = `star-${Math.random().toString(36).slice(2)}`;
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#b89544" />
          <stop offset={`${fill * 100}%`} stopColor="#d8cdb6" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.47 5.27 5.78.72-4.27 3.94 1.13 5.72L10 14.9l-5.11 2.94 1.13-5.72L1.75 7.49l5.78-.72L10 1.5z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

export function Rating({
  rating,
  reviewCount,
  showCount = true,
}: {
  rating: number;
  reviewCount?: number;
  showCount?: boolean;
}) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    Math.max(0, Math.min(1, rating - i))
  );
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-0.5"
        role="img"
        aria-label={`Rated ${rating} out of 5`}
      >
        {stars.map((fill, i) => (
          <Star key={i} fill={fill} />
        ))}
      </div>
      <span className="font-sans text-xs text-ink-soft">
        {rating.toFixed(1)}
        {showCount && reviewCount !== undefined && reviewCount > 0 && (
          <span className="text-smoke"> ({reviewCount})</span>
        )}
      </span>
    </div>
  );
}
