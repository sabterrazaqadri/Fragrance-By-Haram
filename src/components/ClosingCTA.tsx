import { Button } from './Button';

export function ClosingCTA() {
  return (
    <section className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-col items-center border border-gold/20 bg-panel px-6 py-16 text-center">
          <p className="eyebrow">Not sure where to begin?</p>
          <div className="mt-4 flex items-center gap-2 text-gold">
            <span className="h-px w-8 bg-gold/50" />
            <span className="text-[10px]">◆</span>
            <span className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-dark sm:text-5xl">
            Find your signature.
          </h2>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-ink-soft">
            Answer a few questions about how you want to be remembered, and we&apos;ll
            point you to the scent that fits.
          </p>
          <div className="mt-9">
            <Button href="/products" variant="primary">
              Take the Scent Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
