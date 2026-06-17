import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f4efe4',
        light: '#ece4d3',
        panel: '#fbf8f1',
        dark: '#1c1812',
        'ink-soft': '#5f574b',
        smoke: '#8a8175',
        gold: '#b89544',
        'gold-deep': '#8a6b25',
        espresso: '#17120b',
        ivory: '#f2ece0',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
