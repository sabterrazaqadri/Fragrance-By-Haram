import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { whatsAppContactUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Fragrances by Haram on WhatsApp or by email. Cash on Delivery available nationwide.',
};

const email = 'hello@fragrancesbyharam.com';

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Get in touch"
          heading="We're here to help."
          sub="Questions about a scent, an order, or delivery? Message us on WhatsApp for the fastest reply — orders are confirmed in chat with Cash on Delivery."
          as="h1"
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          <a
            href={whatsAppContactUrl('Assalam o Alaikum! I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-gold/25 bg-panel p-8 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <p className="eyebrow">WhatsApp</p>
            <p className="mt-3 font-serif text-2xl text-dark group-hover:text-gold-deep">
              +92 349 2346003
            </p>
            <p className="mt-2 font-sans text-sm text-ink-soft">
              Tap to chat — fastest way to order or ask a question.
            </p>
          </a>

          <a
            href={`mailto:${email}`}
            className="group flex flex-col border border-gold/25 bg-panel p-8 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <p className="eyebrow">Email</p>
            <p className="mt-3 break-all font-serif text-2xl text-dark group-hover:text-gold-deep">
              {email}
            </p>
            <p className="mt-2 font-sans text-sm text-ink-soft">
              For wholesale, press and general enquiries.
            </p>
          </a>
        </div>

        <p className="mt-12 text-center font-sans text-xs uppercase tracking-[0.2em] text-smoke">
          Complimentary delivery across Pakistan · Cash on Delivery
        </p>
      </div>
    </div>
  );
}
