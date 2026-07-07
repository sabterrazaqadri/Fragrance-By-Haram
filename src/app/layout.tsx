import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  SOCIAL_PROFILES,
  GOOGLE_SITE_VERIFICATION,
  absoluteUrl,
} from '@/lib/site';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · ${SITE_TAGLINE} in Pakistan`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Shopping',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: '@fragrancesbyharam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

/** Site-wide Organization + WebSite structured data (brand entity for Google). */
function SiteJsonLd() {
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'fragrancesbyharam',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon'),
        width: 512,
        height: 512,
      },
      image: absoluteUrl('/opengraph-image'),
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_PHONE,
        contactType: 'customer service',
        availableLanguage: ['English', 'Urdu'],
        areaServed: 'PK',
      },
      ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-PK',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Store',
      '@id': `${SITE_URL}/#store`,
      name: SITE_NAME,
      image: absoluteUrl('/opengraph-image'),
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      priceRange: 'PKR',
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Cash on Delivery, JazzCash, EasyPaisa',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-cream text-dark antialiased">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
