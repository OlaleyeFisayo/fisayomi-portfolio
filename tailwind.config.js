/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        loader: "rgba(0, 0, 0, 0.92)",
        beige: "#ECE4D6",
      },
      textColor: {
        offWhite: "#FAF9F6",
        charcoal: "#464646",
      },
      animation: {
        "infinite-scroll-right": "infinite-scroll-right 25s linear infinite",
        "infinite-scroll-left": "infinite-scroll-left 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
