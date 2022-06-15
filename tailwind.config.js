module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        20: '20px',
      },
      colors: {
        'regal-red': '#CF1430',
      },
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1217px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
