import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#CB3CFF',
          200: '#AEB9E1',
        },
        dark: {
          100: '#081028',
          200: '#0B1739',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
