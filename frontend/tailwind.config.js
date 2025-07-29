/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'bgDate': '#e7eadb',
        'bgDateHover': '#86b85e'
      },
    },
  },
  plugins: [],

}

