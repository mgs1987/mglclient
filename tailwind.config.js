/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {},
    extend: {
      fontFamily: {
        title: "DM Sans, sans",
      },
      colors: {
        darkBlue: "#0B1F39",
        base: "#F1F1F5",
      },
    },
  },
  plugins: [],
};
