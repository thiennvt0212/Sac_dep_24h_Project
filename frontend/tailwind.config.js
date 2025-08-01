/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceOil: {
          "0%, 100%": {
            transform: "translateY(-6%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceOil: "bounceOil 3s infinite",

      },

      backgroundColor: {
        'bgDate': '#e7eadb',
        'bgDateHover': '#86b85e'
      },
    },
    plugins: [],
  }

}

