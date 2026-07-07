import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE_NAME} — Luxury Long-Lasting Eau de Parfum`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social-share card used when a page has no image of its own. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#17120b',
          color: '#f2ece0',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: '2px solid #b89544',
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: '0.42em',
            color: '#b89544',
            textTransform: 'uppercase',
          }}
        >
          Eau de Parfum
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            marginTop: 24,
            textAlign: 'center',
            lineHeight: 1.05,
          }}
        >
          Fragrances by Haram
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 28,
            color: '#f2ece0',
            fontStyle: 'italic',
          }}
        >
          A scent that stays. Worn by the devoted.
        </div>
        <div
          style={{
            fontSize: 22,
            marginTop: 40,
            letterSpacing: '0.24em',
            color: '#b89544',
            textTransform: 'uppercase',
          }}
        >
          Crafted in Pakistan · Cash on Delivery
        </div>
      </div>
    ),
    { ...size },
  );
}
