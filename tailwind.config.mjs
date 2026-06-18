/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
};
