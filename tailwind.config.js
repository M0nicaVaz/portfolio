/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        blue: '#8BFBF5',
        purple: '#9B70C6',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#A0FAA6',
        yellow: '#F1FA94',
        gray: '#3A3E4F',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 600ms ease-in-out infinite ',
      },
    },
  },
  plugins: [],
};
