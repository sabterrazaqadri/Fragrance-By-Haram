import type { ProductNotes } from '@/lib/types';

function Connector() {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <span className="h-8 w-px bg-gold/40" />
      <span className="text-[10px] leading-none text-gold">◆</span>
      <span className="h-8 w-px bg-gold/40" />
    </div>
  );
}

function Tier({ label, notes }: { label: string; notes: string[] }) {
  if (!notes || notes.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold-deep">
          {label}
        </p>
        <p className="mt-3 font-serif text-xl italic text-smoke">
          Notes coming soon
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold-deep">
        {label}
      </p>
      <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-serif text-2xl text-dark sm:text-3xl">
        {notes.map((note, i) => (
          <span key={note} className="flex items-center gap-3">
            {i > 0 && <span className="text-sm text-gold">◆</span>}
            {note}
          </span>
        ))}
      </p>
    </div>
  );
}

export function FragrancePyramid({ notes }: { notes: ProductNotes }) {
  return (
    <section id="pyramid" className="scroll-mt-24 border-y border-gold/15 bg-light">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">The Fragrance Pyramid</p>
          <div className="mx-auto mt-4 h-px w-12 bg-gold" />
          <h2 className="mt-5 font-serif text-4xl leading-tight text-dark sm:text-5xl">
            How it unfolds on skin
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
          <Tier label="Top" notes={notes.top} />
          <Connector />
          <Tier label="Heart" notes={notes.heart} />
          <Connector />
          <Tier label="Base" notes={notes.base} />
        </div>
      </div>
    </section>
  );
}
