import { DropletIcon, SparkleIcon, FlaskIcon, TruckIcon } from './icons';

const values = [
  { Icon: DropletIcon, title: 'Long Lasting', sub: '10–12 hr trail' },
  { Icon: SparkleIcon, title: 'Inspired Luxury', sub: 'EDP concentration' },
  { Icon: FlaskIcon, title: 'Crafted Small-Batch', sub: 'Made in Pakistan' },
  { Icon: TruckIcon, title: 'COD & Easy Returns', sub: 'Nationwide' },
];

export function ValuesBar() {
  return (
    <section className="border-b border-gold/15 bg-light">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
        {values.map(({ Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3.5">
            <Icon className="h-8 w-8 shrink-0 text-gold" />
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-dark">
                {title}
              </p>
              <p className="font-sans text-xs text-smoke">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
