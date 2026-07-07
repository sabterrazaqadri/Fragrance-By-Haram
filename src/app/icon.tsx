import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

/** Brand monogram favicon — shows next to the domain in Google results. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#17120b',
          color: '#b89544',
          fontSize: 320,
          fontWeight: 600,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.04em',
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
