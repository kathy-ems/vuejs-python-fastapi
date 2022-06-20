/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontSize: {
        xs: ".75rem",
        base: "1.125rem", // 18px
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        teal: "hsl(192, 100%, 67%)",
        purple: "hsl(280, 87%, 65%)",
        dmPurple: "hsl(280, 87%, 20%)",
        // Light Mode (higher number = darker)
        customGray: {
          100: "hsl(0, 0%, 100%)", // white
          200: "hsl(0, 0%, 98%)",
          400: "hsl(0, 0%, 70%)",
          600: "hsl(0, 0%, 40%)",
          900: "hsl(0, 0%, 0%)", // black
        },
        grayBlue: {
          100: "hsl(236, 33%, 92%)",
          200: "hsl(233, 11%, 84%)",
          300: "hsl(236, 9%, 61%)",
          400: "hsl(235, 19%, 35%)",
        },
        // Dark Mode (higher number = darker)
        dmBlue40: "hsl(235, 21%, 11%)",
        dmDesatBlue40: "hsl(235, 24%, 19%)",
        dmGrayBlue: {
          100: "hsl(234, 39%, 85%)",
          200: "hsl(236, 33%, 92%)", // hover
          300: "hsl(234, 11%, 52%)",
          400: "hsl(233, 14%, 35%)",
          410: "hsl(237, 14%, 26%)",
        },
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", "Sans-serif"],
    },
  },
  plugins: [],
};
