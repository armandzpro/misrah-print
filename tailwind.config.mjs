/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:     '#e8171a',
          'red-d': '#b81215',
          dark1:   '#1e222e',
          dark2:   '#252a38',
          dark3:   '#2e3445',
          dark4:   '#3a4055',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
