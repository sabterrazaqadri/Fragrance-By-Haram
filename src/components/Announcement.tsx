export function Announcement() {
  const items = [
    'Complimentary delivery across Pakistan',
    'Cash on Delivery available',
    'Long-lasting Eau de Parfum',
  ];
  return (
    <div className="bg-espresso text-ivory">
      <div className="container-x flex items-center justify-center gap-3 py-2 text-center">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[10px] uppercase tracking-[0.2em] sm:text-[11px]">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="text-gold">·</span>}
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
