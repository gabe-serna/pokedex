/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animate';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const hexCodes = [
  '#A8A77A',
  '#EE8130',
  '#6390F0',
  '#F7D02C',
  '#7AC74C',
  '#96D9D6',
  '#C22E28',
  '#A33EA1',
  '#E2BF65',
  '#A98FF3',
  '#F95587',
  '#A6B91A',
  '#B6A136',
  '#735797',
  '#6F35FC',
  '#705746',
  '#B7B7CE',
  '#D685AD'
];
const safelist = [
  numbers.map(n => `grid-cols-${n}`),
  numbers.map(n => `gap-${n}`),
  hexCodes.map(c => `data-[state=checked]:bg-[${c}]`),
  hexCodes.map(c => `border-[${c}]`)
];

const config = {
  safelist: safelist.flat(),
  important: true,
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          muted: 'hsl(var(--accent-muted))',
          foreground: 'hsl(var(--accent-foreground))',
          foregroundMuted: 'hsl(var(--accent-foreground-muted))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [animate]
};

export default config;
