import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fragrances-by-haram.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Fragrances by Haram · Luxury Eau de Parfum',
    template: '%s · Fragrances by Haram',
  },
  description:
    'Small-batch luxury Eau de Parfum, crafted in Pakistan. Long-lasting fragrances with complimentary nationwide delivery and Cash on Delivery.',
  keywords: [
    'perfume',
    'fragrance',
    'Eau de Parfum',
    'Pakistan',
    'luxury perfume',
    'Fragrances by Haram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Fragrances by Haram',
    title: 'Fragrances by Haram · Luxury Eau de Parfum',
    description:
      'Small-batch luxury Eau de Parfum, crafted in Pakistan. Long-lasting and made to be worn by the devoted.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fragrances by Haram · Luxury Eau de Parfum',
    description: 'Small-batch luxury Eau de Parfum, crafted in Pakistan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
