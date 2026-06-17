'use client';

interface QuantityStepperProps {
  value: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
}: QuantityStepperProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div>
      <span className="eyebrow mb-3 block">Quantity</span>
      <div className="inline-flex items-center border border-smoke/30">
        <button
          type="button"
          onClick={dec}
          disabled={value <= min}
          aria-label="Decrease quantity"
          className="flex h-11 w-11 items-center justify-center text-lg text-ink-soft transition-colors hover:bg-gold/10 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
        >
          &minus;
        </button>
        <span
          className="flex h-11 w-12 items-center justify-center border-x border-smoke/30 font-sans text-sm tabular-nums text-dark"
          aria-live="polite"
        >
          {value}
        </span>
        <button
          type="button"
          onClick={inc}
          disabled={value >= max}
          aria-label="Increase quantity"
          className="flex h-11 w-11 items-center justify-center text-lg text-ink-soft transition-colors hover:bg-gold/10 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
        >
          +
        </button>
      </div>
    </div>
  );
}
