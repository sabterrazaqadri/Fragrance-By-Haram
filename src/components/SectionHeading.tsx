export function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = 'center',
  as: As = 'h2',
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2' | 'h3';
}) {
  const items = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${items}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`mt-4 h-px w-12 bg-gold ${align === 'center' ? 'mx-auto' : ''}`} />
      <As className="mt-5 font-serif text-4xl leading-tight text-dark sm:text-5xl">
        {heading}
      </As>
      {sub && (
        <p
          className={`mt-4 max-w-xl font-sans text-base leading-relaxed text-ink-soft ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
