/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../src/assets/hero.jpg')",
      }),
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
