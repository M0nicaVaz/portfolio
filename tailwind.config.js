/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#1E6D8A',
          200: '#8BFBF5',
        },
        teal: '#04625eff',
        purple: {
          100: '#663a92ff',
          200: '#9B70C6',
        },
        pink: '#ff49db',
        orange: '#ff8552ff',
        green: '#A0FAA6',
        yellow: {
          100: '#c7d40cff',
          200: '#F1F886',
        },
        gray: {
          100: '#E7E7E8',
          200: '#282a36',
          300: '#16181F',
        },
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
        disappear: {
          to: {
            opacity: 0,
            visibility: 0,
          },
        },
      },
      animation: {
        'wiggle-fast': 'wiggle 300ms ease-in-out 3',
        'wiggle-infinite': 'wiggle 600ms ease-in-out infinite',
        'to-bottom': 'slideDown 600ms ease-in-out 1',
        disappear: 'disappear 300ms 2s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
