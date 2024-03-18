/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "DM Sans, sans",
      },
      fontSize: { medium: "1.6rem", less: "1.3rem" },
      colors: {
        darkBlue: "#0B1F39",
        base: "#F1F1F5",
      },
    },
    screens: {
      xs: { min: "390px", max: "429px" },
      s: { min: "430px", max: "639px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
