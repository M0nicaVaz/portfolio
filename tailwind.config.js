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
        slideDown: {
          ' 0%': {
            transform: 'translateY(-200%)',
            opacity: '0',
            visibility: 'hidden',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '100%': {
            transform: 'none',
            opacity: '1',
            visibility: 'visible',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 600ms ease-in-out infinite ',
        'to-bottom': 'slideDown 800ms ease-in-out 1',
      },
    },
  },
  plugins: [],
};
